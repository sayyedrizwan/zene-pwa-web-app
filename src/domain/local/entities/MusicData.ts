export class MusicData {
  name: string | null;
  artists: string | null;
  songId: string | null;
  thumbnail: string | null;
  type: string;

  constructor(name: string, artists: string, songId: string, thumbnail: string, type: string) {
    this.name = name;
    this.artists = artists;
    this.songId = songId;
    this.thumbnail = thumbnail;
    this.type = type;
  }
}
