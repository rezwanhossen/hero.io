import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-[#632EE3] border-b-2 " : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? " text-[#632EE3] border-b-2 " : ""
          }
        >
          App{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive ? " text-[#632EE3] border-b-2 " : ""
          }
        >
          Installation{" "}
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar py-4 bg-white shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost  text-xl">
            <img className="h-10 w-10 " src={logo} alt="logo" />{" "}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              HERO.IO
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/rezwanhossen"
            className=" btn btn-lg   bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-lg text-white"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
