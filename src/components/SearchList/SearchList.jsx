import { getCoverArt } from "../../api";
import { useEffect } from "react";
import styles from './SearchList.module.css'
import CoverArt from "../CoverArt/CoverArt";

export default function SearchList({ searchResults }) {

    // could remove the image to its own reusable component with sizing as i will likely be using this all over the place
    // need to put images on the right
    // move away from rym listing style
    return (
        <>
            {searchResults && (
                <ul className={styles.resultsList}>
                    {searchResults?.releases?.map((release) => (
                        <li key={release.id} className={styles.albumCard}><CoverArt releaseId={release.id} />{release["artist-credit"]?.[0]?.name || "Unknown artist"} - {release.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}