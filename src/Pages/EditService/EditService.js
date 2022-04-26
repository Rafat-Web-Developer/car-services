import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditService = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});

  const serviceNameRef = useRef();
  const serviceDescriptionRef = useRef();
  const servicePriceRef = useRef();
  const serviceImagePathRef = useRef();

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-info fw-bold text-white fs-5">
        Edit Service Form
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicServiceName">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              ref={serviceNameRef}
              type="text"
              placeholder="Enter service name"
              value={serviceDetails.name}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <textarea
              ref={serviceDescriptionRef}
              type="text"
              className="form-control"
              placeholder="Enter description"
              value={serviceDetails.description}
              required
            ></textarea>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>

            <Form.Control
              ref={servicePriceRef}
              type="number"
              placeholder="Enter price"
              value={serviceDetails.price}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImagePath">
            <Form.Label>Image Path</Form.Label>
            <Form.Control
              ref={serviceImagePathRef}
              type="text"
              placeholder="Enter Image Path"
              value={serviceDetails.img}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Update Service
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditService;
