import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leisurely from "../../Assets/Projects/leisure.png"
import old from "../../Assets/Projects/old.png"
import ar from "../../Assets/Projects/ar.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "rgba(70, 70, 70, 0.58)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leisurely}
              isBlog={false}
              title="Leisurely Self Discipline"
              description="In order to improve the actual effect of self-discipline software, we creatively combine the game part and self-discipline punch in part, and realize lasting self-management under the external driving of moderate interest and game."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={old}
              isBlog={false}
              title="“Worry-free” Rescue System"
              description="description here"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar}
              isBlog={false}
              title="AR Sandbox"
              description="description here"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
