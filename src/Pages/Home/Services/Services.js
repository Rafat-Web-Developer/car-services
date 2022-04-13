import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Row xs={1} md={3} className="g-4">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </Row>
  );
};

export default Services;
