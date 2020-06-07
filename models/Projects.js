var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },

    imageLink: {
        type: String,
        required: true,
    },

    repoLink: {
        type: String,
        required: true,
    },

    deployLink: {
        type: String,
        required: true,
    },

    projectRole: {
        type: String,
        required: true
    },

    skills_id: {
        type: Array,
        required: true
    },

    appDesc: String,

    projHighlights: String,

    projReqponsibilities: String,

    projLearnings: String
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;