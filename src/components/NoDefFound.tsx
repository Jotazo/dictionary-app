import { WordObjectError } from '../interfaces/Word'

const NoDefFound = ({ error }: { error: WordObjectError }) => {
  return (
    <section className="flex flex-col items-center gap-6 mt-24">
      <span className="text-7xl">😕</span>
      <h3 className="font-bold md:text-xl">{error.title}</h3>
      <p className="text-center body-m text-primaryGrey">
        {error.message} {error.resolution}
      </p>
    </section>
  )
}

export default NoDefFound
