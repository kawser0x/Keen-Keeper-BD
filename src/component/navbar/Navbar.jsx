import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
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
              className="flex gap-1 items-center justify-center text-center">
              <FaHome /> Home
            </NavLink>
            <NavLink to={"/aa"} className="flex gap-1 items-center justify-center text-center">
              <RiTimeLine /> TimeLine
            </NavLink>
            <NavLink to={"/aajd"} className="flex gap-1 items-center justify-center text-center">
              <BsGraphUpArrow /> Status
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
