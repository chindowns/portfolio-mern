var db = require("../models");
const axios = require("axios");

module.exports = function (app) {

    app.get("/api/experience", function(req,res){
        db.JobHistory.find({})
        .sort({ date: -1 })
        .then(dbResults => res.json(dbResults))
        .catch(err => res.status(422).json(err));
    }),

    app.post("/api/experience", function(req,res){
        db.JobHistory.create(req.body)
        .then(dbResults => res.json(dbResults))
        .catch(err => res.status(422).json(err));
    }),

    app.delete("/api/experience/:id", function(req,res){
        db.JobHistory.deleteOne( { "_id" : req.params.id } )
        .then(dbResults => res.json(dbResults))
        .catch(err => res.status(422).json(err));
    }),

    app.get("/api/projects/", function(req,res){
        db.Projects.get({})
        .then(dbResults => {
            console.log(dbResults.data)
            res.json(dbResults.data)})
        .catch(err => res.status(422).json(err));
    })


}