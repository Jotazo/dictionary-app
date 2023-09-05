import Footer from './Footer'
import Header from './Header'
import Meaning from './Meaning/Meaning'
import Divider from './Divider'

import { WordObject } from '../../interfaces/Word'

const Word = ({ word }: { word: WordObject }) => {
  return (
    <main className="flex flex-col gap-10">
      <Header word={word} />
      {word.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
      <Divider />
      <Footer sourceUrl={word.sourceUrls[0]} />
    </main>
  )
}

export default Word
