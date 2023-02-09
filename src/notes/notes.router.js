const router = require("express").Router();
const controller = require("./notes.controller");

//imports the rating router file
const ratingsRouter = require("../ratings/ratings.router")
const methodNotAllowed = require("../errors/methodNotAllowed");
// this should be added before any other routes, in order to nest routes
router.use("/:noteId/ratings", ratingsRouter)

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete).all(methodNotAllowed)

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed)

module.exports = router;
