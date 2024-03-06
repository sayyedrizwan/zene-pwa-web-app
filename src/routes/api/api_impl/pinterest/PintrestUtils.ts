export const pintrestImageSearch = 'https://www.pinterest.com/resource/BaseSearchResource/get/'

export function searchPintrestQuery(name: string) {
  return `{"options":{"article":"","appliedProductFilters":"---","price_max":null,"price_min":null,"query":"${name.toLowerCase()}","scope":"pins","auto_correction_disabled":"","top_pin_id":"","filters":""},"context":{}}`
}
