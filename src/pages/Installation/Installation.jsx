import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getElement } from "../../utility/localStorag";
import Installdata from "../../components/InstallDatas/InstallData";

const Installation = () => {
  const data = useLoaderData();
  const [installs, setinstalls] = useState([]);
  useEffect(() => {
    const localData = getElement();
    const convertLocalData = localData.map((id) => parseInt(id));
    const installApp = data.filter((app) => convertLocalData.includes(app.id));
    setinstalls(installApp);
  }, []);
  return (
    <div className="my-12">
      <div className=" text-center space-y-3">
        <h1 className=" text-5xl font-bold">Your Installed Apps</h1>
        <p className=" text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        {installs.map((install) => (
          <Installdata key={install.id} install={install} />
        ))}
      </div>
    </div>
  );
};

export default Installation;
