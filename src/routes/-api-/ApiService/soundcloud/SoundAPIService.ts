import axios from "axios"
import { searchSearchUserURL, searchUserURL, soundCloudBaseURL } from "../../utils/Utils"
import { parse } from "node-html-parser"
import { substringAfter, substringBefore } from "../../utils/extension/String"
import type { SearchUsersCollection, SearchUsersData } from "./model/SearchUsersData"
import type { SocialProfileUserData } from "./model/SocialProfileUserData"

export class SoundAPIService {
    static instance = new SoundAPIService()

    async socialInfo(name: String): Promise<[SocialProfileUserData, number]> {
        const clientID = await this.getClientID()
        const searchClient = await this.searchClient(name, clientID)

        try {
            const response = await axios.get(`${searchUserURL}/${searchClient?.urn}/web-profiles`, { params: { client_id: clientID } })
            const data = await response.data as SocialProfileUserData
            return [data, searchClient?.followers_count ?? 0]
        } catch (e) {
            return [[], 0]
        }
    }

    private async searchClient(name: String, clientID: String): Promise<SearchUsersCollection | undefined> {
        try {
            const response = await axios.get(searchSearchUserURL, { params: { q: name, client_id: clientID, limit: 20, offset: 0 } })
            const data = await response.data as SearchUsersData

            let user: SearchUsersCollection | undefined = undefined

            data.collection?.forEach(a => {
                if (a.username?.toLowerCase() == name.toLowerCase() || a.full_name?.toLowerCase() == name.toLocaleLowerCase()) {
                    if (user == undefined) user = a
                }
            })

            return user
        } catch (e) {
            return undefined
        }
    }

    private async getClientID(): Promise<String> {
        try {
            const response = await axios.get(soundCloudBaseURL)
            const data = await response.data

            const root = parse(data)
            const url: String[] = []

            root.querySelectorAll("script")?.forEach(html => {
                const src = html.getAttribute("src")
                if (src != undefined) {
                    if (src.includes("/assets/")) url.push(html.getAttribute("src")!)
                }
            })

            let clientID: String = ""

            await Promise.all(url.map(async u => {
                try {
                    const responseURL = await axios.get(u.toString())
                    const data = await responseURL.data

                    if (data.toString().includes(`({client_id:"`) && clientID == "") {
                        const after = substringAfter(data.toString(), `({client_id:"`)
                        const id = substringBefore(after, `",`)
                        clientID = id.trim() ?? ""
                    }

                    if (data.toString().includes(`("client_id=`) && clientID == "") {
                        const after = substringAfter(data.toString(), `("client_id=`)
                        const id = substringBefore(after, `")`)
                        clientID = id.trim() ?? ""
                    }
                } catch (error) {
                    console.log(error)
                }
            }))

            return clientID
        } catch (error) {
            console.log(error)
            return ""
        }
    }
}