import React from "react";
import notfound from "../../assets/App-Error.png";
import { Link } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";

const Notfound = () => {
  return (
    <div className=" w-4/6 mx-auto">
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={notfound} alt="notfound" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className=" text-3xl font-bold">OPPS!! APP NOT FOUND</h2>
          <p>
            The App you are requesting is not found on our system. please try
            another apps.
          </p>
          <div className="card-actions">
            <Link
              to="/apps"
              className="btn btn-lg   bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-lg text-white "
            >
              <FaArrowCircleLeft /> Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
