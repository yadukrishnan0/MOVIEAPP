import React, { useState } from "react";
import SignupComponent from "./Usersignup";


function LoginContent() {

  const [signup, setSignup] = useState(false);
  const handleClick = () => {
    setSignup(!signup);
  };
  return (
    <>
      <div className="flex gap-6 items-center  justify-center h-screen w-full bg-red-200 login_auth_bg sm: px-16 flex-col md:flex-row ">
        <div className="">
          <h1 className="text-[3rem] text-center md:text-start font-medium">
            
          </h1>
          <p className="text-[1.5rem]  ">
             
          </p>
        </div>

        <div className="py-16 rounded-md p-5 shadow-lg  gap-3 flex flex-col items-center h-auto w-96  justify-center backdrop-blur-md bg-[#ffffff29]">
          <form action="" className="flex flex-col gap-3 items-center">
            <input
              type="text"
              name=""
              
              className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-80 h-12   "
              placeholder="Email"
            />
            <input
              type="password"
              name=""
              
              className="px-3 shadow-sm border border-[#00000015] border-1 rounded-md focus:border-blue-600 outline-none w-80 h-12 "
              placeholder="password"
            />
            <button className="bg-gray-200 w-56 rounded-md h-9">LOGIN</button>
          </form>
          <p>forgot password</p>
          <hr className="w-52 border-1 font-thin border-gray-400" />
          <button
            onClick={handleClick}
            type="button"
            className="bg-gray-200  rounded-md  w-72 h-12"
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>

      <div
        className={`h-screen ${
          signup ? "flex" : "hidden"
        } absolute inset-0 w-full bg-[#353232d7]  items-center justify-center`}
      >
        <SignupComponent setSignup={setSignup} />
      </div>
    </>
  );
}

export default LoginContent;
