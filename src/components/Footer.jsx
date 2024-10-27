import React from "react";
import Sibscibe from "./Sibscibe";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      <div className="mx-auto max-w-7xl">
        <Sibscibe />
        <img
          className="w-20 mx-auto mt-48"
          src="assets/logo-footer.png"
          alt=""
        />
        <div className="w-11/12 mx-auto mt-9 flex justify-between">
          <div className="">
            <h2 className="text-xl font-bold text-white">About Us</h2>
            <p className="text-gray-400">
              We are a passionate team <br />
              dedicated to providing the best <br />
              services to our customers.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <li className="text-gray-500">Home</li>
            <li className="text-gray-500">services</li>
            <li className="text-gray-500">About</li>
            <li className="text-gray-500">Contact</li>
          </div>
          <div>
            <h2 className="text-white font-bold mb-3">Subscribe</h2>
            <p className="text-gray-500">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div className="mt-5 flex">
              <input
                className="w-52 py-2 px-4 rounded-xl"
                placeholder="Enter your email"
              />

              <img
                src="assets/subsribe-button.png"
                className="-ml-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="border-t border-gray-700 mt-14"></p>
      <p className="text-gray-600 text-center bg-black mb-6 mt-5">
        @2024 Your Company All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
