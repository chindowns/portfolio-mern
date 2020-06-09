// NavBar/index.js

import React from "react";
import "./navbar.css"
import { Nav} from 'react-bootstrap';

export default function NavBar() {

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
