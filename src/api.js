const ANON_KEY = "sb_publishable_O6y76KCXXM9of8xJwSrtNg_e9m1OGa5";

async function searchMusic(query, type = "artist") {

    const FUNCTION_URL = "https://hazqkvbaorrslknnmpbn.supabase.co/functions/v1/search-mb";

    const res = await fetch(
        `${FUNCTION_URL}/?query=${encodeURIComponent(query)}&type=${type}`,
        {
            headers: {
                Authorization: `Bearer ${ANON_KEY}`,
                apikey: ANON_KEY,
            },
        }
    );
    if (!res.ok) throw new Error("Search failed");
    return res.json();
}

async function searchArtistById(mbid) {

    const FUNCTION_URL = "https://hazqkvbaorrslknnmpbn.supabase.co/functions/v1/get-artist-by-id";

    const res = await fetch(
        `${FUNCTION_URL}/?mbid=${mbid}`,
        {
            headers: {
                Authorization: `Bearer ${ANON_KEY}`,
                apikey: ANON_KEY,
            },
        }
    )
}

export { searchMusic, searchArtistById }