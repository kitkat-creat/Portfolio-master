import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
        <h3 style={{color: "white"}}>Kathareeya Atthajaroon</h3>
          <Nav className="ms-auto" defaultActiveKey="#home" acti>
            <Nav.Item>
              
              <NavLink as={Link} to="/" onClick={() => updateExpanded(false)} exact activeClassName="active" style={{color:"white"}}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </NavLink>
              <NavLink as={Link} to="/bankprojects" onClick={() => updateExpanded(false)} exact activeClassName="active">
                {/* <AiOutlineHome style={{ marginBottom: "2px" }} /> Home */}
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)} 
                exact activeClassName="active" style={{color:"white"}}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </NavLink>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <NavLink
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)} exact activeClassName="active" style={{color:"white"}}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contacts
              </NavLink>
            </Nav.Item>

            

            {/* <Nav.Item>
              <Nav.Link
                href="https://github.com/kitkat-creat"
                target="_blank"
                
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Github
              </Nav.Link> 
              
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
