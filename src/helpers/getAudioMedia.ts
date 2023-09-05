import { WordObject } from '../interfaces/Word'

const hasAudioMedia = (word: WordObject) => {
  return word.phonetics.some((phonetic) => phonetic.audio !== '')
}

const getAudioMedia = (word: WordObject) => {
  if (!hasAudioMedia(word)) return

  const phoneticWithAudio = word.phonetics.find(
    (phonetic) => phonetic.audio
  )?.audio

  return new Audio(phoneticWithAudio)
}

export default getAudioMedia
