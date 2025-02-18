const express = require("express")
const router = express.Router()
const controller = require("../controllers/actors")

router.get("/", controller.getActors)
router.get("/:id", controller.getActorById)
router.get("/name/:firstName/:lastName", controller.getActorByName)
router.post("/", controller.createActor)
router.put("/:id", controller.updateActor)
router.delete("/:id", controller.deleteActor)

module.exports = router