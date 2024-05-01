import React, { useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/UserSlice";

function SignupComponent({ setSignup }) {
  const initialUsers = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phonePattern = /^\d{9}$/;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  // useEffect(()=>{console.log(formData)},[formData])
  const [err, seterr] = useState({
    email: false,
    password: false,
    error: "",
  });

  const [errmsg, seterrMsg] = useState({
    email: "",
    password: "",
  });

  // onChange validation

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
      case "email":
        if (!emailPattern.test(formData.email) && value.length > 0) {
          seterr({ ...err, [name]: true });
        } else {
          seterr({ ...err, [name]: false });
        }

        break;
      case "password":
        if (!passwordPattern.test(formData.password) && value.length > 0) {
          seterr({ ...err, [name]: true });
        } else {
          seterr({ ...err, [name]: false });
        }
        break;
      case "phonenumber":
        if (!phonePattern.test(formData.phonenumber) && value.length > 0) {
          seterr({ ...err, [name]: true });
        } else {
          seterr({ ...err, [name]: false });
        }
        break;
      default:
        break;
    }
  };

  // on blur validation

  const onblurvalidaton = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    let err;
    switch (name) {
      case "email":
        if (!emailPattern.test(formData.email) && value.length > 0) {
          err = "Invalid email Format";
        } else {
          err = null;
        }
        break;
      case "password":
        if (!passwordPattern.test(formData.password) && value.length > 0) {
          err = "provide strong password";
        } else {
          err = null;
        }
        break;
    }
    seterrMsg({ ...errmsg, [name]: err });
  };

  // onsubit validation
  const handlesubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, password, email, phonenumber } = formData;
    if (
      firstName == "" ||
      lastName == "" ||
      password == "" ||
      email == "" ||
      phonenumber == ""
    ) {
      seterrMsg({ ...errmsg, error: "fill the forms" });
      setTimeout(() => {
        seterrMsg({ ...errmsg, error: "" });
      }, 1000);
    } else {
      const isExists=initialUsers.find((user)=>user.email===email)
      if(isExists){
        seterrMsg({ ...errmsg, error: "already signup " });
      }else{
        const NewUser = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phonenumber: phonenumber,
        };
        dispatch(signup(NewUser));
        setSignup(false);
      }
      
    }
  };

  return (
    <div className="bg-white rounded-md max-w-[500px] p-4 shadow-xl">
      <div className="border-b-2 border-gray-300 p-3 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[1.5rem]">Signup</h1>
          <p>it's quick and easy</p>
        </div>
        <button onClick={() => setSignup(false)}>
          <IoMdClose className="text-xl" />
        </button>
      </div>
      <form
        action=""
        className="flex flex-col p-5 gap-3"
        onSubmit={handlesubmit}
      >
        <div className="flex gap-3 ">
          <input
            type="text"
            name="firstName"
            className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-64 h-12 "
            placeholder="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-64 h-12 "
            placeholder="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <span className="text-red-600">{errmsg.email}</span>
        <input
          type="text"
          name="email"
          className={`px-3 shadow-sm border border-[#00000015] rounded-md ${
            err.email ? "border-red-600 focus" : ""
          } outline-none w-full h-12`}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={onblurvalidaton}
        />
        <span className="text-red-600">{errmsg.password}</span>
        <input
          type="text"
          name="password"
          className={`px-3 shadow-sm border border-[#00000015] rounded-md ${
            err.password ? "border-red-600 focus" : ""
          } outline-none w-full h-12`}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          onBlur={onblurvalidaton}
        />
        <input
          type="text"
          name="phonenumber"
          className={`px-3 shadow-sm border border-[#00000015] rounded-md ${
            err.phonenumber ? "border-red-600 focus" : ""
          } outline-none w-full h-12`}
          placeholder="Phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          onBlur={onblurvalidaton}
        />

        <button className="w-40 border-2 h-10 border-gray-300 font-bold text-white bg-green-600 rounded-md ml-28">
          SIGNUP
        </button>
      </form>
      <p className="text-[.8rem]">
        The password must contain at least one alphabetic character, one numeric
        character, and one special character, and it must be at least 8
        characters long.
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-blue-600" onClick={() => setSignup(false)}>
          Already have an account
        </h1>
        <h1 className="text-red-600">{errmsg.error}</h1>
      </div>
    </div>
  );
}

export default SignupComponent;
