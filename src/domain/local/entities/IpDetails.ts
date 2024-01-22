export class IpDetails {
  country?: string = ''
  city?: string = ''

  constructor(country: string, city: string) {
    this.country = country
    this.city = city
  }
}
