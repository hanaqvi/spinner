import { getCoverArt } from "../../api";
import { useEffect } from "react";
import styles from './SearchList.module.css'

export default function SearchList({ searchResults }) {

    return (
        <>
            {searchResults && (
                <ul>
                    {searchResults?.releases?.map((release) => (
                        <li key={release.id}>{release["artist-credit"]?.[0]?.name || "Unknown artist"} - {release.title} <img src={`https://coverartarchive.org/release/${release.id}/front`} loading="lazy" className={styles.coverImage} /></li>
                    ))}
                </ul>
            )}
        </>
    )
}