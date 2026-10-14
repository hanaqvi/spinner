import styles from './ReleaseCard.module.css';
import CoverArt from "../CoverArt/CoverArt";

export default function ReleaseCard({ release, artist, onHover }) {
    return (
        <li className={styles.albumCard} onMouseEnter={() => onHover({ release, artist })}>
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
}