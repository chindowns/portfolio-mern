import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from "../Modals/modal"
import useModel from "../Modals/useModal"

import "./card.css";

const Item = (props) => {

    const { isShowing, toggle } = useModel();

    let blog = props.blog;

    let description = blog.description
    let intro = description.substring(description.indexOf("</figure><p>") + 12).split(" ").splice(0, 24).join(" ").trim();
    console.log(blog);
    console.log(intro);


    return (
            <Card style={{ margin: "15px" }}>
                <Card.Img variant="top" src={blog.thumbnail} width="200px" />
                <Card.Body className="card-body">
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{intro}</Card.Text>
                </Card.Body>
                <button className="button-default" onClick={(e) => { e.preventDefault(); window.open(blog.guid, '_blank') }}>Read More</button>
                {/* <button className="button-default" onClick={toggle}>Read More</button> */}
                <div className="blog">
                    <Modal
                        isShowing={isShowing}
                        hide={toggle}
                        modalTitle={blog.title}
                        modalContent={blog.content}
                    />
                </div>
            </Card>

    );

}

export default Item;