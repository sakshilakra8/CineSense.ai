const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


const PORT = process.env.PORT || 5000;

const movieRoutes = require("./routes/movieroutes");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ listen ONLY ONCE
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});