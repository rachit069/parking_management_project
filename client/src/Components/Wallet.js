import React, { useState } from "react";
import "../Styles/Wallet.css";

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  return (
    <div>
      <div>
        <h1>Wallet</h1>
      </div>
      <div>
        <h3>Total Balance: {balance}</h3>
      </div>
      <div>
        <div>
          <button onClick={() => setBalance((prevBalance) => prevBalance + 300)}>Add 300</button>
          <button onClick={() => setBalance((prevBalance) => prevBalance + 500)}>Add 500</button>
          <button onClick={() => setBalance((prevBalance) => prevBalance + 1000)}>Add 1000</button>
          <button>Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
