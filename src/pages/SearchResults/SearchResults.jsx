import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchList from '../../components/SearchList/SearchList'
import { searchMusic } from '../../api';
import ReleasePreview from '../../components/ReleasePreview/ReleasePreview';

import styles from './SearchResults.module.css';

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const [hovered, setHovered] = useState(null);

    const query = searchParams.get('q');

    useEffect(() => {
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
            setHovered(null);

        }
    }, [query]);

    return (
        <div className={styles.contentArea}>
            <h1>Search Results For: {query}</h1>
            <div className={styles.layout}>
                <SearchList searchResults={results} onHover={setHovered} />
                <ReleasePreview hovered={hovered} />
            </div>
        </div>
    );
}