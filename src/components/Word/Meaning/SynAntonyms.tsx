import { useWordStore } from '../../../store/WordStore'

const SynAntonyms = ({
  meanings,
  title
}: {
  meanings: string[]
  title: string
}) => {
  const fetchWord = useWordStore((state) => state.fetchWord)
  return (
    <section className="flex items-center gap-x-8 flex-wrap">
      <h3 className="heading-s text-primaryGrey">{title}</h3>
      {meanings.map((synonym, index) => (
        <span
          onClick={() => fetchWord(synonym)}
          key={index}
          className="text-custPurple font-bold md:text-xl hover:underline cursor-pointer"
        >
          {synonym}
        </span>
      ))}
    </section>
  )
}

export default SynAntonyms
