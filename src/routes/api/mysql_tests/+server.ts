import { json, type RequestEvent } from '@sveltejs/kit'
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'j3v.h.filess.io',
  user: 'zenemusic_tapechest',
  database: 'zenemusic_tapechest',
  password: 'a33f2d3fbf728e74cc42d3c82e64cacebf358422',
  port: 3307,
  waitForConnections: true,
  connectionLimit: 4,
  maxIdle: 4,
  idleTimeout: 10000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
})

export const GET = async (req: RequestEvent) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM `users`')
    return json(rows)
  } catch (err) {
    return json({"info": err})
  }
}