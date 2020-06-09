const router = require("express").Router();
const skillsController = require("../../controllers/skillsController");
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/seeders/"
router
    .route("/skills")
    .get(skillsController.seed);
router
    .route("/projects")
    .get(projectsController.seed);

module.exports = router;