import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 pt-0">
      <div className="navbar shadow-sm ">
        <div className="bg-base-100  container mx-auto">
          <div className="navbar-start">
            <a className="btn text-xl">
              <span className="font-bold text-black">Keen</span>
              <span className="font-bold text-green-500">Keeper</span>
            </a>
          </div>

          <div className="navbar-end ">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 items-center justify-center text-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${"flex gap-1 items-center justify-center text-center"} ${isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500"}`
                }>
                <FaHome /> Home
              </NavLink>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  `${"flex gap-1 items-center justify-center text-center"} ${isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500"}`
                }>
                <RiTimeLine /> TimeLine
              </NavLink>
              <NavLink
                to={"/aajd"}
                className={({ isActive }) =>
                  `${"flex gap-1 items-center justify-center text-center"} ${isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500"}`
                }>
                <BsGraphUpArrow /> Status
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
