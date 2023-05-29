import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started programming in c++ many years ago. That's when computer science grew on me.
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> Javascript and Python languages </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  data analysis
                </b>
              </i>
              <br />
              <br />
              During coursework, I apply my passion for developer
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kitkat-creat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kathareeya-atthajaroon-345b6323a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_kathy_a_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <h1 style={{ fontSize: "1.0em",color:"white" }}> Icon credit and design: <a href="https://iconscout.com/icons/user" target="_blank">Free Woman Icon</a> by <a href="https://iconscout.com/contributors/users-insights">Users  Insights</a> on <a href="https://iconscout.com">IconScout</a>
          <br/><a href="https://www.flaticon.com/free-icons/patient" title="patient icons">Patient icons created by RaftelDesign - Flaticon</a></h1>
          <br/><a href="https://www.flaticon.com/free-icons/bank" title="bank icons">Bank icons created by Freepik - Flaticon</a>
          <br/><a href="https://www.flaticon.com/free-icons/number-blocks" title="number blocks icons">Number blocks icons created by surang - Flaticon</a>
          <br/><a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Eucalyp - Flaticon</a>
          <br/><a href="https://github.com/soumyajit4419/Portfolio" title="design credit">Design Credit</a>

        </Row>
      </Container>
    </Container>
  );
}

export default Home;
