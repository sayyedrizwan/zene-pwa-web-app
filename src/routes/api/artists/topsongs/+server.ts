import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { apiError, authKeyError } from '../../utils/utils'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { lastFMMainPage, searchLastFM } from '../Utils'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import { MusicDataList, type MusicData } from '../../../../domain/local/entities/MusicData'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = headers.get('name') ?? ''

  if (name == undefined) return json(apiError)
  if (name === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const ytImpl = new YtMusicAPIImpl()

  try {
    const searchInfo = await axios.get(searchLastFM(name))
    const pageInfo = new JSDOM(await searchInfo.data)
    const link = pageInfo.window.document.querySelectorAll('.js-link-block-cover-link.link-block-cover-link')[0]?.getAttribute('href')
    const mainpageInfo = await axios.get(lastFMMainPage(link ?? ''))
    const mainpageHomeInfo = new JSDOM(await mainpageInfo.data)

    const names: string[] = []
    mainpageHomeInfo.window.document.querySelectorAll('td.chartlist-name').forEach((page) => {
      names.push(page.querySelector('a')?.textContent ?? '')
    })

    const lists: MusicData[] = []
    await Promise.all(
      names.map(async (m) => {
        const music = await ytImpl.musicSearchSingle(`${m} - ${name}`, false)
        if (music.songId != null) lists.push(music)
      }),
    )

    return json(new MusicDataList(lists))
  } catch (error) {
    return json(apiError)
  }
}
