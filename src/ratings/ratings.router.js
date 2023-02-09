const router= require("express").Router();

const controller = require("./ratings.controller")

router.route("/:ratingId").get(controller.read)

router.route("/").get(controller.list)

module.exports = router;