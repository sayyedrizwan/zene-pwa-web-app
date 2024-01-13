import { support_mail } from "$lib/utils/UtilsPaths"

export const authKeyError = {
    error: `auth key is expired. please try auth or contact us '${support_mail}'`
}


export const apiError = {
    error: "No Data Found"
}



export const lastfm_top_playing_songs = "https://kerve.last.fm/kerve/charts?type=track&nr=6&format=json"