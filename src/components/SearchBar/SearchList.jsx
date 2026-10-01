import React from "react"

export default function SearchList({ searchResults }) {
    return (
        <>
            {searchResults && (
                <ul>
                    {searchResults?.releases?.map((release) => (
                        <li key={release.id}>{release["artist-credit"]?.[0]?.name || "Unknown artist"} - {release.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}