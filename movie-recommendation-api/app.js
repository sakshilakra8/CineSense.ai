const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const movieRoutes = require("./routes/movieroutes");

app.use(express.json());
app.use(require("cors")());

// connect routes
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
