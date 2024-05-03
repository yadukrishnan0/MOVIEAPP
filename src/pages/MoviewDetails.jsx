import React from "react";
import Mimg from "../assets/manju.webp";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
function MoviewDetails() {
  const{movieid}=useParams();
  const movies = JSON.parse(localStorage.getItem('movies')) || [];

  let movieDetails =movies.find(item=>item.id == movieid);
  console.log(movieDetails)

  return (
    <div className="w-full h-screen  flex justify-center items-start pt-10 ">
      <div className="content  w-[70rem]   h-[30rem] flex gap-4 border-gray-700 border-2 rounded-md p-1 ">
        <div className="left w-1/3 h-full ">
          <img src={movieDetails.image} alt="" className="w-full h-full" />
        </div>

        <div className="right  w-full flex flex-col gap-3">
          <div className=" w-full h-28 flex justify-center flex-col border-gray-600 border-b-2">
            <h1 className="font-medium text-white text-[1.9rem] ml-4 - ">
              {movieDetails.Title.toUpperCase()}
            </h1>
            <h1 className="ml-4 font-normal text-sm text-gray-400">
            {movieDetails.language}
            </h1>
          </div>
          <div className=" w-32 h-10 items-center flex pl-2 bord ml-2 border-gray-600 border-b-2">
            <h1 className="text-white font-bold">OVER REVIEW</h1>
          </div>
          <div className=" w-full flex flex-col gap-4 ">
            <div className="flex p-2 gap-3">
              <h1 className="text-gray-500">Cast</h1>
              <h1 className="text-white">
              {movieDetails.cast}
              </h1>
            </div>
            <div className="flex p-2 gap-3 ">
              <h1 className="text-gray-500">THEME</h1>
              <h1 className="text-white">ACTION,ROMANTIC</h1>
            </div>
            <div className=" p-3">
              <h1 className="text-white">
              {movieDetails.discription}
              </h1>
            </div>
            <div className=" w-full flex gap-5">
              <Button content={"WATCH NOW"} />
              <Button content={"SUBSCRIBE"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviewDetails;
