const Actor = require("../models/actor")

async function getActors(req, res) {
    try {
        const Actors = await Actor.find({})
        res.json(Actors)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function getActorById(req, res) {
    try {
        const actor = await Actor.find({_id: req.params.id})
        res.json(actor)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function getActorByName(req, res) {
    try {
        const actor = await Actor.find({
            firstName: req.params.firstName,
            lastName: req.params.lastName
        })
        res.json(actor)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function createActor(req, res) {
    try {
        const { firstName, lastName, birthdate, country, movies } = req.body;

        const actor = await Actor.create({
            firstName,
            lastName,
            birthdate,
            country,
            movies
        });
        res.status(201).json(actor);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

async function updateActor(req, res) {
    try {
        const actor = await actor.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthdate: req.body.birthdate,
                country: req.body.country,
                movies: req.body.movies
            },
            { new: true }
        );
        if (!actor) {
            return res.status(404).json({ message: "actor not found" });
        }
        res.status(200).json(actor);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

async function deleteActor(req, res) {
    try {
        const actor = await actor.deleteOne({ _id: req.params.id });
        if (!actor.deletedCount) {
            return res.status(404).json({ message: "actor not found" });
        }
        res.status(200).json({ message: "actor deleted successfully" });
    } catch (error) {
        if (error.name === "CastError") {
            res.status(404).json({ message: "actor not found" });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = {
    getActors,
    getActorById,
    getActorByName,
    createActor,
    updateActor,
    deleteActor
}