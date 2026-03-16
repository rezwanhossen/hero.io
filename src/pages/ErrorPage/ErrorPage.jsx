import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className=" w-4/6 mx-auto my-5">
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={error} alt="notfound" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className=" text-3xl font-bold">Oops, page not found!</h2>
          <p>The page you are looking for is not available.</p>
          <div className="card-actions">
            <Link
              to="/"
              className="btn btn-lg   bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-lg text-white "
            >
              <FaArrowCircleLeft /> Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
