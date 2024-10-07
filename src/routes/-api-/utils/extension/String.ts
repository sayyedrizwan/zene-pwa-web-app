export function substringBeforeLast(text: String, char: string): string {
    const lastIndex = text.lastIndexOf(char)
    if (lastIndex === -1) return text.toString()
    return text.slice(0, lastIndex)
}

export function substringAfterLast(input: string, char: string): string {
    const lastIndex = input.lastIndexOf(char);

    if (lastIndex === -1) return input
    return input.substring(lastIndex + 1).trim();
  }

export function substringBefore(text: String, char: String): String {
    const brIndex = text.indexOf(char.toString())
    if (brIndex !== -1) {
        return text.substring(0, brIndex);
    } else {
        return text
    }
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

export function filterArtistsArrayName(arr: String[]): String {
    if (arr.length === 0) return '';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr.join(' & ');
    
    const allButLast = arr.slice(0, -1).join(', ');
    const last = arr[arr.length - 1];
    return `${allButLast} & ${last}`;
}

export function convertDateAgoToTS(timeAgo: String): number {
    const now = new Date().getTime()

    const regex = /(\d+)\s(\w+)\sago/;
    const match = timeAgo.match(regex);

    if (!match) return 0

    const value = parseInt(match[1], 10);
    const unit = match[2]

    let milliseconds = 0
    switch (unit) {
        case 'minute':
        case 'minutes':
            milliseconds = value * 60 * 1000;
            break;
        case 'hour':
        case 'hours':
            milliseconds = value * 60 * 60 * 1000;
            break;
        case 'day':
        case 'days':
            milliseconds = value * 24 * 60 * 60 * 1000;
            break;
        case 'week':
        case 'weeks':
            milliseconds = value * 7 * 24 * 60 * 60 * 1000;
            break;
        case 'month':
        case 'months':
            milliseconds = value * 30 * 24 * 60 * 60 * 1000;
            break;
        case 'year':
        case 'years':
            milliseconds = value * 365 * 24 * 60 * 60 * 1000;
            break;
        default:
            milliseconds = 0
    }
    const timestamp = now - milliseconds
    return timestamp
}

export function convertShortDateAgoToTS(timeString: string): number {
    const amount = parseInt(timeString.slice(0, -1))
    const unit = timeString.slice(-1)

    const now = new Date().getTime()
    let resultTime: number

    switch (unit) {
        case 's':
            resultTime = now - amount * 1000
            break;
        case 'm':
            resultTime = now - amount * 60 * 1000
            break;
        case 'h':
            resultTime = now - amount * 60 * 60 * 1000
            break;
        case 'd':
            resultTime = now - amount * 24 * 60 * 60 * 1000
            break;
        case 'y':
            resultTime = new Date().setFullYear(new Date().getFullYear() - amount)
            break;
        default:
            resultTime = 0
    }

    return resultTime
}