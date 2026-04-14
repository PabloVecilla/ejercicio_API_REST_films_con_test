// WHAT UTILS DOES:: giving a title -> fetch from OMDb -> return raw data

// fetch film: 
const fetchFilm = async (title) => {
    // We need: api_key
    const api_key = process.env.API_KEY;

    const response = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&t=${title}`); // fetches data from api 
    const data = await response.json() // formats data so it's JS workable
     
    console.log("TITLE ARG: ", title); 
    console.log("RAW DATA TITLE: ", data.Title); 
    console.log("RAW RESPONSE FLAG: ",data?.Response ); 
    console.log("RAW ERROR:", data?.Error);

    if (data.Response === "False") return null; 


    return data; // returns json
};

module.exports = fetchFilm;