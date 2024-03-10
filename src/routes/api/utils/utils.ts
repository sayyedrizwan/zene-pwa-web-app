import type { RequestEvent } from '@sveltejs/kit'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'

export const support_mail_server = 'knocknock@zenemusic.co'

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

export const rent_an_advise_lyrics_search =  `https://www.rentanadviser.com/subtitles/subtitles4songs.aspx`
export const rent_an_advise_lyrics_find =  `https://www.rentanadviser.com/subtitles/`

export const google_news_api = 'https://news.google.com/rss/search'

export const bing_news_api = 'https://www.bing.com/news/search'

export const check_ip_aws = 'http://checkip.amazonaws.com/'

export const top_100_artists_billboard = 'https://www.billboard.com/charts/artist-100/'

export const radio_browser_url = '_api._tcp.radio-browser.info'
export const radio_browser_country = '/json/stations/bycountry/'
export const radio_browser_name = '/json/stations/search?name='
export const radio_browser_search_by_uuid = '/json/stations/byuuid?uuids='

export function spotifyAuthURL() {
  const state = generateRandomString(16)
  const scope = 'user-read-private playlist-read-private playlist-read-collaborative'
  const client_id = '07cca9af3ee4411baaf2355a8ea61d3f'
  const callback_url = `${location.href}/splaylists`
  return `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&state=${state}&redirect_uri=${callback_url}`
}

// cookie
export const last_sync_ts_cookie = 'last_sync_ts'
export const users_ip_address = 'i'
export const users_ip_details = 'i_d'

export let ipAddress: string | null = null

export async function isSameServerIp(ip: string) {
  if (ipAddress != null && ipAddress.includes('.')) {
    if (ip.textBeforeLastKeyword('.') == ipAddress.textBeforeLastKeyword('.')) return true
  }

  try {
    const r = await fetch(ipBaseUrl(''))
    const response = (await r.json()) as IpJsonResponse
    ipAddress = response.query
    if (ip.textBeforeLastKeyword('.') == ipAddress.textBeforeLastKeyword('.')) return true
    else return false
  } catch (error) {
    return false
  }
}

export function waitServer(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export function formatNumberString(numberString: string): string {
  const parsedNumber = Number(numberString)
  if (Number.isNaN(parsedNumber)) {
    return '1,27,149'
  }
  const formatter = new Intl.NumberFormat('en-US')
  return formatter.format(parsedNumber)
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

declare global {
  interface String {
    textAfterKeyword(char: string): string
    textAfterLastKeyword(char: string): string | null
    textBeforeKeyword(char: string): string | null
    textBeforeLastKeyword(char: string): string | null
    replaceLastChar(char: string, v: string): string
  }
}

String.prototype.replaceLastChar = function (char: string, v: string): string {
  const lastEqualIndex = this.lastIndexOf(char)
  if (lastEqualIndex !== -1) {
    return this.slice(0, lastEqualIndex) + v
  }
  return String(this)
}

String.prototype.textAfterKeyword = function (char: string): string {
  const index: number = this.indexOf(char)

  if (index !== -1) {
    const result: string = this.substring(index + char.length).trim()
    return result
  } else {
    return String(this)
  }
}

String.prototype.textAfterLastKeyword = function (char: string): string | null {
  try {
    const lastDashIndex = this.lastIndexOf(char)
    return this.substring(lastDashIndex + 1).trim()
  } catch (error) {
    return null
  }
}

String.prototype.textBeforeKeyword = function (char: string): string | null {
  const index: number = this.indexOf(char)

  if (index !== -1) {
    const result: string = this.substring(0, index).trim()
    return result
  } else {
    return String(this)
  }
}

String.prototype.textBeforeLastKeyword = function (char: string): string | null {
  const lastIndex: number = this.lastIndexOf(char)

  if (lastIndex !== -1) {
    const result: string = this.substring(0, lastIndex).trim()
    return result
  } else {
    return String(this)
  }
}

export function getIpAddress(events: RequestEvent): string {
  return events.cookies.get(users_ip_address) ?? ''
}

export function isStringValidJSONObject<T>(str: string): boolean {
  try {
    JSON.parse(str) as T
    return true
  } catch (error) {
    return false
  }
}

export function getRandomItem<T>(list: T[]): T | undefined {
  if (list.length === 0) return undefined
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

export function shuffleList<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  let currentIndex = shuffledArray.length

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    ;[shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]]
  }

  return shuffledArray
}

export function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
