const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects/"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

module.exports = router;