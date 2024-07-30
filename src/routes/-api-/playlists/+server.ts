import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../ApiService/model/MusicData.js'
import { filterArtistsName } from '../utils/extension/String.js'
import { MongoDBLocalService } from '../ApiService/dbmongo/MongoDBLocalService.js'

export async function GET({ url, request }) {
    if (!verifyHeader(request)) return json({})
    const id = url.searchParams.get('id') ?? ""
    const email = url.searchParams.get('email') ?? ""
    if (id == "") return json([])
    if (!email.includes("@") && email.length < 3) return json({})

    const playlists = await YoutubeMusicService.instance.playlistsData(id)
    let songs: MusicData[] = []

    await Promise.all((playlists[1] ?? []).map(async e => {
        if (e.thumbnail.includes("h3.googleusercontent.com")) {
            songs.push(e)
            return
        }

        const song = await YoutubeMusicService.instance.searchSongs(`${filterArtistsName(e.artists)} - ${e.name}`)

        if (song[0] == undefined) {
            songs.push(e)
            return
        }
        if (hasCommonParts(song[0].name.toString(), e.name.toString())) songs.push(song[0])
        else{
            if(e.thumbnail == "") songs.push(song[0])
            else songs.push(e)
        }
    }))

    const isPresent = await MongoDBLocalService.instance.isPlaylistPresent(email, id)
    return json({ info: playlists[0], songs: songs, isAdded: isPresent })
}

function normalizeAndClean(name: string): string {
    let normalized = name.toLowerCase()
    normalized = normalized.replace(/\(official.*?video\)/gi, '')
    normalized = normalized.replace(/\(slowed.*?reverb\)/gi, '')
    normalized = normalized.replace(/\(.*?video\)/gi, '')
    normalized = normalized.replace(/\|.*?\|/g, '')
    normalized = normalized.replace(/[^\w\s]/gi, ' ').replace(/\s+/g, ' ').trim()

    return normalized
}

function hasCommonParts(songName: string, playlistName: string): boolean {
    const cleanedSongName = normalizeAndClean(songName)
    const cleanedPlaylistName = normalizeAndClean(playlistName)

    const songWords = cleanedSongName.split(' ')
    const playlistWords = cleanedPlaylistName.split(' ')

    let uncommonCount = 0

    for (let word of songWords) {
        if (!playlistWords.includes(word)) {
            uncommonCount++
        }
    }

    if (uncommonCount > 3) {
        return false
    }

    uncommonCount = 0

    for (let word of playlistWords) {
        if (!songWords.includes(word)) {
            uncommonCount++
        }
    }

    return uncommonCount <= 3
}