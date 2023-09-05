import { WordObject } from '../interfaces/Word'

const hasSimplePhonetic = (word: WordObject) =>
  word.phonetic && word.phonetic !== ''

const hasPhoneticInAudioMedia = (word: WordObject) =>
  word.phonetics.find((phonetic) => phonetic.text && phonetic.text !== '')

const hasPhonetic = (word: WordObject) => {
  return hasSimplePhonetic(word) || hasPhoneticInAudioMedia(word)
}

const getPhonetic = (word: WordObject) => {
  if (!hasPhonetic(word)) return 'No phonetic found'
  if (!hasPhoneticInAudioMedia(word) && hasPhonetic(word)) return word.phonetic
  return word.phonetics.find(
    (phonetic) => phonetic.text && phonetic.text !== ''
  )?.text
}

export default getPhonetic
