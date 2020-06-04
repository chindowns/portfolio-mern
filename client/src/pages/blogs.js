import React, {useEffect} from "react";
import API from "../utils/API"

export default function Blogs() {

    // const mediumURL = `https://api.ress2json.com/v1/api.json?rss_url=https://medium.com/feed/@chindowns`
    let blogs = {}
        
useEffect(() => {
    getBlogs();
})

    function getBlogs() {
        API.getBlogs()
        .then(res => { 
            blogs = res.data;
        console.log(res.data);
        console.log(blogs);
        });
    }

    return (

        <div>
            <h2>res.data.feed.title</h2>
        {/* <p>{blogs}</p> */}

        </div>
    )


}
