import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" className="w-100">
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
