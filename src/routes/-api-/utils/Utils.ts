import mysql from 'mysql2/promise';

export const mysqlpool = mysql.createPool({
    host: 'j3v.h.filess.io',
    user: 'zenemusic_tapechest',
    database: 'zenemusic_tapechest',
    password: 'a33f2d3fbf728e74cc42d3c82e64cacebf358422',
    waitForConnections: true,
    connectionLimit: 3,
    maxIdle: 3,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
})