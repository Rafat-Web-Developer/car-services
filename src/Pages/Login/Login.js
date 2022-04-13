import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLink from "../Shared/SocialLink/SocialLink";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <Card className="w-50 mx-auto my-5 shadow-lg">
      <Card.Header className="bg-primary fw-bold text-white fs-5">
        Login
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleLogin}>
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
