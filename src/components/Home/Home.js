import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bank from "./BankProjects/bank.png";
import ProjectCards from "./ProjectCards";
import BankProject from "./BankProjects/BankProject";
import { Link } from 'react-router-dom';

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
        
         
            <h1 style={{ fontSize: "2.6em"  }}>
              Developing mock websites throughout courseworks
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={5} className="project-card">
            <ProjectCards
              imgPath={bank}
              to="/bankprojects"
              isBlog={false}
              title="Bank Website"
              description="Used 2 different salary datasets from Kaggle and performed merging, cleaning to acquire quality data. Constructed random forest regressor models to see feature importance and enhance accuracy in prediction incomes, achieving 1% reduction in MSE."
              // link={BankProject}

            
            />
            {/* <Link  className="btn btn-primary">
              Read More
            </Link> */}
            
             </Col>
             <Col md={5} className="project-card">
            <ProjectCards
              imgPath={bank}
              isBlog={false}
              title="Banking Website"
              description="Developed full-stack web based bank application using javascript, nodejs,html, and mysql database. Features consists of  account login page
              an account creation page with an ability to set a password reset question
              an account dashboard to display current amounts
              a deposit page to insert monies and do quick transfers into different accounts
              a withdrawal page to pull out monies"
              ghLink="https://github.com/sopiloteh/IPFLLC"
                          
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCards
              imgPath={bank}
              isBlog={false}
              title="Banking Website"
              description="Developed full-stack web based bank application using javascript, nodejs,html, and mysql database. Features consists of  account login page
              an account creation page with an ability to set a password reset question
              an account dashboard to display current amounts
              a deposit page to insert monies and do quick transfers into different accounts
              a withdrawal page to pull out monies"
              ghLink="https://github.com/sopiloteh/IPFLLC"
                          
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCards
              imgPath={bank}
              isBlog={false}
              title="Banking Website"
              description="Developed full-stack web based bank application using javascript, nodejs,html, and mysql database. Features consists of  account login page
              an account creation page with an ability to set a password reset question
              an account dashboard to display current amounts
              a deposit page to insert monies and do quick transfers into different accounts
              a withdrawal page to pull out monies"
              ghLink="https://github.com/sopiloteh/IPFLLC"
                          
            />
          </Col>
          
              
              
            
          
         
        </Row>
        {/* <Row>
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
          

        </Row> */}
      </Container>
    </Container>
  );
}

export default Home;
