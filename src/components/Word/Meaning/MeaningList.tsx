import { Meaning } from '../../../interfaces/Word'
import MeaningItem from './MeaningItem'

const MEANING_TEXT = 'Meaning'

const MeaningList = ({ meaning }: { meaning: Meaning }) => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="heading-s text-primaryGrey">{MEANING_TEXT}</h3>
      <ul className="flex flex-col gap-4">
        {meaning.definitions.map((definition, index) => (
          <MeaningItem key={index} definition={definition} />
        ))}
      </ul>
    </section>
  )
}

export default MeaningList
