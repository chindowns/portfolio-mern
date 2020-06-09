const db = require ("../models");

module.exports = {
    create: (req, res) => {
        db.Skills
            .create(req.body)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        console.log("Searching portfoliodb for Skills")
        db.Skills
            .find({})
            .sort({order:-1})
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => { 
        db.Skills
            .findOneAndUpdate({order: req.params.id}, req.body)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).res.json(err));
    },
    delete: (req, res) => {
        db.Skills
            .findById({_id: req.params.id })
            .then(dbResults => dbResults.remove())
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },
    seed: (req, res) => {
        console.log("Seeding Skills");
        seedDB.forEach(seed => {
            db.Skills.create(seed)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
        })
        console.log("Finished Seeding Skills");
    }
}

const seedDB = [
    {"name": "3rd Party APIs"},
    {"name": "AJAX"},
    {"name": "API"},
    {"name": "Big Data"},
    {"name": "Bootstrap"},
    {"name": "Bootstrap CSS Framework"},
    {"name": "Cascading Style Sheets (CSS)"},
    {"name": "Context API"},
    {"name": "CSS Frameworks"},
    {"name": "Databases"},
    {"name": "Declarative Programming"},
    {"name": "Django"},
    {"name": "ES6"},
    {"name": "Express.js"},
    {"name": "Firebase"},
    {"name": "Flask"},
    {"name": "Full Stack"},
    {"name": "Git"},
    {"name": "GitHub"},
    {"name": "Handlebars ORM"},
    {"name": "Heroku"},
    {"name ": "HTML5"},
    {"name": "IndexDB"},
    {"name": "JavaScript"},
    {"name": "jQuery"},
    {"name": "JSON"},
    {"name ": "JSX"},
    {"name": "Linux"},
    {"name": "Leaflet.js"},
    {"name": "Mapbox"},
    {"name": "MERN" },
    {"name": "Mongo DB"},
    {"name": "Mongoose ODM"},
    {"name": "MVC"},
    {"name": "MySQL"},
    {"name": "Node.js"},
    {"name": "NoSQL"},
    {"name": "Object-oriented Programming (OOP)"},
    {"name": "ODM"},
    {"name": "ORM"},
    {"name": "Passport"},
    {"name": "Postman"},
    {"name": "Problem-Solving"},
    {"name": "Python"},
    {"name": "Rails"},
    {"name": "React"},
    {"name": "Rest API"},
    {"name": "Ruby"},
    {"name": "Sequelize ORM"},
    {"name": "Server Side APIs"},
    {"name": "Sinatra"},
    {"name": "SQL"},
    {"name": "Stateful Development"},
    {"name": "Testing"},
    {"name": "Web APIs"},
];