interface Phonetic {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: {
    name: string
    url: string
  }
}

export interface Definition {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

interface License {
  name: string
  url: string
}

export interface WordObject {
  word: string
  phonetic?: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

export interface WordObjectError {
  message: string
  title: string
  resolution: string
}

export interface DictApiResponse {
  data: WordObject[] | null
  error: WordObjectError | null
}
