import { WordObject } from '../../interfaces/Word'

import getAudioMedia from '../../helpers/getAudioMedia'
import getPhonetic from '../../helpers/getPhonetic'

import PlayMediaIcon from '../icons/PlayMediaIcon'
import './Header.css'

const Header = ({ word }: { word: WordObject }) => {
  const audioMedia = getAudioMedia(word)
  const phonetic = getPhonetic(word)

  return (
    <header className="flex justify-between items-center">
      <section className="flex flex-col gap-2">
        <h1 className="heading-l sm">{word.word}</h1>
        <span className="heading-m text-custPurple">{phonetic}</span>
      </section>
      {audioMedia && (
        <PlayMediaIcon
          onClick={() => audioMedia.play()}
          className="play-media"
        />
      )}
    </header>
  )
}

export default Header
