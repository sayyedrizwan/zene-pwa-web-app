export function substringBeforeLast(text: String, char: string): string {
    const lastIndex = text.lastIndexOf(char)
    if (lastIndex === -1) return text.toString()
    return text.slice(0, lastIndex)
}

