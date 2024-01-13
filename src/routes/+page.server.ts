import { auth_token_zenes } from '$lib/utils/UtilsPaths.js';

export const load = async ({ params, fetch }) => {
  const response = await fetch(auth_token_zenes, { method: 'POST' });
  const data = await response.json();
  return data
}