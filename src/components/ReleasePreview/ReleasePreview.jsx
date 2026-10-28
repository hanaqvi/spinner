import CoverArt from "../CoverArt/CoverArt"
import styles from "./ReleasePreview.module.css"

export default function ReleasePreview({ hovered }) {
    if (!hovered) return null;
    const { release, artist } = hovered;

    return (
        <aside className={styles.preview}>
            <CoverArt
                key={release.id}
                releaseId={release.id}
                alt={`${release.title} by ${artist}`}
                size={500}
            />
            <h2 className={styles.title}>{release.title}</h2>
            <p className={styles.artist}>{artist}</p>
        </aside>
    );
}