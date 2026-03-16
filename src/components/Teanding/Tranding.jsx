import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../Card/Card";

const Tranding = ({ data }) => {
  return (
    <div className=" mb-5">
      <div className="p-5 space-y-1 text-center">
        <h1 className="text-5xl font-bold ">Trending Apps</h1>
        <p className="text-gray-400 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.slice(0, 8).map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>

      <p className="my-6 text-center ">
        <Link
          to="/apps"
          className=" btn btn-lg   bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-lg text-white"
        >
          See All
        </Link>
      </p>
    </div>
  );
};

export default Tranding;
