import { auth_token_zenes } from '$lib/utils/UtilsPaths.js';
import { btoa } from 'buffer';

export const load = async ({ params, fetch }) => {
  const response = await fetch(auth_token_zenes, { method: 'POST' });
  const data = await response.json();
  console.log(data)
  return {data: btoa(data.key)}
}