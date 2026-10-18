import styles from './ReleaseCard.module.css';
import CoverArt from "../CoverArt/CoverArt";
import { useNavigate } from 'react-router-dom';

export default function ReleaseCard({ release, artist, onHover }) {
    const navigate = useNavigate();

    return (
        <li className={styles.albumCard} onMouseEnter={() => onHover({ release, artist })} onClick={() => navigate(`/release-info/${release.id}`)}>
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