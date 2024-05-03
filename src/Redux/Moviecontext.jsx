import React, { createContext, useContext, useState, useEffect } from "react";

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

  const[searchTerm,setsearchTerm]=useState('');
  const searchMovies = movies.filter((movies) => movies.Title.toLowerCase().includes(searchTerm.toUpperCase));


  return (
    <MovieContext.Provider value={{ addmovie, movies: searchMovies,setsearchTerm }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
