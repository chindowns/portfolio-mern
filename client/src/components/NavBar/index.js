// NavBar/index.js

import React from "react";
import "./navbar.css"
import { Nav } from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";
import AboutMe from "../../pages/aboutMe";
import Projects from "../../pages/projects";
import Blogs from "../../pages/blogs";

function NavBar() {

    const location = useLocation();

    return (
        <Nav id="nav">
            <Link to="/aboutme" className={location.pathname === "/aboutme" ? "nav-link-active" : "nav-link"}>About Me</Link>
            <Link to="/projects" className={location.pathname === "/projects" ? "nav-link-active" : "nav-link"}>Projects</Link>
            <Link to="/blogs" className={location.pathname === "/blogs" ? "nave-link-active" : "nave-link-active"}>Blogs</Link>
        </Nav>

    )
}
    export default NavBar;