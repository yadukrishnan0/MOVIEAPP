import React from "react";
import MovieForm from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../Redux/Moviecontext";
function MovieEdit() {
  const { movies,editMovies } = useMovies();
  const { id } = useParams();
  const editmovie = movies.find((movie) => movie.id == id);
const Navigate =useNavigate()
  const { Title, cast, discription, image, language, reviews } = editmovie;
  const initailvalue = {
    Title: Title,
    cast: cast,
    discription: discription,
    image: image,
    language: language,
    reviews: reviews,
  };
const handlesubmit =(values)=>{
  editMovies(id,values);
  Navigate('/adminhome')
}
  return (
    <>
      <div className="flex justify-center items-center">
        <MovieForm initailvalue={initailvalue}  onSubmit={handlesubmit}/>
      </div>
    </>
  );
}

export default MovieEdit;
