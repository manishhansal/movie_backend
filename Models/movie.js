const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  movieName: { type: String, required: true },
  movieTitle: { type: String, required: true },
  rating: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model("movie", movie);
