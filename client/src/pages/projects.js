import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap";

export default function Projects() {

  const [projects, setProjects] = useState({})

  useEffect(() => {
    if (projects.length === 0) {
      getProjects();
    }

  },[projects.length])

  const getProjects = () => {
    axios('/api/projects')
    .then(data => {
      console.log(data);
      setProjects(data)
    });

  }

return (

  <Container>
    <h2>Project</h2>
    <Row xs={1} md={2}>
      
    </Row>
  </Container>


  
)
}


