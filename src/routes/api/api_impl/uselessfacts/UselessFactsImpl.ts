import axios from 'axios'
import { api_useless_facts } from '../../utils/utils'
import type { UselessFactsResponse } from './domain/UselessFactsResponse'

export class UselessFactsImpl {
  async getARandomFacts(): Promise<string> {
    const r = await axios.get(api_useless_facts)
    const response = (await r.data) as UselessFactsResponse
    return response.text
  }
}
