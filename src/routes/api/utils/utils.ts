
export const support_mail_server = "contactcreator@protonmail.com"

export const authKeyError = {
  error: `auth key is expired. please try auth or contact us '${support_mail_server}'`
}


export const apiError = {
  error: "No Data Found"
}


// API URL
export const lastfm_top_playing_songs = "https://kerve.last.fm/kerve/charts?type=track&nr=6&format=json"



// cookie
export const last_sync_ts_cookie = "last_sync_ts"



export function formatNumberString(numberString: string): string {
  const parsedNumber = Number(numberString);
  if (Number.isNaN(parsedNumber)) {
    return "1,27,149"
  }
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(parsedNumber);
}