import React from "react";
import { Container, Table } from "react-bootstrap";

const AllServices = () => {
  return (
    <Container className="my-5">
      <Table striped bordered hover size="lg" variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Service Image</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AllServices;
