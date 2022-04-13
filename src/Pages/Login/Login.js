import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLink from "../Shared/SocialLink/SocialLink";

const Login = () => {
  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-primary fw-bold text-white fs-5">
        Login
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
          <p className="my-3">
            Create a new account{" "}
            <Link
              className="fw-bold text-primary"
              style={{ textDecoration: "none" }}
              to="/signup"
            >
              Sign up
            </Link>
          </p>
        </Form>
        <SocialLink></SocialLink>
      </Card.Body>
    </Card>
  );
};

export default Login;
