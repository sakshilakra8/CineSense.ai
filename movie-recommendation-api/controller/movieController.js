const { getKeywordFromMood } = require("../services/moodServices");
const { fetchMovies } = require("../services/tmdbServices");

const getRecommendations = async (req, res) => {
  try {
    const { mood } = req.query;

    if (!mood) {
      return res.status(400).json({ error: "Mood is required" });
    }

    // 🔥 Smart detection (no AI API)
    const { mood: detectedMood, keyword } = getKeywordFromMood(mood);

    const movies = await fetchMovies(keyword);

    res.json({
      input: mood,
      detected_mood: detectedMood,
      category: keyword,
      results: movies.map(movie => ({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        imdb: `https://www.imdb.com/title/${movie.imdbID}`
      }))
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecommendations };