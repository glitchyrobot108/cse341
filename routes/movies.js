const express = require("express")
const router = express.Router()
const controller = require("../controllers/movies")

router.get("/", controller.getMovies)
router.post("/", controller.createMovie)

module.exports = router