import React from "react";
import Coin from "./Coin";

const Header = ({ coin }) => {
  return (
    <nav>
      <div className="w-full mt-6 flex justify-between items-center">
        <div>
          <img className="w-20" src="assets/logo-footer.png" alt="" />
        </div>
        <div className="flex gap-8 items-center">
          <p> Home</p>
          <p>Fixture</p>
          <p>Sehedules</p>

          <Coin coin={coin} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
