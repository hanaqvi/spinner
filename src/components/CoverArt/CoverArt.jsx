import { useState } from 'react';
import styles from './CoverArt.module.css';

export default function CoverArt({ releaseId, alt = "Album cover", size = 100 }) {
    const [failed, setFailed] = useState(false);

    return (
        <div
            className={styles.frame}
            style={{ width: size, height: size }}
        >
            {failed ? (
                <span className={styles.placeholder} aria-label={alt}>♪</span>
            ) : (
                <img
                    src={`https://coverartarchive.org/release/${releaseId}/front-250`}
                    alt={alt}
                    loading="lazy"
                    className={styles.coverImage}
                    onError={() => setFailed(true)}
                />
            )}
        </div>
    );
}