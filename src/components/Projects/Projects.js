import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="Small Buisness Accounting"
              description="Custom accounting software that generates invoices and proposals tailored to client needs. Built using React, Node.js, and MySql"
              ghLink="https://github.com/trv893/small-business-accounting-react"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sum-It-Up"
              description="Web application that summarizes text using machine learning and natural language processing. Built using React, Node.Js MongoDb and Graphql"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Homemade"
              description="Website which allows users to enter the ingredients they have available in their kitchen and returns a variety of recipies that utilizes those ingredients. Built using Tailwind, Express.js, and Mysql"
              ghLink="https://github.com/SherrickM/homemade"
              demoLink="#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
