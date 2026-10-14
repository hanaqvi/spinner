import styles from './ReleaseCard.module.css';
import CoverArt from "../CoverArt/CoverArt";

export default function ReleaseCard({ release, artist }) {
    return (
        <li className={styles.albumCard}>
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