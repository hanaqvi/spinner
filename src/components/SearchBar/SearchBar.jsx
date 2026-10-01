import React, { useEffect, useState } from 'react';
import { useDebounce } from "use-debounce";

import './SearchBar.css';
import { searchMusic } from '../../api';

import SearchList from './SearchList';

// need to change this function entirely to read database search caches
// only make database request upon actually submitting the search, but autocomplete cached
// options can be used to quickly make a request

export default function SearchBar({ onSearch, placeholder = 'Search...' }) {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([])
  const [debouncedText] = useDebounce(searchText, 500);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMusic(debouncedText, "release");
        setResults(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    if (debouncedText) {
      fetchData();
    }
  }, [debouncedText]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleClear = () => {
    setSearchText('');
    if (onSearch) {
      onSearch('');
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (onSearch) {
  //     onSearch(query);
  //   }
  // };

  return (
    <>
      <form className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchText}
          onChange={handleChange}
        />
        {searchText && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </form>

      <SearchList searchResults={results} />
    </>
  );
}

