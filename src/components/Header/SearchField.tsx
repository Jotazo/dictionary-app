import React, { useState } from 'react'

import { useWordStore } from '../../store/WordStore'

import SearchIcon from './../icons/SearchIcon'

import './SearchField.css'

const EMPTY_MESSAGE = 'Whoops, can’t be empty…'
const INPUT_PLACEHOLDER = 'Search for any word...'

const SearchField = () => {
  const [word, setWord] = useState('')
  const [error, setError] = useState(false)
  const fetchWord = useWordStore((state) => state.fetchWord)

  const handleWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setWord(e.target.value)
  }

  const handleSearch = () => {
    if (word.trim() === '') return setError(true)
    fetchWord(word)
  }

  return (
    <div className="search-field-container">
      <input
        type="text"
        value={word}
        onChange={handleWord}
        placeholder={INPUT_PLACEHOLDER}
        className={`search-field-input h-12 md:h-16 ${
          error && 'border border-custRed focus:border-custRed'
        }`}
      />
      <div className="search-field-icon-wrapper top-[16px] md:top-[23px]">
        <SearchIcon className="cursor-pointer" onClick={handleSearch} />
      </div>
      {error && (
        <p className="mt-2 heading-s text-left text-custRed">{EMPTY_MESSAGE}</p>
      )}
    </div>
  )
}

export default SearchField
