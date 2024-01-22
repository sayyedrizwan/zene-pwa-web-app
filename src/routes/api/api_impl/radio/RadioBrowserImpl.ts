import dns from 'dns'
import util from 'util'
import { radio_browser_country, radio_browser_name, radio_browser_url } from '../../utils/utils'
import axios from 'axios'
import type { RadioListResponse } from './domain/RadioListResponse'

export class RadioBrowserImpl {

    private async getLiveURL(): Promise<string> {
        const resolveSrv = util.promisify(dns.resolveSrv)
        const host = resolveSrv(radio_browser_url).then((hosts: any[]) => {
            hosts.sort()
            return hosts.map((host) => 'https://' + host.name)
        })

        const url = host.then((hosts: string | any[]) => {
            var item = hosts[Math.floor(Math.random() * hosts.length)]
            return item
        })

        return url
    }


    async countryRadios(countryName: string): Promise<RadioListResponse> {
        const radioBaseURL = await this.getLiveURL()
        const responseRadio = await axios.get(`${radioBaseURL}${radio_browser_country}${String(countryName).toLowerCase()}`, { timeout: 120000 })

        return (await responseRadio.data) as RadioListResponse
    }

    async radioSearch(q: string) {
        const radioBaseURL = await this.getLiveURL()
        const responseRadio = await axios.get(`${radioBaseURL}${radio_browser_name}${q.replaceAll(" ", "+")}`, { timeout: 120000 })


        return (await responseRadio.data) as RadioListResponse
    }
}