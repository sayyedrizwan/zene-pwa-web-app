export class WallpaperData {
  id?: String;
  name?: String;
  thumbnail?: String;
  desc?: String;
  isVideo?: Boolean;
  videoPath?: String;

  constructor(id?: String, name?: String, thumbnail?: String, desc?: String, isVideo?: Boolean, videoPath?: String) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.desc = desc;
    this.isVideo = isVideo;
    this.videoPath = videoPath;
  }
}
