import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import MetaMask from "../../Assets/download.png";
import Home2 from "./Home2";
import Type from "./Type";
import Card from "../Card";
import OurServices from "./OurServices";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <div style={{ padding:30, textAlign: "left" }}>
                <Type />
              </div>

            <Row>
            <Col md={5} className="home-header">
            <Button
              variant="primary"
              target="_blank"
              style={{backgroundColor:"purple" , padding:10, marginLeft:40 }}> Connect to Wallet
            </Button>
              <img src={MetaMask} alt="MetaMask" style={{height:45, marginLeft:10}} />
            </Col>
            </Row>
            

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
      </Container>
      <OurServices />
    </section>
  );
}

export default Home;
