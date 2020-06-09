import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./projCard.css";

export default function ProjCard(props) {

    console.log(props.project.image);

    const { order, name, image, repo, deploy, devRole, skills, description, highlights, responsibilities, learnings } = props.project;

    let flip = false;
    if (order % 2 === 1) { flip = true };

    return (
        <>
            {flip ?
                <Row className="projectRow">
                    <Col className="imageCol">
                        <Image src={image} fluid />
                    </Col>
                    <Col className="infoCol">
                        <h3 className="projTitle">{name}</h3>
                        <p>{description}</p>
                    </Col>
                </Row>
                :
                <Row className="projectRow">
                    <Col className="infoCol">
                        <h3 className="projTitle">{name}</h3>
                        <p>{description}</p>
                    </Col>
                    <Col className="imageCol">
                        <Image src={image} fluid />
                    </Col>
                </Row>
            }
        </>
    )
}