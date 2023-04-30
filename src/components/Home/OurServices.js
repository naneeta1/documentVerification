import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import Card from "../Card";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function OurServices() {

  return (
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Our <span className="purple"> Services </span> 
            </h1>
    <Container>
      <Row>
        <Col md={4} style={{height:'150px'}}>
          <Card
            imageSource={require('../../Assets/qr.png')}
            buttonText={'Scan Certificate'}
            buttonLink={'/scan-certificate'}
            />
        </Col>
        <Col md={4}>
          <Card
            imageSource={require('../../Assets/dg_cer.PNG')}
            buttonText={'Issue Certificate'}
            buttonLink={'/issue-certificate'}
          />
        </Col>
        <Col md={4}>
          <Card
            imageSource={require('../../Assets/NFTs.PNG')}
            buttonText={'Generate Certificate'}
            buttonLink={'/Generate-NFT'}
          />
        </Col>
      </Row>
    </Container> 
         </Col>
         
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/depeeka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/depeekaghai/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default OurServices;
