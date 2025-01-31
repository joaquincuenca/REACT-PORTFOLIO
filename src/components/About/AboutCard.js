import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm Joaquin Isaac E. Cuenca, a MERN Stack Developer and freelancer passionate about building scalable and user-friendly web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in full-stack development, API integrations, and UI/UX optimization.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
