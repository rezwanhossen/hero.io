import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getElement, removeData } from "../../utility/localStorag";
import Installdata from "../../components/InstallDatas/InstallData";
import { FaArrowDown } from "react-icons/fa";
import { toast } from "react-toastify";

const Installation = () => {
  const data = useLoaderData();
  const [installs, setinstalls] = useState([]);

  useEffect(() => {
    const localData = getElement();
    const convertLocalData = localData.map((id) => parseInt(id));
    const installApp = data.filter((app) => convertLocalData.includes(app.id));
    setinstalls(installApp);
  }, []);

  const handelSort = (type) => {
    if (type == "HtL") {
      const sortHtL = [...installs].sort((a, b) => b.size - a.size);
      setinstalls(sortHtL);
    }
    if (type == "LtH") {
      const sortHtL = [...installs].sort((a, b) => a.size - b.size);
      setinstalls(sortHtL);
    }
  };

  const removedata = (id) => {
    const remove = installs.filter((app) => app.id !== id);
    setinstalls(remove);
    removeData(id);
    toast("app Unistall completed !");
  };

  return (
    <div className="my-12">
      <div className=" text-center space-y-3">
        <h1 className=" text-5xl font-bold">Your Installed Apps</h1>
        <p className=" text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className=" flex justify-between border-b p-5">
        <h1 className=" text-3xl">({installs.length}) App Found</h1>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size <FaArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handelSort("HtL")}>High-Low</button>
            </li>
            <li>
              <button onClick={() => handelSort("LtH")}>Low-High</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {installs.map((install) => (
          <Installdata
            key={install.id}
            install={install}
            removedata={removedata}
          />
        ))}
      </div>
    </div>
  );
};

export default Installation;
