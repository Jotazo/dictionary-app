import { useWordStore } from '../store/WordStore'

import Loader from '../components/Loader'
import NoDefFound from '../components/NoDefFound'
import Word from '../components/Word/Word'
import CustomPagination from '../components/CustomPagination'

const WordPage = () => {
  const firstFetch = useWordStore((state) => state.firstFetch)
  const loading = useWordStore((state) => state.loading)
  const wordFounded = useWordStore((state) => state.wordFounded)
  const error = useWordStore((state) => state.error)
  const currentPage = useWordStore((state) => state.currentPage)

  if (!firstFetch) return null

  if (loading) return <Loader />

  if (error) return <NoDefFound error={error} />

  return (
    <main className="flex flex-col gap-6">
      <CustomPagination />
      <Word word={wordFounded[currentPage - 1]} />
    </main>
  )
}

export default WordPage
