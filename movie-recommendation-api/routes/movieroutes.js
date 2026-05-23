const express = require("express");
const router = express.Router();

const { getRecommendations } = require("../controller/movieController");

router.get("/recommend", getRecommendations);

module.exports = router;