import React from "react";
import "./navbar.css"
import Nav from 'react-bootstrap/Nav'

function NavBar() {

    return (

        <Nav defaultActiveKey="../../pages/about" className="flex-column">
            <Nav.Link href="../../pages/about">Active</Nav.Link>
            <Nav.Link eventKey="../../pages/projects">Link</Nav.Link>
            <Nav.Link eventKey="../../pages/blog">Link</Nav.Link>
            <Nav.Link eventKey="../../pages/resume">Resume </Nav.Link>
        </Nav>
    )
    }
    export default NavBar;