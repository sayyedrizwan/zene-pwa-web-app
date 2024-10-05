import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../-api-/utils/Utils';
import { WallzMySqlService } from '../WallzApiService/MySQLService/WallzMySqlService';

export async function GET({ request }) {
    if (!verifyHeader(request)) return json({})
    const list = await WallzMySqlService.instance.getCategories()
    return json(list)
}

