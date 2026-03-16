import React from "react";
import dawnlods from "../../assets/icon-downloads.png";
import rex from "../../assets/icon-ratings.png";
const Card = ({ card }) => {
  const { image, title, downloads, ratingAvg } = card;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="bg-base-200">
          <img className=" h-70 w-4/5 mx-auto " src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className=" flex text-lg">
            <p className=" flex items-center  gap-2 text-green-400">
              <img className="h-5 w-5 " src={dawnlods} alt="" />{" "}
              {downloads / 1000000}M
            </p>
            <p className=" flex items-center justify-end  gap-2 text-orange-400">
              <img className="h-5 w-5 " src={rex} alt="" /> {ratingAvg}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
