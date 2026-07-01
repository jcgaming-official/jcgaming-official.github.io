import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiLua,
  SiOpencv,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiJava color="#ED8B00" />, name: "Java" },
    { icon: <DiPython color="#3776AB" />, name: "Python" },
    { icon: <DiJavascript1 color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiLua color="#000080" />, name: "Lua" },
    { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { icon: <DiGit color="#F05032" />, name: "Git" },
    { icon: <DiNodejs color="#339933" />, name: "Node.Js" },
    { icon: <SiOpencv color="#5C3EE6" />, name: "OpenCV" },
    { icon: <SiCsharp color="#239120" />, name: "C#" },
    { icon: <SiDotnet color="#512BD4" />, name: ".NET" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
          <div className="tech-icons">
            {tech.icon}
            <span className="tech-name">{tech.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
