import { searchMusic, searchArtistById } from '../api'

export default function CallButton({ onDataFetched }) {

    const handleClick = async () => {

        const results = await searchMusic("The Dark Side Of The Moon", "release");
        //console.log(results.releases);

        console.log(results.releases[0]);
        //const artist = await searchArtistById(results.releases[0]["artist-credit-id"]);
        //console.log(artist);

        // const jsonObject = JSON.parse(results.releases[0]);
        // console.log(jsonObject);

        //console.log(searchArtistById(results.releases[0].artist-credit-id));

        onDataFetched(results.releases);

    }

    return (
        <button onClick={handleClick}>Call</button>
    )

}