import { createSlice } from "@reduxjs/toolkit";

const Movies = [
  {
    Title: "aaa",
    image: "jjjjjjjj",
    Cast: "jjjjjj",
    language: "jjjj",
    discription: "hello",
    rating: "hello",
  },
];

export const movieSlice = createSlice({
  name: "movies",
  initialState: Movies,
  reducers: {
    addmovie: (state, action) => {},
  },
});
export const { addmovie } = movieSlice.actions;
export default movieSlice.reducer;
