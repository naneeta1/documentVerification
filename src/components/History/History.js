import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Activities from './activities';
import StudentsData from './StudentsData';

function History() {
 
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        </Container>
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 style={{ paddingBottom: 10, marginTop:'-150px' }} className="heading">
              Digital History of your data, certificates and signature{" "}
              </h1>
              <StudentsData />
            <Activities />
            </Col>
           
          </Row>
        </Container>
    </section>
  );
}

export default History;
