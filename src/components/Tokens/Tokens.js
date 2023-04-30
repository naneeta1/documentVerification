import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import 'bootstrap/dist/css/bootstrap.min.css';


function RewardingTokens() {
  const [total, setTotal] = useState("");
  const [scanningEarn, setScanningEarn] = useState("");
  const [digitalEarn, setDigitalEarn] = useState("");

  const handleTotalChange = (event) => {
    setTotal(event.target.value);
  };

  const handleScanningEarnChange = (event) => {
    setScanningEarn(event.target.value);
  };

  const handleDigitalEarnChange = (event) => {
    setDigitalEarn(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Total: ${total}, Scanning Earn: ${scanningEarn}, Digital Earn: ${digitalEarn}`);
  };
 
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        </Container>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
              Generate Token{" "}
              </h1>
              <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="total">Total:</label>
        <input
          type="text"
          id="total"
          name="total"
          value={total}
          onChange={handleTotalChange}
        />

        <label htmlFor="se">Scanning Earn:</label>
        <input
          type="number"
          id="se"
          name="se"
          value={scanningEarn}
          onChange={handleScanningEarnChange}
        />

        <label htmlFor="de">Digital Earn:</label>
        <input
          type="number"
          id="de"
          name="de"
          value={digitalEarn}
          onChange={handleDigitalEarnChange}
        />

        <Button type="submit" style={{marginTop:'20px', marginLeft:'250px'}}>Submit</Button>
      </form>
    </div>

    
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

export default RewardingTokens;











