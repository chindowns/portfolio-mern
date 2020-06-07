import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from "../Modals/modal"
import useModel from "../Modals/useModal"

import "./card.css";

const Item = (props) => {

    const {isShowing, toggle} = useModel();

    let blog = props.blog;
    let description = blog.description
    let shortDesc = description.substring(description.indexOf("</figure><p>") + 12);
    shortDesc.trim();
    let intro = shortDesc.split(" ").splice(0, 24).join(" ");
    console.log(blog);
    console.log(intro);


    return (
        <>
            <Card style={{ width: "300px", margin: "15px" }}>
                <Card.Img variant="top" src={blog.thumbnail} width="200px" />
                <Card.Body className="card-body">
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{intro}</Card.Text>
                </Card.Body>
                <button className="button-default" onClick={toggle}>Read More</button>
            </Card>
            <div className="blog">
            <Modal
                isShowing={isShowing}
                hide={toggle}
                modalTitle={blog.title}
                modalContent={blog.content}
            />
            </div>
        </>

    );

}

export default Item;