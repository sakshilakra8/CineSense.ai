const moodPatterns = [
  { mood: "happy", keywords: ["happy", "fun", "joy", "excited", "good mood"] },
  { mood: "sad", keywords: ["sad", "lonely", "depressed", "tired", "cry"] },
  { mood: "romantic", keywords: ["love", "romantic", "relationship", "date"] },
  { mood: "scared", keywords: ["scary", "horror", "fear", "ghost"] },
  { mood: "excited", keywords: ["thrill", "adventure", "action", "energy"] },
  { mood: "bored", keywords: ["bored", "nothing", "timepass", "idle"] }
];

const keywordMap = {
  happy: "comedy",
  sad: "drama",
  romantic: "romance",
  scared: "horror",
  excited: "action",
  bored: "fun",
  documentary: "documentary"
};

const detectMood = (text) => {
  text = text.toLowerCase();

  for (let pattern of moodPatterns) {
    for (let word of pattern.keywords) {
      if (text.includes(word)) {
        return pattern.mood;
      }
    }
  }

  return "happy"; // default
};

const getKeywordFromMood = (text) => {
  const mood = detectMood(text);
  return {
    mood,
    keyword: keywordMap[mood]
  };
};

module.exports = { getKeywordFromMood };