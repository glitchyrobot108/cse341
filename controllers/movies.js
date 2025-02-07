const Movie = require("../models/movie");

async function getMovies(req, res) {
    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function createMovie(req, res) {
    try {
        const movie = await Movie.create({
            title: req.body.title,
            releasedata: req.body.releasedata,
            genre: req.body.genre,
            rating: req.body.rating,
            parentRating: req.body.parentRating,
            starring: req.body.starring,
            director: req.body.director
        });
        res.status(201).json(movie);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = {
    getMovies,
    createMovie
};