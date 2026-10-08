import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from "use-debounce";

import './SearchBar.css';
import { searchMusic } from '../../api';

// need to change this function entirely to read database search caches
// only make database request upon actually submitting the search, but autocomplete cached
// options can be used to quickly make a request

export default function SearchBar({ placeholder = 'Search artists, albums, songs' }) {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([])
  const [debouncedText] = useDebounce(searchText, 500);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Press "/" anywhere (outside a text field) to focus the search bar
  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      const typing = tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable;
      if (e.key === '/' && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

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
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchText.trim())}`);
      setSearchText('');
      inputRef.current?.blur();
    }
  };

  return (
    <>
      <form className="search-bar" role="search" onSubmit={handleSubmit}>
        <svg
          className="search-icon"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="7" cy="7" r="4.75" />
          <path d="M10.5 10.5L14 14" />
        </svg>

        <input
          ref={inputRef}
          type="search"
          className="search-input"
          placeholder={placeholder}
          aria-label="Search"
          autoComplete="off"
          value={searchText}
          onChange={handleChange}
        />

        {searchText ? (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" />
            </svg>
          </button>
        ) : (
          <kbd className="search-hint" aria-hidden="true">/</kbd>
        )}
      </form>
    </>
  );
}
