# 🎬 CineSense.ai

CineSense.ai is a full-stack movie recommendation web app that suggests movies based on your mood.

Instead of browsing endlessly, users can simply type how they feel (e.g., "I feel bored" or "I want something exciting") and get instant movie recommendations.

---

## 🚀 Live Demo

🌐 Frontend: https://your-netlify-link  
⚙️ Backend API: https://your-render-link  

---

## 🧠 Features

- 🎭 Mood-based movie recommendations  
- ⚡ Real-time API integration  
- 🎬 Movie details with posters and IMDb links  
- 💻 Clean and responsive UI  
- 🌐 Fully deployed (frontend + backend)

---

## 🛠️ Tech Stack

### Backend:
- Node.js
- Express.js
- OMDb API

### Frontend:
- HTML
- CSS
- JavaScript

### Deployment:
- Render (Backend)
- Netlify (Frontend)

---

## 📡 API Endpoint

GET /api/movies/recommend?mood=your_mood

### Example:

/api/movies/recommend?mood=I feel lonely

---

## ⚙️ Setup Instructions

### 1. Clone the repository


 bash
git clone https://github.com/sakshilakra8/CineSense.ai
cd movie-recommendation-api


### 2. Install dependencies

npm install

### 3. Create .env file
OMDB_API_KEY=your_api_key
PORT=5000

### 4. Run backend
node app.js

### 5. Open frontend

Open index.html in browser



💡 Future Improvements
Add real AI (NLP-based mood detection)
User authentication & watchlist
Better recommendation logic
UI animations & enhancements
🙌 Acknowledgements
OMDb API for movie data