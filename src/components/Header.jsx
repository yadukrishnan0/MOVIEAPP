import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/6e55e3f32df259ccd7a45a3c00111293.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  return (
    <div className="flex w-full justify-around items-center border-b-0 border-gray-50 bg-black">
      <div className=" flex items-center">
        <img src={Logo} className="w-20 h-20"></img>
        <h1 className="text-xl font-bold text-white">Movies</h1>
      </div>

      <div className="nav-items flex ">
        <ul className="sm:flex hidden gap-4">
          <Link to={"/"}>
            <li className="navLink text-white">Home</li>
          </Link>

          <Link to={"/about"}>
            <li className="navLink text-white">About Us</li>
          </Link>
          <Link to={"/contactus"}>
            <li className="navLink text-white">Contact Us</li>
          </Link>

          <li>
            <button className=" bottom-4 border-gray-400 border-2 rounded-md w-20 cursor-pointer text-white">
              login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
