export function searchLastFM(name: string) {
  return `https://www.last.fm/search?q=${name.trim().replace(' ', '+').toLowerCase()}`
}

export function searchLastFMWiki(url: string) {
  return `https://www.last.fm${url}/+wiki`
}

export function lastFMMainPage(url: string) {
  return `https://www.last.fm${url}`
}
