import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";

const AddService = () => {
  const serviceNameRef = useRef();
  const serviceDescriptionRef = useRef();
  const servicePriceRef = useRef();
  const serviceImagePathRef = useRef();

  const handleAddService = (event) => {
    event.preventDefault();
    const name = serviceNameRef.current.value;
    const description = serviceDescriptionRef.current.value;
    const price = servicePriceRef.current.value;
    const imagePath = serviceImagePathRef.current.value;
    const data = { name, description, price, imagePath };

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-primary fw-bold text-white fs-5">
        Add Service Form
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleAddService}>
          <Form.Group className="mb-3" controlId="formBasicServiceName">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              ref={serviceNameRef}
              type="text"
              placeholder="Enter service name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              ref={serviceDescriptionRef}
              type="text"
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              ref={servicePriceRef}
              type="number"
              placeholder="Enter price"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImagePath">
            <Form.Label>Image Path</Form.Label>
            <Form.Control
              ref={serviceImagePathRef}
              type="text"
              placeholder="Enter Image Path"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Add Service
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddService;
