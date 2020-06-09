const router = require("express").Router();
const projectsRoutes = require("./projects");
const blogsRoutes = require("./blogs");
const skillsRoutes = require("./skills");
const seedersRoutes = require("./seeders");

// Book routes
router.use("/projects", projectsRoutes);
router.use("/blogs", blogsRoutes);
router.use("/skills", skillsRoutes);
router.use("/seeders", seedersRoutes);

module.exports = router;