var db = require("../models");
const axios = require("axios");

module.exports = function (app) {


    let check = 0;

    app.get("/api/blogs", (req, res) => {

        console.log("Getting Blogs");
        if (check < 2) {
            check++;

            axios.get(" https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chindowns")
                .then(medium => {
                    console.log(medium.data);
                    if (medium.data.status === 'ok') {
                        res.json(medium.data)
                    }
                    // set timeout of 2 minute before making another request
                    setTimeout(() => {
                        check = 0;
                    }, 120000)
                })
                .catch(err => res.status(422).json(err));
        }
    });



    // app.get("/api/books", function(req,res){
    //     db.Book.find({})
    //     .sort({ date: -1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }),

    // app.post("/api/books", function(req,res){
    //     db.Book.create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }),

    // app.delete("/api/books/:id", function(req,res){
    //     db.Book.deleteOne( { "_id" : req.params.id } )
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }),


}