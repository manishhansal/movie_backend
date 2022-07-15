const movieModel = require("../Models/movie");

async function getAllMovie(req, res, next) {
  try {
    let response = await movieModel.find({});
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function createMovie(req, res, next) {
  //fetch info from request body
  try {
    let movieDetail = req.body;
    console.log(req.body);
    let response = await movieModel.insertMany([movieDetail]);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
}

async function deleteMovie(req, res, next) {
  let movieId = req.params.movieId;
  let response = await movieModel.deleteOne({ _id: movieId });
  res.json(response);
}

async function updateMovie(req, res, next) {
  let movieId = req.params.movieId;
  let body = req.body;
  let response = await movieModel.updateOne({ _id: movieId }, { $set: body });
  res.json(response);
}

module.exports = {
  getAllMovie,
  createMovie,
  deleteMovie,
  updateMovie,
};
