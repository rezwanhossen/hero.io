import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaX } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=" bg-black  text-white">
      <div className="md:flex justify-between p-4 border-b">
        <div className="p-6 ">
          <div className=" flex items-center gap-3  text-xl">
            <img className="h-10 w-10 " src={logo} alt="logo" />{" "}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              HERO.IO
            </span>
          </div>
        </div>
        <div className="space-y-3 p-6  ">
          <h1 className=" text-xl font-semibold"> Social Links</h1>
          <div className=" flex gap-5 items-center text-3xl">
            <p>
              <FaTelegram />
            </p>
            <p>
              <FaFacebook />{" "}
            </p>
            <p>
              <ImInstagram />
            </p>
            <p>
              <FaX />
            </p>
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
