import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <section id="services">
      <h2 className="text-center py-5 text-primary">Our Services</h2>
      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </section>
  );
};

export default Services;
