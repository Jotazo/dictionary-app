import Divider from '../Divider'

const Header = ({ partOfSpeech }: { partOfSpeech: string }) => {
  return (
    <header className="flex items-center gap-8">
      <span className="italic font-bold text-lg md:text-2xl">
        {partOfSpeech}
      </span>
      <Divider />
    </header>
  )
}

export default Header
