import React from "react";
import Card from 'react-bootstrap/Card'
import "./card.css";
// import {Link} from "react-router-dom";

const Item = (props) => {

    let blog = props.blog;

    return (
        <Card>
            <Card.Img variant="top" src="blog.thumbnail" />
            <Card.Body>
                <Card.Title>blog.title</Card.Title>
                <Card.Text>blog.descrption</Card.Text>
            </Card.Body>
        </Card>
    );

}

export default Item;