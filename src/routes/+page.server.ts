import { env } from '$env/dynamic/private'
import { btoa } from 'buffer'
import { last_sync_ts_cookie } from './api/utils/utils.js';

export const load = async ({ fetch , cookies}) => {
  const response = await fetch(env.AUTH_TOKEN_ZENES, { method: 'POST' });
  const data = await response.json();
	cookies.set(last_sync_ts_cookie, Date.now().toString(), { path: '/', httpOnly: false });

  return { data: btoa(data.key) }
}