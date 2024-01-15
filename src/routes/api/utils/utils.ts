
export const support_mail_server = "contactcreator@protonmail.com"

export const authKeyError = {
    error: `auth key is expired. please try auth or contact us '${support_mail_server}'`
}


export const apiError = {
    error: "No Data Found"
}



export const lastfm_top_playing_songs = "https://kerve.last.fm/kerve/charts?type=track&nr=6&format=json"







export function formatNumberString(numberString: string): string {
    const currency: string = "USD"
    const parsedNumber = Number(numberString);
    if (Number.isNaN(parsedNumber)) {
      return "Invalid input"
    }
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(parsedNumber);
  }