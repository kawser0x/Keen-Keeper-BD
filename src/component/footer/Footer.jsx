import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-green-500">
      <div className="container mx-auto m-4 pt-10 pb-2">
        <div className="justify-center items-center text-center space-y-2">
          <h2 className="text-3xl font-bold">Knee Keeper</h2>
          <p className="font-light">
            Your personal shelf of meaningful connections. Browse, tend, and
            <br />
            nurture the relationships that matter most.
          </p>
          <h3 className="font-bold">Social Links</h3>
          <div className="flex gap-1 justify-center items-center">
            <FaFacebook />
            <FaInstagram />
            <RiTwitterXLine />
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between ">
          <p className="font-extralight">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="space-x-1 font-bold">
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms of Service</Link>
            <Link href=""> Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
