import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import MovieReducer from './MovieSlice'
export const store =configureStore({
    reducer:{
        user:UserReducer,
}
})