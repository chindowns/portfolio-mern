import React from "react";
import Card from 'react-bootstrap/Card'
import "./card.css";
// import {Link} from "react-router-dom";

const Item = (props) => {

    let blog = props.blog;
    let intro = blog.description.split(" ").splice(0, 24).join(" ");

    return (
        <Card width="225px">
            <Link to={"./blogModal"+ blog }>
                <Card.Img variant="top" src="blog.thumbnail" width="200px" />
                <Card.Body className="card-body">
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{intro}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );

}

export default Item;