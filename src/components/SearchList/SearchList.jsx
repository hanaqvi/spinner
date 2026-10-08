import { getCoverArt } from "../../api";
import { useEffect } from "react";
import styles from './SearchList.module.css'

export default function SearchList({ searchResults }) {

    // could remove the image to its own reusable component with sizing as i will likely be using this all over the place
    // need to put images on the right
    // move away from rym listing style
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