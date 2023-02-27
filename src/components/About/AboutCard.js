import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there!, I am <span className="purple">John Carl Quieta </span>
            from <span className="purple"> Philippines.</span>
            <br />I am a student pursuing CS and BSIT.
            <br />
            <br />
            Apart from coding and studying, I am currently enrolled paid courses
            on
            <span className="purple"> Udemy </span>
            to improve my skills and knowledge
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
