import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function GenerateNFT() {
  const [previewSrc, setPreviewSrc] = useState('');

  function handlePhotoChange(event) {
    const file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        setPreviewSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <div className="col-md-12 p-2 bg-dark text-center text-light">
        <h1>Generate your NFT</h1>
      </div>
      <h3
        className="title"
        style={{
          backgroundColor: 'darkcyan',
          marginBottom: '10px',
          color: 'aliceblue',
          textAlign: 'center',
          padding: '5px',
        }}
      >
        A digital certificate of ownership and authenticity in Blockchain terminology
      </h3>
      <form>
        <div className="holder">
          <img id="imgPreview" src={previewSrc} alt="pic" />
        </div>
        <input
          type="file"
          name="photograph"
          id="photo"
          required={true}
          onChange={handlePhotoChange}
        />
        {/* <input
          style={{
            alignSelf: 'flex-start',
            width: '30%',
            padding: '5px',
            height: '30px',
            border: 'none',
            fontWeight: '600',
            color: 'aliceblue',
            backgroundColor: 'darkcyan',
            borderRadius: '10px',
          }}
          id="submitForm"
          type="button"
          value="Generate"
        /> */}
      </form>
    </div>
  );
}

export default GenerateNFT;
