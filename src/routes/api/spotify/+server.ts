import { json, redirect, type RequestEvent } from '@sveltejs/kit'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'


export const GET = (async (events: RequestEvent) => {
  // if(isFromZeneOrigin(events) === false) return false

  var state = generateRandomString(16);
  // var scope = 'user-read-private user-read-email';
  // const redirectUrl = new URL('https://accounts.spotify.com/authorize');
  // redirectUrl.searchParams.set('response_type', 'code');
  // redirectUrl.searchParams.set('client_id', CLIENT_ID); // Replace with your actual client ID
  // redirectUrl.searchParams.set('scope', scope);
  // redirectUrl.searchParams.set('redirect_uri', REDIRECT_URI); // Replace with your actual redirect URI
  // redirectUrl.searchParams.set('state', state);

  // const sanitizedUrl = redirectUrl.toString().replace(/[^\w\-.:\/?&=]/g, '');

  // throw redirect(sanitizedUrl)
})


function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
