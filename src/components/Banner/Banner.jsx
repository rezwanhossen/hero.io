import React from "react";
import ban1 from "../../assets/ban-b-1.jpg";
import ban2 from "../../assets/ban-b-2.jpg";
import hero from "../../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content text-center py-8 md:py-15 ">
          <div className=" space-y-8">
            <div>
              <h1 className="text-4xl md:text-7xl font-bold">
                We Build <br />
                <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text p-2 text-transparent ">
                  Productive
                </span>
                Apps
              </h1>
              <p className="py-6">
                At HERO.IO , we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting <br /> Our goal is to
                turn your ideas into digital experiences that truly make an
                impact.
              </p>
              <div className=" flex items-center gap-6 justify-center">
                <button className="btn btn-lg  ">
                  <img src={ban1} alt="" /> Google Play
                </button>
                <button className="btn btn-lg ">
                  <img src={ban2} alt="" /> App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
