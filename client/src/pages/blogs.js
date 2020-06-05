import React, {useEffect} from "react";
import axios from "axios";
import CardContainer from "../components/Cards/";
import CardRow from "../components/Cards/";
import Card from "../components/Cards/";

export default function Blogs() {

    // const mediumURL = `https://api.ress2json.com/v1/api.json?rss_url=https://medium.com/feed/@chindowns`
    let blogs = [];
    let title ;
useEffect(() => {
    getBlogs();
})

    function getBlogs() {
        axios.get('/api/blogs')
        .then(res => { 
        // console.log(res);
            title = res.data.feed.title;
            blogs = res.data.items;
        console.log(blogs);
        });
    }

    return (

        <div>
            <h2>title</h2>
            <CardContainer><CardRow>
                {blogs.map((blog, i) => (

                    <Card blog={blog} key={blog.guid} />

                ))}
            </CardRow></CardContainer>

        </div>
    )

}
