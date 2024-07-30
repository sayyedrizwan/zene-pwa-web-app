import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { PinterestAPIService } from '../ApiService/pinterest/PinterestAPIService.js'

export async function GET({ url, request }) {
    if (!verifyHeader(request)) return json([])
    const s = url.searchParams.get('s') ?? ""
    if (s == "") return json([])

    const img = await PinterestAPIService.instance.searchImgs(s)
    
    return json(img[0])
}