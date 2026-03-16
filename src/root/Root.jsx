import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Lodding from "../pages/Lodding/Lodding";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className=" w-11/12 mx-auto min-h-screen flex flex-col">
      <Navbar />
      {navigation.state === "loading" ? (
        <Lodding />
      ) : (
        <>
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Root;
