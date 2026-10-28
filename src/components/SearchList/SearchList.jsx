import styles from './SearchList.module.css';
import ReleaseCard from "../ReleaseCard/ReleaseCard";

export default function SearchList({ searchResults, onHover }) {
    const releases = searchResults?.releases;

    if (!releases) return null;

    return (
        <ul className={styles.resultsList}>
            {releases.map((release) => {
                const artist = release["artist-credit"]?.[0]?.name || "Unknown artist";
                return (
                    <ReleaseCard key={release.id} release={release} artist={artist} onHover={onHover} />
                )
            })}
        </ul>
    );
}