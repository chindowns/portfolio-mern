var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProjectsSchema = new mongoose.Schema({
    order: Number,
    projectName: String,
    imageLink: String,
    repoLink: String,
    deployLink: String,
    projectRole: String,
    skills_id: Array,
    appDesc: String,
    projHighlights: String,
    projReqponsibilities: String,
    projLearnings: String,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;