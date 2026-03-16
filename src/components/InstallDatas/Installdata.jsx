import React from "react";
import daw from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";

const Installdata = ({ install }) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center bg-base-200 rounded-md p-5">
        <div className="flex  gap-3 ">
          <img
            className=" h-18 md:h-25 w-18 md:w-25"
            src={install.image}
            alt=""
          />
          <div className=" space-y-3 ">
            <h1 className=" text-xl font-bold">{install.title}</h1>
            <div className="flex gap-3 text-lg ">
              <p className=" flex items-center  gap-2 text-green-400">
                <img className="h-5 w-5 " src={daw} alt="" />{" "}
                {install.downloads / 1000000}M
              </p>
              <p className=" flex items-center  gap-2 text-orange-400">
                <img className="h-5 w-5 " src={star} alt="" />{" "}
                {install.ratingAvg}
              </p>
              <p className=" flex items-center text-gray-400  gap-2">
                {install.size}MB
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn md:btn-lg bg-[#00D390] text-white">
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Installdata;
