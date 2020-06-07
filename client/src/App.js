import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ROW from "react-bootstrap/Row";
import CONTAINER from "react-bootstrap/Container";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Modal from "./components/Modals/Modal";
import AboutMe from "./pages/aboutMe";
import Blogs from "./pages/blogs";
import Projects from "./pages/projects";


function App() {
  return (
    <Router>
      <CONTAINER>
        <ROW>
        <Header />
        <NavBar />
        </ROW>
        <Switch>

          <Route exact path="/" component={AboutMe} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/projects" component={Projects} />
          <Route path="/modal" component={Modal} />

        </Switch>
        <Footer />
      </CONTAINER>
    </Router>

  );
}

export default App;
