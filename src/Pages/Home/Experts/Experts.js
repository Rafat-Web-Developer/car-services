import React, { useState } from "react";
import Expert from "../Expert/Expert";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import { Row } from "react-bootstrap";

const experts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Chris Rock", img: expert2 },
  { id: 3, name: "Dwayne Rock", img: expert3 },
  { id: 4, name: "Messy Vai", img: expert4 },
  { id: 5, name: "Ronaldo Bro", img: expert5 },
  { id: 6, name: "Stachy Jhonson", img: expert6 },
];

const Experts = () => {
  return (
    <section id="experts">
      <h2 className="text-center py-5 text-primary">Experts</h2>
      <Row xs={1} md={3} className="g-4">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </Row>
    </section>
  );
};

export default Experts;
