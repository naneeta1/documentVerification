import React from "react";
import Card from 'react-bootstrap/Card';

function Activities() {
  return (
    <>
      <div className="col-md-12 p-2 bg-dark text-center text-light">
        <h1>Activities of Students</h1>
      </div>
     
      <div id="mySidenav" className="sidenav d-flex flex-wrap nowrap mt-4">
        <Card style={{ width: '17.5rem' ,backgroundColor:'red',height:'100px' }}>
          <Card.Body>
            <Card.Title >3 Certificates scanned</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '17.5rem',backgroundColor:'blue' }}>
          <Card.Body>
            <Card.Title>18 NFTs generated</Card.Title>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '17.5rem',backgroundColor:'green' }}>
          <Card.Body>
            <Card.Title>6 Certificates Issued</Card.Title>
           
          </Card.Body>
        </Card>
        <Card style={{ width: '17.5rem' ,backgroundColor:'gray'}}>
          <Card.Body>
            <Card.Title>Scanned by Suhana</Card.Title>
            
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Activities;
