// NavBar/index.js

import React from "react";
import "./navbar.css"
import { Nav, NavItem, NavLink } from 'react-bootstrap';


function NavBar() {

    return (

        // <Nav defaultActiveKey="../../pages/about" className="flex-column">
        //     <Nav.Link href="../../pages/about">Active</Nav.Link>
        //     <Nav.Link eventKey="../../pages/projects">Link</Nav.Link>
        //     <Nav.Link eventKey="../../pages/blog">Link</Nav.Link>
        //     <Nav.Link eventKey="../../pages/resume">Resume </Nav.Link>
        // </Nav>


        <nav className="col-5 d-flex flex-nowrap">
          <ul className="nav nav-pills flex-nowrap">
            <li className="nav-link d-flex flex-nowrap">
              <a id="nav-projects" href="#">Latest</a></li>
            <li className="nav-link d-flex flex-nowrap">
              <a id="nav-about" href="#">About</a></li>
            <li className="nav-link d-flex flex-nowrap">
              <a id="nav-blog" href="#">Blog</a></li>
            <li className="nav-item d-flex flex-nowrap">
              <a className="nav-link" target="blank" href="https://www.linkedin.com/in/michaeldownssj"><img
                src="assets/images/li-in-bug.png" alt="" width="25px" height="25px" /></a>
            </li>

          </ul>
        </nav>

    )
}
    export default NavBar;