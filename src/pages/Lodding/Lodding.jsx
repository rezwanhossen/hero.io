import React from "react";
import "./Lodding.css";
import logo from "../../assets/logo.png";
const Lodding = () => {
  return (
    <div className=" text-gray-600 font-bold text-center w-8/12 mx-auto min-h-10 p-50 ">
      <h2 className=" text-5xl  grow-word">
        l{" "}
        <img className="loading loading-spinner loading-xl" src={logo} alt="" />
        dding....
      </h2>
    </div>
  );
};

export default Lodding;
