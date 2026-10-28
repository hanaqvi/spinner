import styles from './ReleaseInfo.module.css'
import { searchArtistById } from "../../api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoverArt from '../../components/CoverArt/CoverArt';

function formatLength(ms) {
    if (!ms) return "";
    const totalSeconds = Math.round(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
}

export default function ReleaseInfo() {
    const { mbid } = useParams();
    const [release, setRelease] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await searchArtistById(mbid);
                setRelease(data);
            } catch (e) {
                console.error(e);
                setError(e);
            }
        };

        fetchData();
    }, [mbid]);

    if (error) return <p>Something went wrong loading this release.</p>;
    if (!release) return <p>Loading...</p>;

    const artist = release["artist-credit"]?.[0]?.name || "Unknown artist";
    const trackList = release?.media?.[0]?.tracks ?? [];

    return (
        <div className={styles.contentArea}>
            <div className={styles.header}>
                <span className={styles.coverImage}>
                    <CoverArt
                        releaseId={release.id}
                        alt={`${release.title} by ${artist}`}
                        size={300}
                    />
                </span>
                <div className={styles.details}>
                    <h1 className={styles.title}>{release.title}</h1>
                    <p className={styles.artist}>{artist}</p>
                </div>
            </div>
            <section className={styles.tracklist}>
                {trackList.length === 0 ? (
                    <p>Could not load tracks.</p>
                ) : (
                    <ol className={styles.tracks}>
                        {trackList.map((track) => (
                            <li key={track.id ?? track.position} className={styles.track}>
                                <span className={styles.trackNumber}>
                                    {track.number ?? track.position}
                                </span>
                                <span className={styles.trackTitle}>{track.title}</span>
                                <span className={styles.trackLength}>
                                    {formatLength(track.length)}
                                </span>
                            </li>
                        ))}
                    </ol>
                )}
            </section>
        </div>
    );
}