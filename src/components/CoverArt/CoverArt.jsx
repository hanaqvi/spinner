import styles from './CoverArt.module.css';

export default function CoverArt({ releaseId }) {

    return (
        <img src={`https://coverartarchive.org/release/${releaseId}/front`} loading="lazy" className={styles.coverImage} />
    )

}