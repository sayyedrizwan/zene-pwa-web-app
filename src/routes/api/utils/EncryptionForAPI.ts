import { env } from '$env/dynamic/private'
import type { RequestEvent } from '@sveltejs/kit'
import { atob, btoa } from 'buffer'

export function generateAPIKey(): string {
    const timestamp = new Date().getTime()
    const s = `${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()} -> ${timestamp} <- ${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}`
    return encryptData(s)
}

export function decryptAPIKeyAndIsValid(events: RequestEvent): boolean {
    return true
    // try {
    //     const headers = events.request.headers;
    //     const authKey = headers.get('AuthorizationKey');

    //     const timestamp = new Date().getTime()
    //     const decryptValue = decryptData(authKey?.toString()!)
    //     const v = decryptValue.match(RegExp(`${`->`}(.*?)${`<-`}`))
    //     const ev = v ? v[1] : undefined;
    //     if (ev == undefined) {
    //         return false
    //     }
    //     const difference = timestamp - parseInt(ev.trim());
    //     const differenceinSeconds = Math.floor(difference / 1000)
    //     if (differenceinSeconds > 10) {
    //         return false
    //     }
    //     return true
    // } catch (error) {
    //     return false
    // }
}

function generateTemp5DigitWord(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const charactersLength = characters.length
    let result = ''

    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

export function encryptData(value: string): string {
    try {
        let encryptedText = ''
        for (let i = 0; i < value.length; i++) {
            const charCode = value.charCodeAt(i)
            const keyChar = env.SECRET_TOKEN_KEY.charCodeAt(i % env.SECRET_TOKEN_KEY.length)
            const encryptedCharCode = charCode ^ keyChar
            encryptedText += String.fromCharCode(encryptedCharCode)
        }
        return btoa(encryptedText).replace('==', '')   
    } catch (error) {
        return value
    }
}

export function decryptData(value: string): string {
    try {
        value = atob(value)
        let decryptedText = ''
        for (let i = 0; i < value.length; i++) {
            const charCode = value.charCodeAt(i)
            const keyChar = env.SECRET_TOKEN_KEY.charCodeAt(i % env.SECRET_TOKEN_KEY.length)
            const decryptedCharCode = charCode ^ keyChar
            decryptedText += String.fromCharCode(decryptedCharCode)
        }
        return decryptedText
    } catch (error) {
        return ""
    }
}
