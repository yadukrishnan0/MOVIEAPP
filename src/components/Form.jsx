import React from "react";
import { HiQrCode } from "react-icons/hi2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Addmovievalidation } from "../utils/addmovieValidation";
 


function MovieForm({initailvalue,onSubmit}) {

  return (
    <Formik initialValues={initailvalue} validationSchema={Addmovievalidation}
      onSubmit={onSubmit}
    >
      {() => (
        <div className="bg-white rounded-md max-w-[500px] p-4 shadow-xl ">
          <div className="border-b-2 border-gray-300 p-3 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-[1.5rem]">Add movie</h1>
            </div>
          </div>
          <Form action="" className="flex flex-col p-5 gap-3"
          >
            <div className="flex flex-col gap-3 ">
              <Field
                type="text"
                name="Title"
                className={`px-3 shadow-sm border border-[#00000015] rounded-md outline-none w-full h-12`}
                placeholder="Title"
              />
              <span className="text-red-600">
                <ErrorMessage name="Title" />
              </span>
              <Field
                type="text"
                name="cast"
                className={`px-3 shadow-sm border border-[#00000015] rounded-md outline-none w-full h-12`}
                placeholder="cast"
              />
              <span className="text-red-600">
                <ErrorMessage name="cast" />
              </span>
            </div>

            <Field
              type="text"
              name="discription"
              className={`px-3 shadow-sm border border-[#00000015] rounded-md  outline-none w-full h-12`}
              placeholder="discription"
            />
            <span className="text-red-600">
              <ErrorMessage name="discription" />
            </span>

            <Field
              type="text"
              name="image"
              className={`px-3 shadow-sm border border-[#00000015] rounded-md outline-none w-full h-12`}
              placeholder="image"
            />
            <span className="text-red-600">
              <ErrorMessage name="image" />
            </span>
            <Field
              type="text"
              name="language"
              className={`px-3 shadow-sm border border-[#00000015] rounded-md  outline-none w-full h-12`}
              placeholder="language"
            />
            <span className="text-red-600">
              <ErrorMessage name="language" />
            </span>
            <button className="w-40 border-2 h-10 border-gray-300 font-bold text-white bg-green-600 rounded-md ml-28" type="submit">
              SIGNUP
            </button>
          </Form>

          <div className="w-full flex flex-col items-center justify-center gap-2"></div>
        </div>
      )}
    </Formik>
  );
}

export default MovieForm;
