export function setCookie(name: String, value: String, days: number = 365) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name: String) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export function genRdString(length: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet[randomIndex];
  }

  return result;
}

function strToArrayBuffer(str: string): ArrayBuffer {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

function arrayBufferToStr(buffer: ArrayBuffer): string {
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
}

async function generateIv(): Promise<ArrayBuffer> {
  return crypto.getRandomValues(new Uint8Array(12));
}

async function hashMessage(message: ArrayBuffer): Promise<ArrayBuffer> {
  return crypto.subtle.digest("SHA-256", message);
}

async function deriveKeyFromString(password: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  const baseKey = await crypto.subtle.importKey("raw", passwordBuffer, { name: "PBKDF2" }, false, ["deriveKey"]);

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode("some-random-salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function enTheData(plainText: string, password: string): Promise<string> {
  const key = await deriveKeyFromString(password);
  const iv = await generateIv();
  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    strToArrayBuffer(plainText)
  );

  const hash = await hashMessage(encryptedBuffer);
  const fullMessage = new Uint8Array([...new Uint8Array(iv), ...new Uint8Array(encryptedBuffer), ...new Uint8Array(hash)]);
  return btoa(String.fromCharCode(...fullMessage));
}

export async function decTheData(encryptedData: string, password: string): Promise<string | null> {
  const key = await deriveKeyFromString(password);
  const fullMessage = new Uint8Array(
    atob(encryptedData)
      .split("")
      .map((char) => char.charCodeAt(0))
  );

  const iv = fullMessage.slice(0, 12);
  const encryptedBuffer = fullMessage.slice(12, fullMessage.length - 32);
  const originalHash = fullMessage.slice(fullMessage.length - 32);

  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      encryptedBuffer
    );

    const recalculatedHash = new Uint8Array(await hashMessage(encryptedBuffer));
    if (!recalculatedHash.every((value, index) => value === originalHash[index])) {
      console.error("Data has been tampered with!");
      return null;
    }

    return arrayBufferToStr(decryptedBuffer);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
}
