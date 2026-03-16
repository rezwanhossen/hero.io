import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import daw from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import Chart from "../Chart/Chart";
import { addLocalStorag } from "../../utility/localStorag";
import { toast } from "react-toastify";
const CardDetails = () => {
  const { id } = useParams();
  const [install, setinstall] = useState(false);

  const datas = useLoaderData();
  const singledata = datas.find((data) => data.id === parseInt(id));

  const {
    image,
    title,
    downloads,
    ratingAvg,
    companyName,
    description,
    reviews,
    ratings,
    size,
  } = singledata;

  const handelDawnlods = (id) => {
    addLocalStorag(id);
    setinstall(true);
    toast("App install completed !");
  };

  return (
    <div className="my-5">
      <div className="my-5">
        <div className="md:flex gap-10 border-b  p-7">
          <img
            src={image}
            className=" flex-1 w-full md:w-82 h-82 rounded-lg shadow-xl"
          />
          <div className=" flex-3 ">
            <div className=" border-b border-dashed space-y-2 p-5 ">
              <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
              <h2 className=" text-lg  text-gray-400">
                Developed by
                <span className=" ml-2 text-[#632ee3]">{companyName}</span>
              </h2>
            </div>
            <div className=" flex justify-normal gap-15 my-5">
              <div className=" space-y-2">
                <img src={daw} alt="dawnlod" />
                <p className="text-gray-400">Downloads</p>
                <h2 className="text-3xl font-bold">{downloads / 1000000}M </h2>
              </div>
              <div className=" space-y-2">
                <img src={rating} alt="Reatig" />
                <p className="text-gray-400">Average Ratings</p>
                <h2 className="text-3xl font-bold">{ratingAvg} </h2>
              </div>
              <div className=" space-y-2">
                <img src={review} alt="review" />
                <p className="text-gray-400">Total Reviews</p>
                <h2 className="text-3xl font-bold">{reviews}K </h2>
              </div>
            </div>
            <button
              disabled={install}
              onClick={() => handelDawnlods(id)}
              className="btn btn-lg bg-[#00D390] text-white"
            >
              {install ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className=" my-5">
        <Chart ratings={ratings} />
      </div>
      <div>
        <h2 className="text-xl font-bold">Description</h2>
        <p>{description} </p>
      </div>
    </div>
  );
};

export default CardDetails;
