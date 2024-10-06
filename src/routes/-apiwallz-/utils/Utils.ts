import mysql from "mysql2/promise";

export const mysqlpoolWallz: any = mysql.createPool({
    host: "x0csa.h.filess.io",
    user: "zenewallpapermysql_comeoutdog",
    database: "zenewallpapermysql_comeoutdog",
    password: "af1a424fc6353d4c6232f637b648be0a466fb520",
    port: 3307,
    waitForConnections: true,
    connectionLimit: 5,
    maxIdle: 5,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });


  export const PINTEREST_GET_API = "https://pinterest.com/resource/BaseSearchResource/get/"
  export const BING_SEARCH_API = "https://www.bing.com/AS/Suggestions"
  export const WALLPAPERFLARE_API = "https://www.wallpaperflare.com/search"
  export const WALLPAPERCAVE_API = "https://wallpapercave.com/search"
  export const WALLPAPERCAVE_MAIN_API = "https://wallpapercave.com"
  export const WALLPAPERCOM_SEARCH_API = "https://wallpapers.com/search/"
  export const WALLPAPERCOM_MAIN_API = "https://wallpapers.com"
  
  