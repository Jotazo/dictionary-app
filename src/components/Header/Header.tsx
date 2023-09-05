import BookIcon from './../icons/BookIcon'

import ThemeToggler from './ThemeToggler'
import FontSelector from './FontSelector'
import SearchField from './SearchField'

const Header = () => {
  return (
    <header className="flex flex-col gap-6 mb-8">
      <section className="flex">
        <BookIcon />
        <div className="ml-auto flex gap-4 items-center ">
          <FontSelector />
          <div className="border-[1px] h-[32px] border-secondaryGrey"></div>
          <ThemeToggler />
        </div>
      </section>
      <SearchField />
    </header>
  )
}

export default Header
