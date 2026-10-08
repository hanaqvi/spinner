import styles from './SearchList.module.css';
import CoverArt from "../CoverArt/CoverArt";

export default function SearchList({ searchResults }) {
    const releases = searchResults?.releases;

    if (!releases) return null;

    return (
        <ul className={styles.resultsList}>
            {releases.map((release) => {
                const artist = release["artist-credit"]?.[0]?.name || "Unknown artist";

                return (
                    <li key={release.id} className={styles.albumCard}>
                        <CoverArt
                            releaseId={release.id}
                            alt={`${release.title} by ${artist}`}
                        />
                        <div className={styles.info}>
                            <span className={styles.title}>{release.title}</span>
                            <span className={styles.artist}>{artist}</span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}