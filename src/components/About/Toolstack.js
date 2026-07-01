import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroid,
  SiCodesandbox,
  SiVercel,
  SiReplit,
  SiWindows,
  SiVisualstudio,
  SiGnubash,
} from "react-icons/si";
import { FaFolder, FaCode } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode color="#007ACC" />, name: "VS Code" },
    { icon: <SiAndroid color="#3DDC84" />, name: "Android Studio" },
    { icon: <SiVercel color="#FFFFFF" />, name: "Vercel" },
    { icon: <SiCodesandbox color="#FFFFFF" />, name: "CodeSandbox" },
    { icon: <SiReplit color="#F26207" />, name: "Replit" },
    { icon: <SiWindows color="#0078D6" />, name: "Windows" },
    { icon: <SiGnubash color="#4AF626" />, name: "Termux" },
    { icon: <SiVisualstudio color="#5C2D91" />, name: "Visual Studio" },
    { icon: <FaCode color="#F0AD4E" />, name: "apktool" },
    { icon: <FaFolder color="#FFD43B" />, name: "mt-manager" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
          <div className="tech-icons">
            {tool.icon}
            <span className="tech-name">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
