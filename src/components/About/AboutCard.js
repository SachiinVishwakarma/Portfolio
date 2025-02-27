import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view  font">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sachin Vishwakarma </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am currently pursuing my B.tech degree at YBN University.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Journels 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(200 126 172)" }}>
            "Transform dreams into reality, one keystroke at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Sachin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
