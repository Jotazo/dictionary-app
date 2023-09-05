import { FONTS, FONTS_SELECTOR } from './enums'

export type Theme = 'light' | 'dark'

export type Font = FONTS.INCONSOLATA | FONTS.INTERBOLD | FONTS.LORA

export type FontSelector =
  | FONTS_SELECTOR.SANS_SERIF
  | FONTS_SELECTOR.SERIF
  | FONTS_SELECTOR.MONO

export interface FontSelected {
  fontSelector: FontSelector
  font: Font
}
