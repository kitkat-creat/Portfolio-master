import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kathareeya Atthajaroon </span>
            from <span className="purple"> Thailand</span>
            <br /> I am a recent Computer Science Bachelor graduate!
            
            Additionally, I am currently looking for either software engineering and data engineering positions.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to explore in computer science working environment"{" "}
          </p>
          <footer className="blockquote-footer">Atthajaroon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
