import React from "react";
import moviePic from "../assets/manju.webp";
import { IoIosStar } from "react-icons/io";
import Button from "./Button";


function Card({movie}) {
  console.log('card',movie)
  return (
    <div className="relative h-80 w-64 border-2 border-gray-200 rounded-lg hover:shadow-lg p-2">
      <div className="w-full h-full">
        <img src={movie.image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-60 left-0 w-full text-center  flex-col items-center justify-center flex ">
        <h1>{movie.Title}</h1>
        <div className="flex gap-3">
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
        </div>
        <Button content={'WATCH NOW'}/>
      </div>
    </div>
  );
}

export default Card;
