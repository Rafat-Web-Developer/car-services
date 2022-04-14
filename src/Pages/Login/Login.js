import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLink from "../Shared/SocialLink/SocialLink";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("Send email for reset your password");
    }
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
              className="fw-bold text-primary text-decoration-none"
              to="/signup"
            >
              Sign up
            </Link>
          </p>
          <ToastContainer />
          <p className="my-3">
            <button
              className="ms-2 btn btn-sm btn-outline-primary"
              onClick={handleResetPassword}
            >
              Forgot Password
            </button>
          </p>
        </Form>
        <SocialLink></SocialLink>
      </Card.Body>
    </Card>
  );
};

export default Login;
