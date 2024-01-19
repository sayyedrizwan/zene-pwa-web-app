import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI"
import { json, type RequestEvent } from "@sveltejs/kit"
import { apiError, authKeyError, getBase64FromImageUrl, top_100_artists_billboard } from "../utils/utils"
import { JSDOM } from "jsdom"
import { MusicData, MusicType } from "../../../domain/local/entities/MusicData"

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const lists: MusicData[] = []
    const response = await fetch(top_100_artists_billboard)
    const dom = new JSDOM(await response.text())


    dom.window.document.querySelectorAll(".o-chart-results-list-row-container").forEach(element => {
      var artistsImage = element.querySelector(".lrv-a-crop-1x1")?.querySelector("img")?.getAttribute('data-lazy-src')?.replace("182", "344")
      var artistName = ""
      element.querySelectorAll("#title-of-a-story").forEach(name => {
        if (name.outerHTML.toString().includes("u-max-width-230@tablet-only")) artistName = name.innerHTML.trim().toString()
      })
      lists.push(new MusicData(artistName, artistName, "", artistsImage ?? "", MusicType.ARTISTS))
    })

    await Promise.all(lists.map(async (e, i) => {
      const imageAsBase64 = await getBase64FromImageUrl(e.thumbnail ?? "") ?? ""
      lists[i].thumbnail = imageAsBase64
    }))

    return json(lists)
  } catch (error) {
    return json(apiError)
  }
}
