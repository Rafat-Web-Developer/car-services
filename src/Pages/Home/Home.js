import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import Experts from "./Experts/Experts";
import Services from "./Services/Services";

const Home = () => {
  return (
    <Container className="my-5">
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </Container>
  );
};

export default Home;
