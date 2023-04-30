import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import OurServices from "./OurServices";

function IssueCertificate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your Digital Signature has been created.");
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
                Generate Your Digital Certificates{" "}
              </h1>

              <div className="form-container" >
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Your name.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="program">Program</label>
                    <input
                      type="text"
                      id="program"
                      name="program"
                      placeholder="Your Program.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Snum">Serial Number</label>
                    <input
                      type="text"
                      id="Snum"
                      name="Snum"
                      placeholder="Your Serial Number.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group" style={{  marginBottom: '20px'}}>
                    <label htmlFor="ins">Institute</label>
                    <input
                      type="text"
                      id="ins"
                      name="ins"
                      placeholder="Your Institute.."
                      className="form-control"
                    />
                  </div>
                  <Button
                    id="submitForm"
                    type="submit"
                    value="Generate"
                    className="btn btn-primary"
                  >
                    Generate
                  </Button>
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

export default IssueCertificate;

// CSS styles







