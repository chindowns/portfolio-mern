import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Row, Container} from "react-bootstrap";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./pages/aboutMe";
import Blogs from "./pages/blogs";
import Projects from "./pages/projects";


function App() {
  return (

    <Router>
      <Container>
        <Row style={{ borderBottom: "1px solid lightgrey", marginBottom: "10px" }}>
          <Header />
          <NavBar />
        </Row>
        <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
