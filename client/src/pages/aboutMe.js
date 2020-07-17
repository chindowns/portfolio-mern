import React from "react";
import {Row, Col, Card} from "react-bootstrap";

export default function AboutMe() {
    return(
    <Row id="about">
      <Col>
          <img id="profile-img" src="portrait-500.jpg" className="rounded-circle" alt="Michael Downs" width="300px" />

      <p>
      Michael completed UC Berkeley's Full Stack Development program. Michael delivers clean and polished applications in a collaborative environment. He is an effective communicator with an ability to translate technology into everyday language for clients and users.
      <br /><br />
      Michael is a Collaborative teammate who will also manage individual tasks in order to get projects completed. Through his clear communication and leadership skills, he delivered successful projects that involved pair programming, virtual teams, and quick and effective troubleshooting quickly.
      <br /><br />
      Michael's curiosity drives his continuing learning and strives to implement best practices with both object-oriented and declarative programming languages and concepts.
      </p>
      <Card>
        <Card.Body>
          <Card.Title>Technical Skills</Card.Title>
          <Card.Text>
            <p class="skills">
            JavaScript &bull; ES6 &bull; jQuery &bull; NodeJS &bull; Express &bull; REST API &bull; SASS &bull; HTML5 &bull; CSS &bull; Bootstrap &bull; React &bull; JSX &bull; Context API &bull; MongoDB &bull; MySQL &bull; Postgres &bull; Mongoose ODM &bull; Sequelize ORM &bull; Ruby &bull; Rails &bull; Python &bull; Linux &bull; Pearl &bull; Sinatra &bull; Flask &bull; Django &bull; Declarative Programming &bull; Firebase &bull; AWS &bull; Webpack &bull; Git &bull; Gulp &bull; Handlebars 
            </p>
          </Card.Text>
          <hr />
          <Card.Title>Soft Skills</Card.Title>
          <Card.Text>
            <p class="skills">
            Cross-functional teams &bull; Effective Communicator &bull; Presentation to Executive, Management, Clients &bull; Sales & Marketing &bull; Business Development &bull; Product Management &bull; Project Management &bull; Startups &bull; Highly Motivated &bull; Self Initiative &bull; Detail Oriented &bull; Team Collaboration &bull; Self Contributor
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      </Col>
      <Col xs={1}>
      <a href="https://www.linkedin.com/in/michaeldownssj" target="_blank"><img className="about-icons" src="li-in-bug.png" /></a>
      <a href="https://www.github.com/chindowns" target="_blank"><img className="about-icons" src="github.png" /></a>
      <a href="mailto://michael@chindowns.com" > <img className="about-icons" src="email.svg" /> </a>
      <a href="./Michael-Downs-FullStack-Resume.pdf" target="_blank"><img className="about-icons" src="pdf-icon_bw.jpg" /></a>

      </Col>
      
    </Row>
  )


}
