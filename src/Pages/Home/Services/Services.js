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
    <section>
      <h3 className="text-center py-5 text-primary">Our Services</h3>
      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </section>
  );
};

export default Services;
