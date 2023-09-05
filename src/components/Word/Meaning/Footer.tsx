import { Meaning } from '../../../interfaces/Word'
import SynAntonyms from './SynAntonyms'

const SYNONYMS_TITLE = 'Synonyms'
const ANTONYMS_TITLE = 'Antonyms'

const Footer = ({ meaning }: { meaning: Meaning }) => {
  return (
    <footer className="flex flex-col gap-4">
      {meaning.synonyms.length > 0 && (
        <SynAntonyms title={SYNONYMS_TITLE} meanings={meaning.synonyms} />
      )}
      {meaning.antonyms.length > 0 && (
        <SynAntonyms title={ANTONYMS_TITLE} meanings={meaning.antonyms} />
      )}
    </footer>
  )
}

export default Footer
