import React, { useState } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { useMovies } from "../Redux/Moviecontext";

function MoviewDetails() {
  const {addreview}=useMovies()
  const { movieid } = useParams();
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const [hover, sethover] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const[comment,setcomment]=useState('')

  let movieDetails = movies.find((item) => item.id == movieid);
 const handlecmt=(e)=>{
setcomment(e.target.value);
 }
 const handleSumbit=()=>{
  if(userRating || comment){
    addreview(movieid,userRating,comment)
    setUserRating(0);
    setcomment('')
  }
 }

  return (
    <div className="w-full h-screen  flex justify-center items-start pt-10  ">
      <div className="content  w-full h-4/6  flex gap-4  rounded-md p-1 ">
        <div className="left w-1/3 h-full ">
          <img
            src={movieDetails.image}
            alt=""
            className="w-full h-full object-cover"
          />
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
              <h1 className="text-white">{movieDetails.cast}</h1>
            </div>
            <div className="flex p-2 gap-3 ">
              <h1 className="text-gray-500">THEME</h1>
              <h1 className="text-white">ACTION,ROMANTIC</h1>
            </div>
            <div className=" p-3">
              <h1 className="text-white">{movieDetails.discription}</h1>
            </div>
            <div className=" w-full flex gap-5">
              <Button content={"WATCH NOW"} />
              <Button content={"SUBSCRIBE"} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex ">
                {[...Array(5)].map((_, index) => (
                  <IoIosStar
                    key={index}
                    className={`cursor-pointer transition-colors duration-200 ${
                      index < (hover || userRating)
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }`}
                    onMouseEnter={() => sethover(index + 1)}
                    onMouseLeave={() => sethover(null)}
                    onClick={() => setUserRating(index + 1)}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="px-3 shadow-sm border border-[#33313115]  rounded-md focus:border-gray-400 outline-none w-64 h-12 bg-gray-700 text-white"
                  placeholder="add reviews"
                  onChange={handlecmt}
                  value={comment}
                />
                <button className="w-40 border-2 h-8 border-gray-300 font-bold text-white bg-gray-600 rounded-md " onClick={handleSumbit}>
                  Add review
                    
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviewDetails;
