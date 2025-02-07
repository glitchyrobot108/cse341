const Actor = require("../models/actor")

async function getActors(req, res) {
    try {
        const Actors = await Actor.find({})
        res.json(Actors)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function createActor(req, res) {
    try {
        const Actor = await Actor.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthdate: req.body.birthdate,
            country: req.body.country,
            stars_in: req.body.stars_in
        })
        res.status(201).json(Actor)
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors })
        } else {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
}

module.exports = {
    getActors,
    createActor
}