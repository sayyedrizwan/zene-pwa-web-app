import { json, type RequestEvent } from '@sveltejs/kit'
import { atob, btoa } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { DURLResponse } from '../../../domain/local/entities/DURLResponse'

import http from 'http'
import fs from 'fs'

export const GET = (async (req: RequestEvent) => {
 
})