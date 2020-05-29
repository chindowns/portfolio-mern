import React from "react";
import "./sidebar.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "../NavBar"

const Sidebar = () => {
    return (
        <Container className="secondary">
            <button type="button" id="sidebarCollapse" class="navbar-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Image src="portfolioHSvig-250.jpg" rounded />
            <h2> Michael Downs</h2>
            <span className="email"><img src="email.svg" height="16px">michael@chindowns.com</img></span>
            <p>479-799-9490</p>
            <Nav />
        
        </ Container >
    )
}

export default Sidebar;