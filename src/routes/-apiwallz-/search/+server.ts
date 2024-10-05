import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../-api-/utils/Utils';
import { WallzMySqlService } from '../WallzApiService/MySQLService/WallzMySqlService';
import { WallzBingService } from '../WallzApiService/WallzBingService/WallzBingService';

export async function GET({ request, url }) {
    if (!verifyHeader(request)) return json({})
    const q = url.searchParams.get("q") ?? "";
    const list = await WallzBingService.instance.getSearch(q)
    return json([...list])
}

