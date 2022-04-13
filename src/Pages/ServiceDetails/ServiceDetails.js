import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div className="text-center py-5">
      <h1>Service Details {serviceId}</h1>
      <Link to="/checkout" className="btn btn-primary text-decoration-none">
        Checkout
      </Link>
    </div>
  );
};

export default ServiceDetails;
