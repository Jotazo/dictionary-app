import { DictApiResponse } from '../interfaces/Word'

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const getWord = async (word: string): Promise<DictApiResponse> => {
  const response = await fetch(`${API_URL}${word}`)
  const data = await response.json()

  if (!response.ok) return { error: data, data: null }
  return { error: null, data }
}
