import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import bank from "./bank.png";
import bank_signup from "./bank_sign_up.png";
import bank_dashboard from "./bank_dashboard.png";
import bank_timeout from "./bank_timeout.png";
import bank_transfer from "./bank_transfer.png";
import ImageSlider from "../../../ImageSlider/ImageSliders";
// import "../styles/bank.css";
function BankProject() {

  const slides = [
    { url: bank},
    { url: bank_signup},
    { url:bank_dashboard},
    { url: bank_transfer },
    { url: bank_timeout }
  ];
  const containerStyles = {
    width: "600px",
    height: "400px",
    margin: "0 auto",
  };
 
  return (
    <Container fluid className="bank-section">
     
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          > */}

            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Bank Website
              <Card.Img variant="top" src={bank} alt="card-img"  />
              
            </h1>
            <Col
            md={7}
            style={{float:"left", paddingBottom:"100px"}}
            
          >
            <p style={{textAlign:"left"}}><strong style={{fontSize:"20px"}}>Problem Statement</strong>

<br/>The project aimed to develop a bank website as replication, providing a platform for bankers to create, view, and transfers.
</p>
<p style={{textAlign:"left"}}>
<br/>Method(s): Prototyping, Wireframing, Logo Design, User Testing, Documentation, Weekly Meetings, & Pair Programming.

<br/>Tool(s): Figma, Google Docs, Kanban Board, Zoom, MYSQL, NodeJS, GitHub, Visual Studio Code: HTML,CSS, and Javascript</p>
</Col>
           
          <Col
            md={5}
            
            
          >
           <p style={{textAlign:"left"}}> Client: Professor Yasamin Ehteshami
           <br/>Project Duration: 6 Months

           <br/>Team:

           <br/>Kathareeya Atthajaroon | UI/UX Designer | Front-end, Back-end Developer & Database Programmer

           <br/>Erick Bravo | Product Manager | UI/UX Designer 

           <br/>Sage Vigil | Product Manager | UI/UX Designer | Front-end Developer 

           <br/>Sargis Shahbazyan | UI/UX Designer | Developer | Database Programmer

           <br/>Joseph Sako | UI/UX Designer | Back-end Developer
           <br/>Melissa Little | UI/UX Designer 
           <br/>Ali Amirhassani | UI/UX Designer | Front-end Developer
           <br/>Sogol Gholizadeh | UI/UX Designer | Developer
           </p>
          </Col>

          {/* SECOND SECTION */}

          <Col
            md={7}
            style={{float:"left"}}
            
          >
            <p style={{textAlign:"left"}}><strong style={{fontSize:"20px"}}>Objective & Goals</strong>

<br/><strong> Account Creations and User Logins</strong>

<br/>Objective: Provide ability to create online accounts and successfully log in.

<br/>Goal: Ensure to prevent account duplications and inform the user of the invalidation.

</p>

<p style={{textAlign:"left"}}><strong>Session Timeout</strong>



<br/>Objective: Set a session timeout feature that detects page activity. 

<br/>Goal: Be sure to prompt the user with notification, and it is exactly 1 minute idle. 

</p>
</Col>
           
          <Col
            md={5}
            
            
          >
           
           <p style={{textAlign:"left"}}><strong>Deposits and Internal Transfers</strong>



<br/>Objective: Provide ability to create online accounts and successfully log in.

<br/>Goal: Ensure to prevent account duplications and inform the user of the invalidation.

</p>

<p style={{textAlign:"left"}}><strong>Account Statements</strong>



<br/>Objective: Provide ability to create online accounts and successfully log in.

<br/>Goal: Ensure to prevent account duplications and inform the user of the invalidation.

</p>
          </Col>
{/* THIRD SECTION */}
          <Col
            md={7}
            style={{float:"left"}}
            
          >
            <p style={{textAlign:"left"}}><strong style={{fontSize:"20px"}}>Challenges</strong>

<br/><strong>Challenge 1: </strong>

<br/>Description: Provide ability to create online accounts and successfully log in.

<br/>Impact: Ensure to prevent account duplications and inform the user of the invalidation.

</p>

<p style={{textAlign:"left"}}><strong>Session Timeout</strong>



<br/>Objective: Set a session timeout feature that detects page activity. 

<br/>Goal: Be sure to prompt the user with notification, and it is exactly 1 minute idle. 

</p>
</Col>
           
          <Col
            md={5}
            
            
          >
           
           <p style={{textAlign:"left"}}><strong>Deposits and Internal Transfers</strong>



<br/>Objective: Provide ability to create online accounts and successfully log in.

<br/>Goal: Ensure to prevent account duplications and inform the user of the invalidation.

</p>

<p style={{textAlign:"left"}}><strong>Account Statements</strong>



<br/>Objective: Provide ability to create online accounts and successfully log in.

<br/>Goal: Ensure to prevent account duplications and inform the user of the invalidation.

</p>
          </Col>

          <p style={{textAlign:"left"}}><strong style={{fontSize:"20px"}}>Wireframes</strong>
              
          <div>
     
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
            </p>
        </Row>
        </Container>
    </Container>
  );
}

export default BankProject;
