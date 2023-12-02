import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";




function About() {
  return (
    <Container fluid className="about-section">
     
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Introduction 
            </h1>
            <Aboutcard />
          
          
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        {/* Techstack can call Techstack module! */}
        <Techstack />

        

        
      </Container>
    </Container>
  );
}

export default About;
