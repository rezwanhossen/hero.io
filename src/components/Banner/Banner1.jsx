import React from "react";
import hero from "../../assets/hero.png";
const Banner1 = () => {
  return (
    <div>
      <div>
        <div>
          <img className="mx-auto h-3/6" src={hero} alt="" />
          <div className="bg-linear-to-r from-[#632EE3] to-[#9f62f2] p-6">
            <h1 className=" text-4xl font-bold text-white text-center py-6">
              Trusted by Millions, Built for You
            </h1>
            <div className="  md:flex gap-3 justify-center text-white ">
              <div className=" text-center  space-y-2 p-3">
                <p className="text-gray-300">Total Downloads</p>
                <h3 className=" text-5xl font-bold  ">29.6M</h3>
                <p className="text-gray-300">21% more than last month</p>
              </div>
              <div className=" text-center space-y-2 p-3">
                <p className="text-gray-300">Total Reviews</p>
                <h3 className=" text-5xl font-bold">695K</h3>
                <p className="text-gray-300">45% more than last month</p>
              </div>
              <div className=" text-center  space-y-2 p-3">
                <p className="text-gray-300">Active Apps</p>
                <h3 className=" text-5xl font-bold  ">150 +</h3>
                <p className="text-gray-300">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
