import { env } from '$env/dynamic/private'
import type { RequestEvent } from '@sveltejs/kit'
import { atob, btoa } from 'buffer'
import * as crypto from 'crypto'
import { dev } from '$app/environment'
import { getIpAddress } from './utils'

export function generateAPIKey(): string {
  const timestamp = new Date().getTime()
  const s = `${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()} -> ${timestamp} <- ${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}_${generateTemp5DigitWord()}`
  return encryptData(s)
}

export function isFromZeneOrigin(events: RequestEvent): Boolean {
  try {
    if (dev) return true
    if (events.request.headers.get('Origin') == 'https://www.zenemusic.co') return true
    if (events.cookies.get('i')?.split('.')?.length ?? 0 >= 3) return true

    return false
  } catch (e) {
    return false
  }
}

export function decryptAPIKeyAndIsValidOfSong(events: RequestEvent, key: string, ip: string): Boolean {
  if (isFromZeneOrigin(events) === false) return false

  const timestamp = new Date().getTime()
  const decryptValue = decryptTempKey(key?.replace('qS-1Z.oWEkQ', '') ?? '')
  const v = decryptValue?.match(RegExp(`${`@@#####`}(.*?)${`>>#####`}`))
  const en = v ? v[1] : null

  if (en == undefined) return false

  const difference = timestamp - parseInt(en.trim())
  const differenceinSeconds = Math.floor(difference / 1000)
  if (differenceinSeconds > 7 || difference < 0) return false

  if (decryptData(ip.trim()).trim() != getIpAddress(events).trim() && events.cookies.get('i')?.trim() != getIpAddress(events).trim()) {
    if (dev) return true
    return false
  }

  if (!events.request.headers.get('host')?.includes('zenemusic.co')) {
    if (dev) return true
    return false
  }

  return true
}

export function decryptAPIKeyAndIsValid(events: RequestEvent): boolean {
  if (isFromZeneOrigin(events) === false) return false

  try {
    const headers = events.request.headers
    const authKey = headers.get('AuthorizationKey')

    if ((authKey?.length ?? 0) < 5) return false

    const timestamp = new Date().getTime()
    let en: string | null = null

    if (authKey?.includes('qS-1Z.oWEkQ')) {
      const decryptValue = decryptTempKey(authKey?.replace('qS-1Z.oWEkQ', '') ?? '')

      const v = decryptValue?.match(RegExp(`${`@@#####`}(.*?)${`>>#####`}`))
      en = v ? v[1] : null
    } else {
      const decryptValue = decryptData(authKey?.toString()!)
      const v = decryptValue.match(RegExp(`${`->`}(.*?)${`<-`}`))
      en = v ? v[1] : null
    }

    if (en == undefined) return false

    const difference = timestamp - parseInt(en.trim())
    const differenceinSeconds = Math.floor(difference / 1000)
    if (differenceinSeconds > 20 || difference < 0) return false

    return true
  } catch (error) {
    return false
  }
}

export function decryptTempKey(encryptedText: string) {
  let secretKey = env.SECRET_TOKEN_LITE.toString()
  const textToChars = (text: any) => text.split('').map((c: any) => c.charCodeAt(0))
  const applySaltToChar = (code: any) => textToChars(secretKey).reduce((a: any, b: any) => a ^ b, code)

  return encryptedText
    ?.match(/.{1,2}/g)
    ?.map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join('')
}

export function decryptAPIKeyAndIsValidLong(events: RequestEvent): boolean {
  try {
    const headers = events.request.headers
    const authKey = headers.get('AuthorizationKey')

    const timestamp = new Date().getTime()
    const decryptValue = decryptData(authKey?.toString()!)
    const v = decryptValue.match(RegExp(`${`->`}(.*?)${`<-`}`))
    const ev = v ? v[1] : undefined
    if (ev == undefined) {
      return false
    }
    const difference = timestamp - parseInt(ev.trim())
    const differenceinSeconds = Math.floor(difference / 1000)
    if (differenceinSeconds > 600) return false

    return true
  } catch (error) {
    return false
  }
}

export function generateTemp5DigitWord(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const charactersLength = characters.length
  let result = ''

  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

export function encryptData(value: string): string {
  let encryptedText = ''
  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    const keyChar = env.SECRET_TOKEN_KEY.charCodeAt(i % env.SECRET_TOKEN_KEY.length)
    const encryptedCharCode = charCode ^ keyChar
    encryptedText += String.fromCharCode(encryptedCharCode)
  }
  return btoa(encryptedText).replaceLastChar('==', '')
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
    return ''
  }
}

const key = Buffer.from(env.SECRET_TOKEN_KEY.padEnd(16, '\0'), 'binary')

export function decryptAppSharedData(value: string): string {
  const v = value.replaceAll('__', '/')
  try {
    const decipher = crypto.createDecipheriv(env.ALGORITHM_ENCR_KEY, key, Buffer.alloc(16))
    let decryptedText = decipher.update(v, 'base64', 'utf8')
    decryptedText += decipher.final('utf8')
    return decryptedText
  } catch (e) {
    return ''
  }
}

export function encryptAppSharedData(plainText: string) {
  try {
    const cipher = crypto.createCipheriv(env.ALGORITHM_ENCR_KEY, key, Buffer.alloc(16))
    let cipherText = cipher.update(plainText, 'utf8', 'base64')
    cipherText += cipher.final('base64')
    const e = cipherText.replace(/=+$/, '')
    return e.replaceAll('/', '__')
  } catch (e) {
    return ''
  }
}
