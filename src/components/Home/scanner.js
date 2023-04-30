import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useRef } from "react";

function Scanner() {
  const [imgPreview, setImgPreview] = useState("");
  const fileInputRef = useRef();
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
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{marginBottom:'150px'}}>
      <div className="holder" style={{width:'250px', height:'200px', marginLeft:'100px' ,border:'2px solid purple', marginBottom:'30px'}}>
        <img id="imgPreview" src={imgPreview} alt="pic" style={{width:'400px', height:'400px'}}/>
      </div>
      <Button onClick={handleFileInputClick} style={{marginLeft:'170px'}}>Select file</Button>
      <input
          ref={fileInputRef}
          type="file"
        
          onChange={handlePhotoChange}
          style={{ display: "none" }}
        />
    </div>
  );
}

export default Scanner;
