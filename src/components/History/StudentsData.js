import React from 'react';

function StudentsData() {
  return (
    <div>
      <div className="col-md-12 p-2 bg-dark text-center text-light">
        <h1>Students Data</h1>
      </div>

      <div style={{ marginTop: '30px', marginLeft: '20px' }}>
        <table className="table text-white">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Degree</th>
              <th>Institution</th>
              <th>SerialNo</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jill</td>
              <td>CS</td>
              <td>SIBA</td>
              <td>111-21A</td>
              <td>jill@gmail.com</td>
              <td>095368832</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Eve</td>
              <td>BBA</td>
              <td>NUST</td>
              <td>112-21A</td>
              <td>ave@gmail.com</td>
              <td>034567821</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Adam</td>
              <td>EE</td>
              <td>ZABX</td>
              <td>113-21A</td>
              <td>adam12@gmail.com</td>
              <td>067215632</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Tara</td>
              <td>AF</td>
              <td>ZABX</td>
              <td>114-21A</td>
              <td>tara@gmail.com</td>
              <td>0912560042</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsData;
