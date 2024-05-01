import React from "react";
import Header from "../components/Header";
import { IoIosStar } from "react-icons/io";
import Card from "../components/Card";
import Button from "../components/Button";
function Home() {
  return (
    <>
      <div className="flex w-full justify-center mt-5 ">
        <div className="w-5/6  h-96 rounded-lg video-container ">
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
      <div className=" w-full flex flex-wrap gap-4 m-8 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
export default Home;
