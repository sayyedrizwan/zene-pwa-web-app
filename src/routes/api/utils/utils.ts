import type { RequestEvent } from '@sveltejs/kit'
import { Buffer } from 'buffer'
import sharp from 'sharp'

export const support_mail_server = 'contactcreator@protonmail.com'

export const authKeyError = {
  error: `auth key is expired. please try auth or contact us '${support_mail_server}'`,
}

export const apiError = {
  error: 'No Data Found',
}

// API URL
export const lastfm_top_playing_songs = 'https://kerve.last.fm/kerve/charts?type=track&nr=6&format=json'

export function ipBaseUrl(ip: string) {
  return `http://ip-api.com/json/${ip}`
}

export const top_100_artists_billboard = 'https://www.billboard.com/charts/artist-100/'

export const radio_browser_url = '_api._tcp.radio-browser.info'
export const radio_browser_country = '/json/stations/bycountry/'
export const radio_browser_name = '/json/stations/search?name='

// cookie
export const last_sync_ts_cookie = 'last_sync_ts'
export const users_ip_address = 'i'
export const users_ip_details = 'i_d'

export function formatNumberString(numberString: string): string {
  const parsedNumber = Number(numberString)
  if (Number.isNaN(parsedNumber)) {
    return '1,27,149'
  }
  const formatter = new Intl.NumberFormat('en-US')
  return formatter.format(parsedNumber)
}

export async function getBase64FromImageUrl(imageUrl: string): Promise<string | undefined> {
  try {
    const res = await fetch(imageUrl)
    const abuffer = await res.arrayBuffer()

    const buffer = Buffer.from(new Uint8Array(abuffer))
    const buff = await sharp(buffer).toFormat('jpeg').toBuffer()
    let base64data = buff.toString('base64')
    return `data:image/jpeg;base64,${base64data.toString()}`
  } catch (error) {
    return ''
  }
}

export function joinArtists(artists: string[]): string {
  if (artists.length === 1) {
    return artists[0]
  } else if (artists.length === 2) {
    return artists.join(' & ')
  } else {
    const lastItem = artists.pop()
    const joinedString = artists.join(', ') + ' & ' + lastItem
    return joinedString
  }
}

export function getTextAfterKeyword(txt: string, char: string): string | null {
  const index: number = txt.indexOf(char)

  if (index !== -1) {
    const result: string = txt.substring(index + char.length).trim()
    return result
  } else {
    return txt
  }
}

export function getTextBeforeKeyword(txt: string, char: string): string | null {
  const index: number = txt.indexOf(char)

  if (index !== -1) {
    const result: string = txt.substring(0, index).trim()
    return result
  } else {
    return txt
  }
}
export function getTextBeforeLastKeyword(txt: string, char: string): string | null {
  const lastIndex: number = txt.lastIndexOf(char)

  if (lastIndex !== -1) {
    const result: string = txt.substring(0, lastIndex).trim()
    return result
  } else {
    return txt
  }
}

export function getIpAddress(events: RequestEvent): string {
  return events.cookies.get(users_ip_address) ?? ""
}

export function isStringValidJSONObject<T>(str: string): boolean {
  try {
    JSON.parse(str) as T
    return true
  } catch (error) {
    return false
  }
}
