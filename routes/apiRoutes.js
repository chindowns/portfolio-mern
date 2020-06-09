var db = require('../models');
const router = require("express").Router();
const axios = require('axios');


let check = 0;

router.get("/api/blogs", (req, res) => {

    console.log("Getting Blogs");
    if (check < 2) {
        check++;

        axios.get(" https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chindowns")
            .then(medium => {
                console.log(medium.data);
                if (medium.data.status === 'ok') {
                    res.json(medium.data)
                }
                // set timeout of 1 minute before making another request
                setTimeout(() => {
                    check = 0;
                }, 60000)
            })
            .catch(err => res.status(422).json(err));
    }
});

router.get("/api/projects", (req,res) => {
    console.log("Requesting all Project Details");

    db.Projects.find({}, (err, dbResults) => {res.json(dbResults)})
    // .then(dbResults => res.json(dbResults))
    // .catch(err => res.status(422).json(err))
})

module.exports = router;