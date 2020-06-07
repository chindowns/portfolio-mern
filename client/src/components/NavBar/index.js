// NavBar/index.js

import React from "react";
import "./navbar.css"
import { Nav} from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";

function NavBar() {

    const location = useLocation();

    return (
        <Nav id="nav" variant="tabs">
            <Nav.Item>
                <Nav.Link href="/aboutme">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
            </Nav.Item>
        </Nav>

    )
}
    export default NavBar;