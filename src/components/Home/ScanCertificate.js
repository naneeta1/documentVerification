import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import MetaMask from "../../Assets/download.png";
import Home2 from "./Home2";
import Type from "./Type";
import Card from "../Card";
import OurServices from "./OurServices";
import Scanner from "./scanner";

function ScanCertificate() {
  return (
    <Scanner />
  );
}

export default ScanCertificate;
