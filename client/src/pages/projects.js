import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Container } from "react-bootstrap";
import ProjCard from "../components/ProjCards";

export default function Projects() {

  const [projects, setProjects] = useState({})

  useEffect(() => {
      getProjects();
  },[])

  const getProjects = () => {
    console.log("Getting Projects")
    axios.get('/api/projects')
    .then(dbRes => setProjects(dbRes.data))
    .catch(err => console.log(err));
  }


console.log(projects);
return (
  (projects.length > 0) ? 
  <Container>
    <h2>Projects</h2>
    {projects.map(project => (
      <ProjCard project={project} key={project.order} />
    ))}
  </Container>
  :
  <h2> Getting Project Information</h2>
)
}


