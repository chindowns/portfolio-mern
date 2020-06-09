var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProjectsSchema = new mongoose.Schema({
    order: Number,
    name: String,
    image: String,
    repo: String,
    deploy: String,
    devRole: String,
    skills: Array,
    description: String,
    highlights: String,
    reqponsibilities: String,
    learnings: String,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;