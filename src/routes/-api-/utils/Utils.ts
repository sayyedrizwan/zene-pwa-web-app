import mysql from 'mysql2/promise';

const isDev = true

//aiven
export const mysqlpool : any = mysql.createPool({
    host: isDev ? 'mysql-2bab654c-sayyedrizwanahme-db86.h.aivencloud.com' : 'j3v.h.filess.io',
    user: isDev ? 'avnadmin' : 'zenemusic_tapechest',
    database: isDev ? 'users' : 'zenemusic_tapechest',
    password: isDev ? 'AVNS_52AdOsyCcYA1DBd0DJL' : 'a33f2d3fbf728e74cc42d3c82e64cacebf358422',
    port: isDev ? 18874 : 3307,
    waitForConnections: true,
    connectionLimit: 3,
    maxIdle: 3,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
})