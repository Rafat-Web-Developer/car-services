import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import { toast } from "react-toastify";

const AllServices = () => {
  const [services, setServices] = useServices();
  const navigate = useNavigate();

  const handleShowService = (id) => {
    navigate(`/service/${id}`);
  };

  const handleEditService = (id) => {
    navigate(`/editService/${id}`);
  };

  const handleDeleteService = (id) => {
    console.log(id);
    const url = `http://localhost:5000/service/${id}`;
    console.log(url);
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    const restServices = services.filter((service) => service._id !== id);
    setServices(restServices);
    toast("Service delete successfully!! Alhamdulillah");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center display-6 my-5 fw-bold text-primary">
        All Services
      </h2>
      <Table striped bordered hover size="lg" variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Service Image</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service._id}>
              <td>{index + 1}</td>
              <td className="text-center">
                <img
                  src={service.img}
                  alt="service_img"
                  className="img-thumbnail"
                  width="100"
                  height="100"
                />
              </td>
              <td>{service.name}</td>
              <td>{service.description.slice(0, 30)}...</td>
              <td>{service.price}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleShowService(service?._id)}
                >
                  Show
                </Button>
                <Button
                  className="ms-1"
                  variant="info"
                  onClick={() => handleEditService(service?._id)}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteService(service?._id)}
                  className="ms-1"
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllServices;
