import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const Users = JSON.parse(localStorage.getItem("users")) || [
  {
    firstName: "yadu",
    lastName: "krishnan",
    email: "yadhukri@gmail.com",
    password: "12345678",
    phone: "9539492817",
    role: "user",
  },
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "12345678",
    phone: "098754433",
    role: "admin",
  },
];


export const userSlice = createSlice({
  name: "users",
  initialState: Users,
  reducers: {
    signup: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
  },
});

export const { signup } = userSlice.actions;

export default userSlice.reducer;
