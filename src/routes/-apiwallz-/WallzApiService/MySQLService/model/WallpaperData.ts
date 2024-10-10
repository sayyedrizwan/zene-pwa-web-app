export class WallpaperData {
  id?: String;
  name?: String;
  thumbnail?: String;
  desc?: String;
  type: WALLPAPERTYPE
  page: number

  constructor(id?: String, name?: String, thumbnail?: String, desc?: String, page: number = 0, type: WALLPAPERTYPE = WALLPAPERTYPE.IMAGE_WALLPAPER) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.desc = desc
    this.type = type
    this.page = page
  }
}



export enum WALLPAPERTYPE {
  IMAGE_WALLPAPER = "IMAGE_WALLPAPER", SEARCH = "SEARCH", CATEGORIES = "CATEGORIES"
}