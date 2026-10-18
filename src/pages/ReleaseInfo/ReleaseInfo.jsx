import styles from './ReleaseInfo.module.css'
import { searchArtistById } from "../../api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReleaseInfo() {
    const { mbid } = useParams();
    const [release, setRelease] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load() {
            setLoading(true);
            setError(null);
            try {
                const res = await searchArtistById(mbid);
                if (!res.ok) throw new Error(`MusicBrainz returned ${res.status}`);
                setRelease(await res.json());
                console.log(release);
            } catch (err) {
                if (err.name !== "AbortError") setError(err);
            }
        }

        load();
    }, [mbid]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>asd;lfkjsad;f</h1>
            <h1>{release.title}</h1>
            <p>{release["artist-credit"]?.map(a => a.name).join(", ")}</p>
            {/* release.date, release.media[].tracks, etc. */}
        </div>
    );
}