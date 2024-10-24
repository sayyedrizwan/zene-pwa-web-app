import { json } from '@sveltejs/kit'
import { heartbeatAPI, verifyHeader } from '../utils/Utils.js';
import { YoutubeAPIService } from '../ApiService/youtube/YoutubeAPIService.js';

export async function GET({ url, request }) {
    heartbeatAPI("related-video");
	if (!verifyHeader(request)) return json({})

	const i = url.searchParams.get('videoID') ?? ""
	if (i == "") return json([])

	const videoList = await YoutubeAPIService.instance.relatedVideo(i)

	return json(videoList)
}