import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchList from '../../components/SearchBar/SearchList'
import { searchMusic } from '../../api';

export default function SearchResults() {
    // 1. Initialize the hook
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    // 2. Use .get() to pull the specific variable you want from the URL
    const query = searchParams.get('q');

    useEffect(() => {
        // Now you can use 'query' to fetch from your database
        const fetchData = async () => {
            try {
                const data = await searchMusic(query, "release");
                setResults(data);
            } catch (e) {
                console.error(e);
            }
        };

        if (query) {

            console.log("Fetching results for:", query);
            fetchData();

        }
    }, [query]);

    return (
        <div>
            {/* 3. Display the query on screen */}
            <h1>Search Results for: {query}</h1>
            <SearchList searchResults={results} />
        </div>
    );
}