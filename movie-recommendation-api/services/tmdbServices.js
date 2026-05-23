const axios = require("axios");

const fetchMovies = async (keyword) => {
  try {
    if (!process.env.OMDB_API_KEY) {
      throw new Error("OMDB_API_KEY is missing. Create a .env file in the project root.");
    }

    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        s: keyword
      }
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error);
    }

    return response.data.Search.slice(0, 5);

  } catch (error) {
    const message = error.response?.data?.Error || error.message;

    console.error("OMDb Error:", message);
    throw new Error(message);
  }
};

module.exports = { fetchMovies };
