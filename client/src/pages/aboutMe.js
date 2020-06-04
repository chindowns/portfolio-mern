import React from "react";
import {Col} from "react-bootstrap";

export default function AboutMe() {
    return(
      <div id="about">
        <Col>
            <img id="profile-img" src="Portfolio-HeadShot-3.jpg" className="rounded-circle" alt="Michael Downs" width="300px" />

        <p>
        Michael completed UC Berkeley's Full Stack Development program. Michael delivers clean and polished applications in a collaborative environment. He is an effective communicator with an ability to translate technology into everyday language for clients and users.

        <br /><br />
        Michael is a Collaborative teammate who will also manage individual tasks in order to get projects completed. Through his clear communication and leadership skills, he delivered successful projects that involved pair programming, virtual teams, and quick and effective troubleshooting quickly.
        <br /><br />

        Michael's curiosity drives his continuing learning and strives to implement best practices with both object-oriented and declarative programming languages and concepts.
        </p>
        </Col>
        
      </div>
    )


}
