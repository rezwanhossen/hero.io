import React from "react";
import Banner from "../../components/Banner/Banner";
import Tranding from "../../components/Teanding/Tranding";
import Banner1 from "../../components/Banner/Banner1";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Banner1 />
      <Tranding data={data} />
    </div>
  );
};

export default Home;
