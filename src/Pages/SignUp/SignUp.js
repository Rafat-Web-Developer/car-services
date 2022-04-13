import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-primary fw-bold text-white fs-5">
        Sign Up
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>
          <p className="my-3">
            Already have an account{" "}
            <Link
              className="fw-bold text-primary"
              style={{ textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUp;
