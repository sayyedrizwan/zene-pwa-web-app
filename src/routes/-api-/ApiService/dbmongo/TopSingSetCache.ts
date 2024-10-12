type TopSongsCacheItem = {
  value: String[];
  expiration: number;
};

export const topSongsCacheSet = new Map<string, TopSongsCacheItem>();

export async function getTopSongsArrayCacheSet(key: string): Promise<String[]> {
  const cachedItem = topSongsCacheSet.get(key);
  const currentTime = Date.now();

  if (cachedItem && cachedItem.expiration > currentTime) {
    return cachedItem.value;
  } else {
    return [];
  }
}

export async function setTopSongsArrayCache(key: string, list: string[]) {
    const currentTime = Date.now();
    topSongsCacheSet.set(key, { value: list, expiration: currentTime + 300000 });
}

export async function clearIfBigSet() {
  if (topSongsCacheSet.size > 100000) topSongsCacheSet.clear();
}
