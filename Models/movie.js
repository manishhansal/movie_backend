const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  movieName: { type: String },
  movieTitle: { type: String },
  rating: { type: String },
  category: { type: String },
  price: { type: String },
});

module.exports = mongoose.model("movie", movie);
