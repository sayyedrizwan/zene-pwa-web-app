export const YT_KEY = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'

export function bingYtChannelSearch(s: string) {
    return `https://www.bing.com/search?q=${s.trim().toLowerCase().replace(" ", "+")}+youtube+official+channel&pq=taylor+swift+youtube+official+channel`
}

export const ytHeader = {
    'x-origin': 'https://www.youtube.com',
    'content-type': 'application/json',
    'origin': 'https://www.youtube.com',
    'cookie': 'GPS=1;',
    'authority': 'www.youtube.com',
}

const userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36,gzip(gfe)'
const clientName = 'WEB'
const clientVersion = '2.20240126.01.00'

export const yt_video_search = `https://www.youtube.com/youtubei/v1/search?key=${YT_KEY}&prettyPrint=false`

export function ytBodyWithQuery(q: string): string {
    return `{
            "context": {
                "client": {
                    "userAgent": "${userAgent}",
                    "clientName": "${clientName}",
                    "clientVersion": "${clientVersion}"
                }
            },
            "query": "${q}"
        }
        `
}

export function parseRelativeTimeString(relativeTime: string): number {
    try {
        const regex = /(\d+)\s+(\w+)\s+ago/;
        const matches = String(relativeTime).trim().match(regex)

        if (!matches || matches.length !== 3) {
            throw new Error('Invalid relative time string format')
        }

        const quantity = parseInt(matches[1]);
        const unit = matches[2];

        const currentDate = new Date();
        let timestamp = currentDate.getTime();

        switch (unit) {
            case 'second':
            case 'seconds':
                timestamp -= quantity * 1000;
                break;
            case 'minute':
            case 'minutes':
                timestamp -= quantity * 60 * 1000;
                break;
            case 'hour':
            case 'hours':
                timestamp -= quantity * 60 * 60 * 1000;
                break;
            case 'day':
            case 'days':
                timestamp -= quantity * 24 * 60 * 60 * 1000;
                break;
            case 'week':
            case 'weeks':
                timestamp -= quantity * 7 * 24 * 60 * 60 * 1000;
                break;
            case 'month':
            case 'months':
                currentDate.setMonth(currentDate.getMonth() - quantity);
                timestamp = currentDate.getTime();
                break;
            case 'year':
            case 'years':
                currentDate.setFullYear(currentDate.getFullYear() - quantity);
                timestamp = currentDate.getTime();
                break;
            default:
                throw new Error('Invalid unit');
        }

        return timestamp
    } catch (error) {
        return 0
    }
}