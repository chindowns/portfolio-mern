import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';
import { Container, Row } from "react-bootstrap";


import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./pages/aboutMe";
import Blogs from "./pages/blogs";
import Projects from "./pages/projects";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}


// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: .1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.1),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (

    <Router>
      <Container>
        <Row style={{ borderBottom: "1px solid lightgrey", marginBottom: "10px" }}>
          <Header />
          <NavBar />
        </Row>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route exact path="/" component={AboutMe} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/projects" component={Projects} />  
          </AnimatedSwitch>
          <Row><Footer /></Row>
      </Container>
    </Router>
  );
}

export default App;
