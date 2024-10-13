import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";

interface DataStoreTemps {
  myList: WallpaperData[];
  timestamp: number | null;
}

const latestWallpapersDataStore: DataStoreTemps = {
  myList: [],
  timestamp: null,
};


const aiWallpapersDataStore: DataStoreTemps = {
  myList: [],
  timestamp: null,
};

export const saveAIWallaperListWithTimestamp = (list: WallpaperData[]): void => {
  const timestamp = Date.now();
  aiWallpapersDataStore.myList = list;
  aiWallpapersDataStore.timestamp = timestamp;
};


export function getAIWallpaperSaved(): WallpaperData[] {
    const nineHoursInMillis = 9 * 60 * 60 * 1000;
    if (aiWallpapersDataStore.myList && aiWallpapersDataStore.timestamp) { 
      const currentTime = Date.now();
      if (currentTime - aiWallpapersDataStore.timestamp > nineHoursInMillis) return [];
      return aiWallpapersDataStore.myList;
    }
    return [];
  }
  

export const saveLatestWallaperListWithTimestamp = (list: WallpaperData[]): void => {
  const timestamp = Date.now();
  latestWallpapersDataStore.myList = list;
  latestWallpapersDataStore.timestamp = timestamp;
};

export function getLatestWallpaperSaved(): WallpaperData[] {
  const fourHoursInMillis = 4 * 60 * 60 * 1000;
  if (latestWallpapersDataStore.myList && latestWallpapersDataStore.timestamp) { 
    const currentTime = Date.now();
    if (currentTime - latestWallpapersDataStore.timestamp > fourHoursInMillis) return [];
    return latestWallpapersDataStore.myList;
  }
  return [];
}
