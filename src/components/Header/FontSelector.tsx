import { useState } from 'react'

import { useThemeStore } from '../../store/ThemeStore'

import { THEMES } from '../../enums'
import { SELECTABLE_FONTS } from '../../constants'

import ChevronDown from './../icons/ChevronDown'

import './FontSelector.css'

const FontSelector = () => {
  const theme = useThemeStore((state) => state.theme)
  const { fontSelector } = useThemeStore((state) => state.fontSelected)
  const handleFont = useThemeStore((state) => state.handleFont)

  const [selectorOpen, setSelectorOpen] = useState(false)

  const handleOpen = () => setSelectorOpen((prevOpen) => !prevOpen)

  return (
    <div
      onClick={handleOpen}
      className="flex items-center gap-4 cursor-pointer relative"
    >
      <span className="font-text">{fontSelector}</span>
      <ChevronDown />
      {selectorOpen && (
        <ul
          className={`font-selector-container ${
            theme === THEMES.DARK ? 'dark' : 'light'
          } font-text absolute z-10 top-7 right-0 flex flex-col gap-3`}
        >
          {SELECTABLE_FONTS.map(({ font, fontSelector }, index) => (
            <li
              className={`font-${font} hover:text-custPurple transition duration-200`}
              onClick={() => handleFont(font)}
              key={index}
            >
              {fontSelector}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FontSelector
