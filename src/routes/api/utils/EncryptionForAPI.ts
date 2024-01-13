import type { RequestEvent } from "@sveltejs/kit";
import { atob, btoa } from "buffer";

const secret_key: string = 'the_key_is_the_rs_oneis';

export function generateAPIKey(): string {
    const timestamp = new Date().getTime()
    const s = `${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()} -> ${timestamp} <- ${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}`
    return encryptData(s)
}

export function decryptAPIKeyAndIsValid(events: RequestEvent): boolean {
    try {
        const headers = events.request.headers;
        const authKey = headers.get('AuthorizationKey');

        const timestamp = new Date().getTime()
        const decryptValue = decryptData(authKey?.toString()!)
        const v = decryptValue.match(RegExp(`${`->`}(.*?)${`<-`}`))
        const ev = v ? v[1] : undefined;
        if (ev == undefined) {
            return false
        }
        const difference = timestamp - parseInt(ev.trim());
        const differenceinSeconds = Math.floor(difference / 1000)
        console.log(differenceinSeconds)
        if (differenceinSeconds > 10) {
            return false
        }
        return true
    } catch (error) {
        return false
    }
}

function generateTemp5DigitWord(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let result = '';

    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


export function encryptData(value: string) {
    let encryptedText = '';
    for (let i = 0; i < value.length; i++) {
        const charCode = value.charCodeAt(i);
        const keyChar = secret_key.charCodeAt(i % secret_key.length);
        const encryptedCharCode = charCode ^ keyChar;
        encryptedText += String.fromCharCode(encryptedCharCode);
    }
    return btoa(encryptedText).replace("==", "");
}

export function decryptData(value: string) {
    value = atob(value);
    let decryptedText = '';
    for (let i = 0; i < value.length; i++) {
        const charCode = value.charCodeAt(i);
        const keyChar = secret_key.charCodeAt(i % secret_key.length);
        const decryptedCharCode = charCode ^ keyChar;
        decryptedText += String.fromCharCode(decryptedCharCode);
    }
    return decryptedText;
}