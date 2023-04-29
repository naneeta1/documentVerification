import React, { useState } from "react";


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
    <div className="container">
      <h1 className="title">TOKEN REWARDS</h1>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RewardingTokens;
