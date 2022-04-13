import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { img, name } = expert;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" className="w-100">
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
