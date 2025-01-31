import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              title="Historiscan"
              description="HistoriScan is an AR app that enhances museum exploration by overlaying historical information onto artifacts, providing an engaging and interactive learning experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Poultry Management System"
              description="Poultry Management System automates feeding when food runs out and allows users to remotely monitor and control their poultry farm via the internet. It ensures convenience, efficiency, and real-time updates, modernizing poultry farming operations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Jolly Air"
              description="Jolly Air is an innovative device that absorbs air pollution caused by smoking or other pollutants. Paired with a mobile application, it allows users to monitor air quality in real-time and detect polluted areas, promoting cleaner and healthier environments."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
