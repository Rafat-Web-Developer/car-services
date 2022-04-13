import React from "react";

const SocialLink = () => {
  return (
    <div>
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="bg-primary w-25"></div>
        <p className="text-primary mt-3 px-3 ">OR</p>
        <div style={{ height: "1px" }} className="bg-primary w-25"></div>
      </div>
      <div className="my-3">
        <button className="btn btn-success w-100 fw-bold mb-2">Google</button>
        <button className="btn btn-primary w-100 fw-bold mb-2">Facebook</button>
        <button className="btn btn-dark w-100 fw-bold mb-2">Github</button>
      </div>
    </div>
  );
};

export default SocialLink;
