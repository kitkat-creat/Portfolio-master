import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import leaf from "../../Assets/Projects/onlineshop.png";
import emotion from "../../Assets/Projects/resume.png";
import editor from "./BankProjects/bank.png";
import salary from "../../Assets/Projects/salary.png";
import suicide from "../../Assets/Projects/number.png";
import bitsOfCode from "../../Assets/Projects/medical.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salary}
              isBlog={false}
              title="Salary Prediction"
              description="Used 2 different salary datasets from Kaggle and performed merging, cleaning to acquire quality data. Constructed random forest regressor models to see feature importance and enhance accuracy in prediction incomes, achieving 1% reduction in MSE."
              ghLink="https://github.com/kitkat-creat/machinelearning"
              

            
            />
           {/* <DiPython color="white" size={100} style={{marginBottom: "150px"}}/> */}
            
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Medical Notes Classification"
              description="Using medical report dataset from kaggle, applied text preprocessing and natural language preprocessing to maintain machine readable form. Built classification models to categorize medical notes across 5 distinct clinical domains: gastroenterology,neurology,radiology,urology,and Orthopedic using pipeline and tf-idf vectorizer; resulting in significant achievement of 78% accuracy. "
              ghLink="https://github.com/kitkat-creat/DataMining/tree/main/Medicalnotes"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Online Store"
              description="A replication concept of Amazon, constructed gui-based inventory application using python library and mysql database. Features include account creation, log in system, and initialize of database. Registered users are able to insert items into database, delete items, and review other customer's products."
              ghLink="https://github.com/JsakoCS/Database-Design"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Number Recognition"
              description="Trained linearsvc and svc kernel models to predict numbers based on handwritting image using pipeline. With an addition of fine-tuning, resulting in a maximum of 94% accuracy and true positives in confusion matrix."
              ghLink="https://github.com/kitkat-creat/machinelearning/blob/main/Project3/Project3.ipynb"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Personal Portfolio(This one!)"
              description=" Built a personal website portfolio using REACT bootstraps, javascript, and html."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
