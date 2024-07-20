export function substringBeforeLast(text: String, char: string): string {
    const lastIndex = text.lastIndexOf(char)
    if (lastIndex === -1) return text.toString()
    return text.slice(0, lastIndex)
}

export function substringAfter(text: String, char: string): string {
    const index = text.indexOf(char);
    if (index !== -1) return text.substring(index + char.length);

    return "";
}

export function filterThumbnailURL(text: String): String {
    const indexOfW = text.indexOf("=w")
    const indexOfS = text.indexOf("=s")
    if (indexOfW === -1 && indexOfS === -1) return text
    const closestIndex = Math.min(indexOfW !== -1 ? indexOfW : Infinity, indexOfS !== -1 ? indexOfS : Infinity);
    return text.substring(0, closestIndex)
}

export function filterArtistsName(text: String): String {
    const indexOfW = text.indexOf("&")
    const indexOfS = text.indexOf(",")
    if (indexOfW === -1 && indexOfS === -1) return text
    const closestIndex = Math.min(indexOfW !== -1 ? indexOfW : Infinity, indexOfS !== -1 ? indexOfS : Infinity);
    return text.substring(0, closestIndex)
}