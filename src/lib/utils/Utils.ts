import { AnalyticsEvents, registerFirebaseEvents } from '$lib/firebase/registerAnalytics'
import axios from 'axios'
import type { IpJsonResponse } from '../../routes/api/radiolist/domain/IpJsonResponse'
import { setCookie } from './c'
import { ipBaseUrl } from '../../routes/api/utils/utils'
import { en_ars4sfrb, g } from './pid'

export async function llg_in(e: string): Promise<string | null> {
  let encryptedText = ''
  for (let i = 0; i < e.length; i++) {
    encryptedText += String.fromCharCode(e.charCodeAt(i) ^ kke.charCodeAt(i % kke.length))
  }
  return encryptedText
}

export async function gllg_in(e: string): Promise<string | null> {
  const v = await llg_in(e)
  const count = (v?.match(/_/g)?.length ?? 4) - (v?.replaceAll('_', '').length ?? 3)

  if (count <= 2 && count > 0) return v?.replaceAll('_', '') ?? null

  localStorage.removeItem(e)
  return null
}

export const moodsList: string[] = ['😊 Happy', '🎉 Party', '😤 Angry', '🤟 Rock', '😬 Stressed', '🎊 Pop', '🎯 Focused', '🏋️ Workout', '😴 Sleepy', '☺️ Feel Good', '🎷 Jazz', '😍 Romance', '😔 Sad']

export function onBrowser() {
  registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE)

  if (isRunOnPWA()) registerFirebaseEvents(AnalyticsEvents.OPEN_WEB_AS_APP)

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      lastSyncTimeCheck()
      document.dispatchEvent(new CustomEvent('onstartedapp', {}))
    }
  })
}

function lastSyncTimeCheck() {
  const ts = document.cookie.match('(^|;)\\s*' + 'last_sync_ts' + '\\s*=\\s*([^;]+)')?.pop() || ''
  const timeDifferenceInMinutes: number = Math.floor((Date.now() - parseInt(ts)) / (1000 * 60))
  if (timeDifferenceInMinutes > 180) window.location.reload()
}

export function isRunOnPWA(): Boolean {
  const isInStandaloneMode = () => window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone || document.referrer.includes('android-app://')
  return isInStandaloneMode()
}

export function splitArrayIntoChunks<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  return result
}

export function capitalizeFirstLetterOfEveryWords(str: string): string {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (match) => match.toUpperCase())
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const differenceInMilliseconds = now.getTime() - date.getTime()

  const seconds = Math.floor(differenceInMilliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)

  if (seconds < 60) return `${seconds} seconds ago`
  else if (minutes < 60) return `${minutes} minutes ago`
  else if (hours < 24) return `${hours} hours ago`
  else if (days < 30) return `${days} days ago`
  else if (months < 12) return `${months} months ago`
  else
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
}

let kke: string = `53`
let cT: number = 0

export function setK(v: string, c: number) {
  kke = window.atob(v)
  cT = c
}

export function gK(): string {
  const t = cT
  const k = parseInt(kke)

  const s = `${g()}_${g()}_${g()}_${g()}@@#####${t}>>#####${g()}_${g()}_${g()}_${g()}`
  const d = `${en_ars4sfrb(s, k.toString())}${'qKS-.1Z.oPWEkQ'.replace('K', '').replace('.', '').replace('P', '')}`
  return d
}

export function getFavIcon(url: String): string {
  return `https://icon.horse/icon/${url.replaceAll('https://', '')}`
}

export function deepListCompare(list1: any[], list2: any[]): boolean {
  if (list1.length !== list2.length) {
    return false
  }

  for (let i = 0; i < list1.length; i++) {
    if (typeof list1[i] === 'object' && typeof list2[i] === 'object') {
      return deepListCompare(list1[i], list2[i])
    } else {
      if (list1[i] !== list2[i]) {
        return false
      }
    }
  }

  return true
}

export async function setServerIpAddress() {
  try {
    const r = await axios.get(ipBaseUrl(''))
    const response = (await r.data) as IpJsonResponse
    setCookie('i', response.query)
  } catch (error) {
    alert(error)
    null
  }
}
