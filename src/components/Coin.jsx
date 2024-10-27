import React from "react";

const Coin = ({ coin }) => {
  return (
    <button className="border h-8 px-2 rounded-lg text-lg font-semibold flex items-center gap-1">
      <span> {coin}</span>Coin <img src="assets/currency.png" alt="coin" />
    </button>
  );
};

export default Coin;
