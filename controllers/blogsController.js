var db = require('../models');
const axios = require('axios');

module.exports = {

    findAll: (req, res) => {
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
    }


}