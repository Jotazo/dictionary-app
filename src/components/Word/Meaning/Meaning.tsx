import Header from './Header'
import { Meaning as IMeaning } from '../../../interfaces/Word'
import MeaningList from './MeaningList'
import Footer from './Footer'

const Meaning = ({ meaning }: { meaning: IMeaning }) => {
  return (
    <section className="flex flex-col gap-10">
      <Header partOfSpeech={meaning.partOfSpeech} />
      <MeaningList meaning={meaning} />
      <Footer meaning={meaning} />
    </section>
  )
}

export default Meaning
