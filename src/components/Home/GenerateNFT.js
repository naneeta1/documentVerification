import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

import 'bootstrap/dist/css/bootstrap.min.css';
import Scanner from './scanner';

function GenerateNFT() {
 
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        </Container>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
              Generate your NFT{" "}
              </h1>
              <h3   className="title" >
        A digital certificate of ownership and authenticity in Blockchain terminology
      </h3>

      <Scanner />
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      
 
    </section>
  );
}

export default GenerateNFT;













