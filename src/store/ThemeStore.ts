import { create } from 'zustand'
import { FontSelected, type Font, type Theme } from '../types'
import { THEMES } from '../enums'
import { SELECTABLE_FONTS } from '../constants'

interface ThemeState {
  theme: Theme
  fontSelected: FontSelected
  toggleTheme: () => void
  handleFont: (fontSelected: Font) => void
}

export const useThemeStore = create<ThemeState>((set, get) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  prefersDark && document.querySelector('html')?.classList.add(THEMES.DARK)
  return {
    theme: prefersDark ? THEMES.DARK : THEMES.LIGHT,
    fontSelected: SELECTABLE_FONTS[0],
    toggleTheme: () => {
      const prevTheme = get().theme
      if (prevTheme === THEMES.DARK) {
        document.querySelector('html')?.classList.remove(THEMES.DARK)
      } else {
        document.querySelector('html')?.classList.add(THEMES.DARK)
      }
      set({ theme: prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT })
    },
    handleFont: (fontSelected: Font) => {
      const selectedFont = SELECTABLE_FONTS.find(
        ({ font }) => font === fontSelected
      )
      set({ fontSelected: selectedFont })
    }
  }
})
