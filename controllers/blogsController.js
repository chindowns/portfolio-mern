var db = require('../models');
const axios = require('axios');

module.exports = {

    findAll: function(req, res){

        axios.get(" https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chindowns")
            .then(medium => {
                console.log(medium.data);
                if (medium.data.status === 'ok') {
                    res.json(medium.data)
                }
            })
            .catch(err => res.status(422).json(err));
        
    }


}