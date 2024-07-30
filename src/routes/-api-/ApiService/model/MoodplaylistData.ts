import type { MusicData } from "./MusicData"

export class MoodplaylistData {
    name: String
    list: MoodplaylistDataItems[]

    constructor(name: String, list: MoodplaylistDataItems[]) {
        this.name = name
        this.list = list
    }
}

export class MoodplaylistDataItems {
    name: String
    list: MusicData[]

    constructor(name: String, list: MusicData[]) {
        this.name = name
        this.list = list
    }
}