export class ArtistsInfoData {
  name?: string
  image?: string
  description?: string

  constructor(name: string, image: string, description: string) {
    this.name = name
    this.image = image
    this.description = description
  }
}
