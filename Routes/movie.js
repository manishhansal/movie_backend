const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const movieController = require("../Controllers/movie");

app.post("/movie", movieController.createMovie);
app.get("/movie", movieController.getAllMovie);
app.get("/movie/:movieId", movieController.getMovieById);
app.put("/movie/:movieId", movieController.updateMovie);
app.delete("/movie/:movieId", movieController.deleteMovie);

module.exports = app;
