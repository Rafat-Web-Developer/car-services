import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLink = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGitHubSignIn = () => {};

  return (
    <div>
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="bg-primary w-25"></div>
        <p className="text-primary mt-3 px-3 ">OR</p>
        <div style={{ height: "1px" }} className="bg-primary w-25"></div>
      </div>
      {error && <p className="text-danger my-1">{error.message}</p>}
      <div className="my-3">
        <button
          className="btn btn-success w-100 fw-bold mb-2"
          onClick={handleGoogleSignIn}
        >
          Google
        </button>
        <button className="btn btn-primary w-100 fw-bold mb-2">Facebook</button>
        <button
          className="btn btn-dark w-100 fw-bold mb-2"
          onClick={handleGitHubSignIn}
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
