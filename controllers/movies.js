const Movie = require("../models/movie")

async function getMovies(req, res) {
    try {
        const movies = await Movie.find({})
        res.json(movies)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function getMovieById(req, res) {
    try {
        const movie = await Movie.find({_id: req.params.id})
        res.json(movie)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function getMovieByTitle(req, res) {
    try {
        const movie = await Movie.findOne({
            title: { $regex: new RegExp(req.params.title, "i") }
        })
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.json(movie)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function createMovie(req, res) {
    try {
        const movie = await Movie.create({
            title: req.body.title,
            releasedate: req.body.releasedate,
            genre: req.body.genre,
            rating: req.body.rating,
            parentRating: req.body.parentRating,
            actors: req.body.actors,
            director: req.body.director
        })
        res.status(201).json(movie)
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors })
        } else {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
}

async function updateMovie(req, res) {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                releasedate: req.body.releasedate,
                genre: req.body.genre,
                rating: req.body.rating,
                parentRating: req.body.parentRating,
                actors: req.body.actors,
                director: req.body.director
            },
            { new: true }
        );
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(Movie);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

async function deleteMovie(req, res) {
    try {
        const movie = await Movie.deleteOne({ _id: req.params.id });
        if (!movie.deletedCount) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        if (error.name === "CastError") {
            res.status(404).json({ message: "Movie not found" });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = {
    getMovies,
    getMovieById,
    getMovieByTitle,
    createMovie,
    updateMovie,
    deleteMovie
}