import React from 'react'
import SearchIcon from '../assets/search';

export const SearchBar = () => {
  return (
    <div className='w-175 h-10 bg-amber-600 rounded-4xl pl-6 flex flex-row justify-start items-center gap-2'>
        
        <SearchIcon />
        <input placeholder='Search for Username' className='w-150 outline-none' required />
    </div>
  )
}

export default SearchBar;