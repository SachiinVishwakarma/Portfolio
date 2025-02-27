import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/inoice.png";

function Projects() {
  return (
    <Container fluid className="project-section font">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="Invoice Wave"
              description="Invoice managing software and Website to generate and design invoice for companies making with react.js , Material-UI and SQL .Have Features which allows users to manage Invoice with 100% correction ."
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
