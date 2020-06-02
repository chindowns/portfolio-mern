import React, { useEffect, useState } from "react";
import API from "../utils/api"

export default function Blogs() {

    const mediumURL = `https://api.ress2json.com/v1/api.json?rss_url=https://medium.com/feed/@chindowns`
    const blogs = {}
    const getBlogs = () => {
  
        
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (

        <div>
            <h2>res.data.feed.title</h2>


        </div>
    )
}
