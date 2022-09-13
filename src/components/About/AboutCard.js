import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" ,color:"rgb(31,31,31)"}}>
            Hi Everyone, I am <span className="orange">Lucy Ling </span>
          </p>

          <p style={{ color: "rgb(31,31,31)" }}>
            "moto here"{" "}
          </p>
          <footer className="blockquote-footer"> name</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
