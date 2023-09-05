import { Definition } from '../../../interfaces/Word'
import OvalIcon from '../../icons/OvalIcon'

const MeaningItem = ({ definition }: { definition: Definition }) => {
  return (
    <li className="ml-8 flex flex-col gap-2">
      <span className="flex items-center gap-6">
        <OvalIcon />
        <span className="body-m">{definition.definition}</span>
      </span>
      {definition.example && (
        <span className="body-m text-primaryGrey ml-8">
          "{definition.example}"
        </span>
      )}
    </li>
  )
}

export default MeaningItem
