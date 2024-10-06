import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../-api-/utils/Utils';
import { WallzWallpaperService } from '../WallzApiService/WallzWallpaperService/WallzWallpaperService';

export async function GET({ request, url }) {
    if (!verifyHeader(request)) return json({})
    const q = url.searchParams.get("q") ?? "";
    const list = await WallzWallpaperService.instance.wallpaperComSearch(q)
    return json(list)
}

