export interface ImgBBData {
    data?: Data
    success?: boolean
    status?: number
}

interface Data {
    id?: string
    title?: string
    url_viewer?: string
    url?: string
    display_url?: string
    width?: number
    height?: number
    size?: number
    time?: number
    expiration?: number
    image?: Image
    thumb?: Thumb
    medium?: Medium
    delete_url?: string
}

interface Image {
    filename?: string
    name?: string
    mime?: string
    extension?: string
    url?: string
}

interface Thumb {
    filename?: string
    name?: string
    mime?: string
    extension?: string
    url?: string
}

interface Medium {
    filename?: string
    name?: string
    mime?: string
    extension?: string
    url?: string
}
