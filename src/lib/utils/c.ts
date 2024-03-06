export function setCookie(cname: string, cvalue: string, exdays: number = 712) {
  document.cookie = `${cname}=${cvalue}; expires=Sun, 1 Jan 2043 00:00:00 UTC; path=/`
}

export function getCookie(cname: string) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
