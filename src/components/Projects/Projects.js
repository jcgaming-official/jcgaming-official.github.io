import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LoLSkins from "../../Assets/Projects/LolSkins.png";

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
              isBlog={false}
              title="Robdroid Rejoiner"
              description="An automated Roblox rejoiner, system optimizer, and health-monitor for Android devices running in Termux. Leverages ADB to automatically relaunch Roblox on crash, perform RAM optimization, and send real-time Discord notifications via Webhooks."
              ghLink="https://github.com/jcgaming-official/robdroid-rejoiner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Grow a Garden 2 Predictor"
              description="A premium, responsive dashboard for predicting seed and gear stock restocks, weather schedules, and tracking the rarest pets in the Roblox game Grow a Garden 2. Features a dynamic sky animation matching the server day/night cycle and advanced sorting."
              ghLink="https://github.com/jcgaming-official/GAG-2-Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Senate Run Cheat Menu"
              description="A lightweight, responsive client-side overlay cheat menu and bookmarklet for the Phaser.js-based game Senate Run. Features include God Mode, variable game physics speed controls, dynamic score multipliers, and custom background rendering."
              ghLink="https://github.com/jcgaming-official/senate-run-cheat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project Sekai Movie Code Generator"
              description="A Python script designed for the game Project Sekai: Colorful Stage! (EN/Global Server) that generates random codes for the movie COLORFUL STAGE! THE MOVIE: A MIKU WHO CAN'T SING and automatically redeems them once a working code is found, saving them to a text file."
              ghLink="https://github.com/jcgaming-official/pjsk-en-movie-code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TMS Deped Makati"
              description="An administrative Task Management System (TMS) developed for DepEd Makati using Visual Studio 2022 and C# to manage, track, and assign institutional tasks within the division office."
              ghLink="https://github.com/jcgaming-official/TMS-Deped-Makati"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="QMS DEPED MAKATI"
              description="A Queue Management System (QMS) developed for the DepEd Makati Division Office to streamline queuing operations and division office services. Built using C#."
              ghLink="https://github.com/jcgaming-official/QMS-DEPED-MAKATI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LoLSkins}
              isBlog={false}
              title="LolSkins"
              description="My first project that can execute a list of skins on League of Legends by typing the name of the champion"
              ghLink="https://github.com/jcgaming-official/LoLSkins"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
