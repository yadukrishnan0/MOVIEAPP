import React from "react";
import Logo from "../assets/6e55e3f32df259ccd7a45a3c00111293.jpg";
import { Link } from "react-router-dom";
function Adminheader() {
  return (
    <div className="flex w-full justify-around items-center border-b-0 border-gray-50 bg-black">
      <div className=" flex items-center">
        <img src={Logo} className="w-20 h-20"></img>
        <h1 className="text-xl font-bold text-white">Movies</h1>
      </div>

      <div className="nav-items flex ">
        <ul className="sm:flex hidden gap-4">
          <Link to={"/addmovie"}>
            <li className="navLink text-white">Addmovie</li>
          </Link>
          <Link to={"/adminhome"}>
            <li className="navLink text-white">Home</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Adminheader;

