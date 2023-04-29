import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";


function Scanner() {
  const [imgPreview, setImgPreview] = useState("");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        setImgPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="col-md-12 p-2 bg-dark text-center text-light">
        <navbar>
          <h1>Scan Your Certificates</h1>
        </navbar>
      </div>
      <h3
        className="title"
        style={{
          backgroundColor: "darkcyan",
          marginBottom: "20px",
          color: "aliceblue",
          textAlign: "center",
          padding: "10px",
        }}
      >
        Choose a picture Or Take a picture for Authentication
      </h3>
      <form>
        <div className="holder">
          <img id="imgPreview" src={imgPreview} alt="pic" />
        </div>
        <input
          type="file"
          name="photograph"
          id="photo"
          required={true}
          onChange={handlePhotoChange}
        />
      </form>
      <style>
        {`
          .holder {
            height: 300px;
            width: 300px;
            border: 2px solid black;
          }
          img {
            max-width: 300px;
            max-height: 300px;
            min-width: 300px;
            min-height: 300px;
          }
          input[type="file"] {
            margin-top: 5px;
          }
          .heading {
            font-family: Montserrat;
            font-size: 45px;
            color: green;
          }
        `}
      </style>
    </>
  );
}

export default Scanner;
