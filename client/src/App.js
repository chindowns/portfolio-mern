import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ROW from "react-bootstrap/Row";
import CONTAINER from "react-bootstrap/Container";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./pages/aboutMe";
import Blogs from "./pages/blogs";
import Projects from "./pages/projects";
import { ModalProvider } from './components/Modals/modalContext';


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
          <ModalProvider>
            <Route path="/blogs" component={Blogs} />
          </ModalProvider>
          <Route path="/projects" component={Projects} />

        </Switch>
        <Footer />
      </CONTAINER>
    </Router>

  );
}

export default App;
