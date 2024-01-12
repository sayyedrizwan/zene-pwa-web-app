export class FaqData {
  name: string;
  artists: string;
  songId: string;
  thumbnail: string;
  type: string;

  constructor(name: string, artists: string, songId: string, thumbnail: string, type: string) {
    this.name = name;
    this.artists = artists;
    this.songId = songId;
    this.thumbnail = thumbnail;
    this.type = type;
  }
}
