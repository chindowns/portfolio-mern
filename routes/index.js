const path = require("path");
const router = require("express").Router();
const axios = require("axios");


    // Send every request to the React app
    // Define any API routes before this runs
    router.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    // GET BLOGS
    const URL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chindowns"

    router.get("/api/blogs", (req, res) => {
    console.log(URL);
        axios.get(URL, function(response) {
            console.log(response);
            if (response.status === 'ok') {
                res.json(response)
            }
        })
    })


    // app.get("/api/experience", function(req,res){
    //     db.JobHistory.find({})
    //     .sort({ date: -1 })
    //     .then(dbResults => res.json(dbResults))
    //     .catch(err => res.status(422).json(err));
    // }),

    // app.post("/api/experience", function(req,res){
    //     db.JobHistory.create(req.body)
    //     .then(dbResults => res.json(dbResults))
    //     .catch(err => res.status(422).json(err));
    // }),

    // app.delete("/api/experience/:id", function(req,res){
    //     db.JobHistory.deleteOne( { "_id" : req.params.id } )
    //     .then(dbResults => res.json(dbResults))
    //     .catch(err => res.status(422).json(err));
    // }),

    // app.get("/api/projects/", function(req,res){
    //     db.Projects.get({})
    //     .then(dbResults => {
    //         console.log(dbResults.data)
    //         res.json(dbResults.data)})
    //     .catch(err => res.status(422).json(err));
    // })


module.exports = router;