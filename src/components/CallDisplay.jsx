export default function CallDisplay({ data }) {

    if (!data) {

        return (
            <p>no data</p>
        )
    }

    return (
        <ul>
            {data.map((release) => (
                <li key={release.id}>{release["artist-credit"][0].name} - {release.title}</li>
            ))}
        </ul>
    )
}