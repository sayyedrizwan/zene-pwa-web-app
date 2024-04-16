export class ArtistsInfoData {
  name?: string
  image?: string
  artistsImage?: string
  description?: string

  constructor(name: string, image: string, artistsImage: string, description: string) {
    this.name = name
    this.image = image
    this.artistsImage = artistsImage
    this.description = description
  }
}

