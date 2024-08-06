import axios from "axios";
import { instagramGraphQuery, instagramWebProfile } from "../../utils/Utils"
import type { InstagramPostsData, InstaUser } from "./model/InstagramPostsData";
import { FEEDTYPE, ZenePostsData } from "../model/ZenePostsData";

export class InstagramService {
    static instance = new InstagramService()

    appID = "1217981644879628"
    docID = "7950326061742207"

    async userPosts(username: String): Promise<ZenePostsData[]> {
        try {
            const response = await axios.get(instagramWebProfile, { params: { username: username }, headers: { 'x-ig-app-id': this.appID } })
          
            const res = await response.data as InstagramPostsData
            
            const list: ZenePostsData[] = []

            const user = res.data?.user

            
            user?.edge_owner_to_timeline_media?.edges?.forEach(i => {
                const thumbnail = i.node?.display_url ?? null
                const mediaList = i.node?.edge_sidecar_to_children?.edges?.map((user) => (user.node?.is_video ? user.node.video_url ?? null : user.node?.media_preview ?? null))
                const media = i.node?.is_video ? [i.node.video_url ?? null] : i.node?.edge_sidecar_to_children != undefined ? mediaList ?? [] : [thumbnail]
                const timestamp = i.node?.taken_at_timestamp
                const caption = i.node?.edge_media_to_caption?.edges?.map((c) => (c.node?.text)).join(" ")

                list.push(new ZenePostsData(`https://www.instagram.com/p/${i.node?.shortcode}/`, thumbnail, media, timestamp ?? 0, user.profile_pic_url_hd ?? "", user.username ?? "", user.full_name ?? "", caption ?? "", FEEDTYPE.INSTAGRAM))
            })

            const second = await this.userPostsSecond(user, user?.edge_owner_to_timeline_media?.page_info?.end_cursor ?? "")

            return [...list, ...second]
        } catch (error) {
            return []
        }
    }


    async userPostsSecond(user: InstaUser | undefined, cursor: String): Promise<ZenePostsData[]> {
        try {
            const response = await axios.get(instagramGraphQuery, { params: { doc_id: this.docID, variables : JSON.stringify({"id": user?.id ,"after": cursor,"first": 12 }) }, headers: { 'x-ig-app-id': '1217981644879628' } })
            const res = await response.data as InstagramPostsData

            const list: ZenePostsData[] = []

            res.data?.user?.edge_owner_to_timeline_media?.edges?.forEach(i => {
                const thumbnail = i.node?.display_url ?? null
                const mediaList = i.node?.edge_sidecar_to_children?.edges?.map((user) => (user.node?.is_video ? user.node.video_url ?? null : user.node?.media_preview ?? null))
                const media = i.node?.is_video ? [i.node.video_url ?? null] : i.node?.edge_sidecar_to_children != undefined ? mediaList ?? [] : [thumbnail]
                const timestamp = i.node?.taken_at_timestamp
                const caption = i.node?.edge_media_to_caption?.edges?.map((c) => (c.node?.text)).join(" ")

                list.push(new ZenePostsData(`https://www.instagram.com/p/${i.node?.shortcode}/`, thumbnail, media, timestamp ?? 0, user?.profile_pic_url_hd ?? "", user?.username ?? "", user?.full_name ?? "", caption ?? "", FEEDTYPE.INSTAGRAM))
            })

            return list
        } catch (error) {
            return []
        }
    }
}