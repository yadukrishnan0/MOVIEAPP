import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoIosStar } from "react-icons/io";
import Card from "../components/Card";
import Button from "../components/Button";
import { CgFontSpacing } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useMovies } from "../Redux/Moviecontext";

function Home() {
  const filtermoviess =JSON.parse(localStorage.getItem('movies'))
  console.log(filtermoviess)
  const{movies}=useMovies()
  const[movieData,setMovieData] =useState(movies);
  
  useEffect(()=>{
    setMovieData(movies)
  },[movies])

  return (
    <>
      <div className="flex w-full justify-center mt-5 ">
        <div className="w-5/6 h-96 rounded-lg video-container ">
          <div className=" h-full w-80 p-3 flex flex-col justify-end items-center">
            <h1 className="font-bold text-white">AVATAR</h1>
            <Button content={"WATCH NOW"} />
            <div className="flex gap-3">
              <IoIosStar className="text-yellow-300" />
              <IoIosStar className="text-yellow-300" />
              <IoIosStar className="text-yellow-300" />
              <IoIosStar className="text-yellow-300" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white ml-10 mt-10 ">popular Movies</h1>
      <div className="flex gap-2">
      <Button content={"MALAYALAM"} onClick={() => {
    const filterMovie =  filtermoviess.filter((val) => {
        return val.language.toLowerCase() === 'malayalam';
    });
    setMovieData(filterMovie);
}} />
<Button content={"TAMIL"} onClick={() => {
    const filterMovie = filtermoviess.filter((val) => {
        return val.language.toLowerCase() === 'tamil';
    });
    setMovieData(filterMovie);
}} />
<Button content={"ENGLISH"} onClick={() => {
    const filterMovie = filtermoviess.filter((val) => {
        return val.language.toLowerCase() === 'english';
    });
    setMovieData(filterMovie);
}} />
 
      </div>
  
      <div className=" w-full flex flex-wrap gap-4 m-8 ">
        {movieData.map((val) => (
          <Link to={`/moviedetails/${val.id}`} key={val.id}>
           <Card  movie={val} />
          </Link>
         
        ))}
      </div>
    </>
  );
}

export default Home;