import React from "react";
import farari from "../../../asset/image/farari1.png";

const Banner = () => {
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={farari} className="max-w-sm rounded-lg  " alt="" />
          <div>
            <h1 className="text-5xl font-semibold  ">
              Easy and fast way to <br />
              Buy and Sell Car On your platform
            </h1>
            <p className="py-6">
              We will help you sell & buy your dream car here easily and quickly
              that is r
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
