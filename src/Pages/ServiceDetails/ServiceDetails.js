import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [serviceDetails, setServiceDetails] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  return (
    <Container className="py-5">
      <Card className="w-75 mx-auto">
        <Card.Img variant="top" src={serviceDetails.img} />
        <Card.Body className="text-center">
          <Card.Title className="text-primary fw-bold my-3">
            {serviceDetails.name}
          </Card.Title>
          <p className="badge bg-danger fs-4">{serviceDetails.price}</p>
          <Card.Text className="text-muted">
            {serviceDetails.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link
            to="/checkout"
            className="w-100 btn btn-primary text-decoration-none"
          >
            Checkout
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ServiceDetails;
