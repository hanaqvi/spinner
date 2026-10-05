import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from "use-debounce";

import './SearchBar.css';
import { searchMusic } from '../../api';
import SearchList from './SearchList';

// need to change this function entirely to read database search caches
// only make database request upon actually submitting the search, but autocomplete cached
// options can be used to quickly make a request

export default function SearchBar({ placeholder = 'Search...' }) {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([])
  const [debouncedText] = useDebounce(searchText, 500);

  const navigate = useNavigate();


  // this function can be repurposed to search the databse cache and return the most common searches

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await searchMusic(debouncedText, "release");
  //       setResults(data);
  //       console.log(data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   if (debouncedText) {
  //     fetchData();
  //   }
  // }, [debouncedText]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleClear = () => {
    setSearchText('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (searchText.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
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

