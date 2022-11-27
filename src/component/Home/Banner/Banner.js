import React from "react";
import farari from "../../../asset/image/farari1.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={farari} className="rounded-lg" alt="" />
          <div>
            <h1 className="text-2xl font-semibold lg:text-4xl  lg:leading-normal lg:font-[600]">
              Easy and fast way to <br />
              Buy and Sell Car On In platform
            </h1>
            <p className="py-6 text-xl">
              We will help you sell & buy your dream car here easily and quickly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
