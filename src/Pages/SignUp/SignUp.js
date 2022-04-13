import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLink from "../Shared/SocialLink/SocialLink";
import auth from "../../firebase.init";

const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-primary fw-bold text-white fs-5">
        Sign Up
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          {loading && <p className="text-primary fw-bold">Loading...</p>}
          {error && <p className="text-danger fw-bold">{error.message}</p>}
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
        <SocialLink></SocialLink>
      </Card.Body>
    </Card>
  );
};

export default SignUp;
