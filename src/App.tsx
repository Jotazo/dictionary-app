import { useThemeStore } from './store/ThemeStore'

import Header from './components/Header/Header'
import WordPage from './pages/WordPage'

const App = () => {
  const { font } = useThemeStore((state) => state.fontSelected)
  return (
    <div
      className={`min-h-screen p-6 md:px-10 dark:bg-primaryDark font-${font} transition-colors duration-500 dark:text-custWhite text-primaryLightDark`}
    >
      <div className="mx-auto xl:max-w-3xl">
        <Header />
        <WordPage />
      </div>
    </div>
  )
}

export default App
