export class WallpaperData {
  id?: String;
  name?: String;
  thumbnail?: String;
  desc?: String;

  constructor(id?: String, name?: String, thumbnail?: String, desc?: String) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.desc = desc
  }
}
