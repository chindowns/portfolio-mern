import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "../components/Cards/";
import {Container, Row} from "react-bootstrap";

export default function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState("");
    const [check, setCheck] = useState(0);
    
    useEffect(() => {
        if (blogs.length === 0 && check < 3) {
            setCheck(check + 1);
            axios.get('/api/blogs')
            .then(res => { 
                setTitle(res.data.feed.title);
                setBlogs(res.data.items);
            });
            if (blogs.length > 0) {setCheck(0)}
        }
    
    })

    console.log(title);
    console.log(blogs);
    console.log(check);
    

    return (
        <div>
            <Container>
            <h2>{title}</h2>
            <Row xs={1} md={2} lg={3}>

                {blogs.map(blog => (

                    <Card blog={blog} key={blog.guid} />

                ))}
                </Row>
            </Container>
        </div>
    )

}
