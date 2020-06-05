import React, {useState, useEffect} from "react";
import axios from "axios";
import CardContainer from "../components/Cards/";
import CardRow from "../components/Cards/";
import Card from "../components/Cards/";

export default function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState();
    
    useEffect(() => {
        axios.get('/api/blogs')
        .then(res => { 
            setTitle(res.data.feed.title);
            setBlogs(res.data.items);
        });
    })

    return (
        <div>
            <h2>{title}</h2>
            {/* <CardContainer> <CardRow> */}
                {blogs.map(blog => (

                    <Card blog={blog} key={blog.guid} />

                ))}
            {/* </CardRow> </CardContainer> */}

        </div>
    )

}
