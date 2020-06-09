var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Skills = mongoose.model("Skills", SkillsSchema);

module.exports = Skills;