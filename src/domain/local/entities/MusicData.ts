export class ExtraDataMusicData {
  resultOne: MusicData[] = []
  resultTwo: MusicData[] = []

  constructor(resultOne: MusicData[], resultTwo: MusicData[]) {
    this.resultOne = resultOne
    this.resultTwo = resultTwo
  }
}

export class MusicDataList {
  results: MusicData[] = []

  constructor(results: MusicData[]) {
    this.results = results
  }
}


export class SearchMusicData {
  radio: MusicData[] = []
  artists: MusicData[] = []
  album: MusicData[] = []
  songs: MusicData[] = []

  constructor(radio: MusicData[], artists: MusicData[], album: MusicData[], songs: MusicData[]) {
    this.radio = radio
    this.album = album
    this.artists = artists
    this.songs = songs
  }
}

export class MusicData {
  name: string | null
  artists: string | null
  songId: string | null
  thumbnail: string | null
  type: MusicType

  constructor(name: string | null, artists: string | null, songId: string | null, thumbnail: string, type: MusicType) {
    this.name = name
    this.artists = artists
    this.songId = songId
    this.thumbnail = thumbnail
    this.type = type
  }
}

export enum MusicType {
  MUSIC,
  RADIO,
  ARTISTS,
  ALBUM
}
