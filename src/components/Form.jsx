import React from "react";
import { HiQrCode } from "react-icons/hi2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Addmovievalidation } from "../utils/addmovieValidation";
const initailvalue = {
  Title: "",
  cast: "",
};

function MovieForm() {
  return (
    <Formik initialValues={initailvalue} validationSchema={Addmovievalidation}>
      {() => (
        <div className="bg-white rounded-md max-w-[500px] p-4 shadow-xl ">
          <div className="border-b-2 border-gray-300 p-3 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-[1.5rem]">Signup</h1>
              <p>it's quick and easy</p>
            </div>
          </div>
          <form action="" className="flex flex-col p-5 gap-3">
            <div className="flex flex-col gap-3 ">
              <input
                type="text"
                name="password"
                className={`px-3 shadow-sm border border-[#00000015] rounded-md outline-none w-full h-12`}
                placeholder="Title"
              />
              <input
                type="text"
                name="password"
                className={`px-3 shadow-sm border border-[#00000015] rounded-md outline-none w-full h-12`}
                placeholder="cast"
              />
            </div>
            <span className="text-red-600">jjj</span>
            <input
              type="text"
              name="email"
              className={`px-3 shadow-sm border border-[#00000015] rounded-md  outline-none w-full h-12`}
              placeholder="discription"
            />
            <span className="text-red-600">kkk</span>
            <input
              type="text"
              name="password"
              className={`px-3 shadow-sm border border-[#00000015] rounded-md outline-none w-full h-12`}
              placeholder="image"
            />
            <input
              type="text"
              name="phonenumber"
              className={`px-3 shadow-sm border border-[#00000015] rounded-md  outline-none w-full h-12`}
              placeholder="language"
            />

            <button className="w-40 border-2 h-10 border-gray-300 font-bold text-white bg-green-600 rounded-md ml-28">
              SIGNUP
            </button>
          </form>
          
          <div className="w-full flex flex-col items-center justify-center gap-2">
            
            <h1 className="text-red-600">jj</h1>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default MovieForm;
