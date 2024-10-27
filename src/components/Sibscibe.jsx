import React from "react";

const Sibscibe = () => {
  return (
    <div className="absolute -top-40 left-0 text-black w-full px-4 flex justify-center">
      <div className="border border-white w-full h-80 max-w-5xl rounded-2xl p-3">
        <div
          style={{
            background: "url(assets/bg-shadow.png)",
            backgroundSize: "cover",
            backgroundColor: "white",
          }}
          className="w-full h-full rounded-xl flex flex-col justify-center items-center gap-3 border"
        >
          <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
          <p className="text-sm">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-4">
            <input
              className="w-64 py-2 px-4 rounded-xl border"
              placeholder="Enter your email"
            />

            <img
              src="assets/subsribe-button-2.png"
              className="cursor-pointer rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sibscibe;
