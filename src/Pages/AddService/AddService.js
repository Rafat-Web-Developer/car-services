import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const AddService = () => {
  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-primary fw-bold text-white fs-5">
        Add Service Form
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicServiceName">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter service name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImagePath">
            <Form.Label>Image Path</Form.Label>
            <Form.Control type="text" placeholder="Enter Image Path" required />
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
