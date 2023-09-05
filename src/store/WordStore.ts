import { create } from 'zustand'
import { type PaginationProps } from 'antd'

import { WordObject, WordObjectError } from '../interfaces/Word'

import { getWord } from '../services/dictApi'

interface WordState {
  firstFetch: boolean
  currentPage: number
  wordFounded: WordObject[]
  loading: boolean
  error: WordObjectError | null
  fetchWord: (word: string) => Promise<void>
  handleCurrentPage: PaginationProps['onChange']
}

export const useWordStore = create<WordState>((set, get) => ({
  firstFetch: false,
  currentPage: 1,
  wordFounded: [],
  loading: false,
  error: null,
  fetchWord: async (word: string) => {
    const isFirstFetch = !get().firstFetch
    isFirstFetch && set({ firstFetch: true })
    set({ loading: true })
    const { data, error } = await getWord(word)
    set({ loading: false, wordFounded: data ?? [], error, currentPage: 1 })
  },
  handleCurrentPage: (page) => {
    set({ currentPage: page })
  }
}))
