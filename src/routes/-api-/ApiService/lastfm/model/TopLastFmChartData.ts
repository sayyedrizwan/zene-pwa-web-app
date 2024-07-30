export interface TopLastFmChartData {
    results: Results
}

interface Results {
    artist: Artist[]
}

interface Artist {
    listeners: string
    name: string
    scrobbles: string
    tracks: Track[]
    weight: number
    url: string
    image: string
}

interface Track {
    artist: string
    name: string
    weight: number
    url: string
}
