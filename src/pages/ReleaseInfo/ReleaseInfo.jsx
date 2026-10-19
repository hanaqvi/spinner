import styles from './ReleaseInfo.module.css'
import { searchArtistById } from "../../api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    return (
        <div>
            <h1>{release.title}</h1>
        </div>
    );
}