import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, name, description, price } = service;
  const navigate = useNavigate();

  const handleServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="badge bg-danger fs-6 w-50">
            Price : {price}
          </Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => handleServiceDetails(_id)}
          >
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
