import React from "react";

const Banner = ({ coin, setCoin }) => {
  return (
    <div
      className="mx-auto w-full mb-12 text-white rounded-2xl flex flex-col gap-4 items-center px-4 py-10"
      style={{
        background: "url(assets/bg-shadow.png)",
        backgroundSize: 1600,
        backgroundPosition: "right",
        backgroundColor: "black",
      }}
    >
      <div className="flex justify-center">
        <img className="w-40" src="assets/banner-main.png" alt="" />
      </div>
      <h1 className="text-center text-4xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h2 className="text-xl font-bold text-center">
        Beyond Boundaries Beyond Limits
      </h2>
      <div className="border rounded-2xl p-1 border-[#E7FE29] mb-4">
        <button
          className="px-3 py-2 bg-[#E7FE29] text-black font-bold rounded-xl"
          onClick={() => setCoin(coin + 500000)}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
