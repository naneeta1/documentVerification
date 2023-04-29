import React from "react";


function issueCertificate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your Digital Signature has been created.");
  };

  return (
    <div>
      <div className="col-md-12 p-2 bg-dark text-center text-light">
        <navbar>
          <h1>Generate Your Digital Certificates</h1>
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
        Generate a digital certificate, You will be notified on Blockchain platform
      </h3>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="program">Program</label>
          <input
            type="text"
            id="program"
            name="program"
            placeholder="Your Program.."
          />

          <label htmlFor="Snum">Serial Number</label>
          <input
            type="text"
            id="Snum"
            name="Snum"
            placeholder="Your Serial Number.."
          />

          <label htmlFor="ins">Institute</label>
          <input
            type="text"
            id="ins"
            name="ins"
            placeholder="Your Institute.."
          />

          <input
            style={{
              marginLeft: "34%",
              marginRight: "30%",
              width: "30%",
              padding: "5px",
              height: "30px",
              border: "none",
              fontWeight: "600",
              color: "aliceblue",
              backgroundColor: "darkcyan",
              borderRadius: "10px",
            }}
            id="submitForm"
            type="submit"
            value="Generate"
          />
        </form>
      </div>
    </div>
  );
}

export default issueCertificate;
