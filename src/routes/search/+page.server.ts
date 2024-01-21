import { env } from '$env/dynamic/private'
import { btoa } from 'buffer'


export const load = async ({ fetch }) => {
  const response = await fetch(env.AUTH_TOKEN_ZENES, { method: 'POST' })
  const data = await response.json()

  return { data: btoa(data.key) }
}
