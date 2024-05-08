import React, { createContext, useContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

const MovieContext = createContext();

export const MovieDataProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  //add movie
  const addmovie = (movie) => {
    const newMovie = {
      ...movie,
      reviews: movie.reviews || [],
      id: new Date().toISOString(),
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };
  const editMovies = (movieId, updatedMovieData) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          const reviews = updatedMovieData.reviews || movie.reviews;
          return { ...movie, ...updatedMovieData, reviews };
        }
        return movie;
      });
    });
  };
  const deleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  //search movie
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
//add review

const addreview=(id,rating,comment)=>{
setMovies((premovies)=>{
  const upadatemovies = premovies.map((movie)=>{
    if(movie.id === id){
      const newreview ={rating,comment,date:new Date().toString()};
      return {...movie,reviews:[...movie.reviews,newreview]}
    }
    return movie;
  });
  localStorage.setItem('movies',JSON.stringify(upadatemovies));
  return upadatemovies;
})
}

  return (
    <MovieContext.Provider
      value={{ addmovie, movies:searchMovies, editMovies, deleteMovie ,searchTerm,setSearchTerm,addreview}}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
