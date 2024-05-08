import React, { useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import moviePic from "../assets/manju.webp";
import { useMovies } from "../Redux/Moviecontext";
import { Link } from "react-router-dom";

function Adminhome() {
  const { movies, deleteMovie } = useMovies();
  const handleDelete = (movieid) => {
    deleteMovie(movieid);
  };

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-900 text-[#3c9b9b]">
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Poster</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Cast</th>
          <th className="px-4 py-2">Rating</th>

          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((val) => (
          <tr key={val.id} className="text-center">
            <td className="border border-gray-800 px-4 py-2 text-white">
              {val.Title}
            </td>
            <td className="border border-gray-800 px-4 py-2">
              <img
                src={val.image}
                alt="Movie Poster"
                className="h-20 mx-auto"
              />
            </td>
            <td className="border border-gray-800 px-4 py-2 text-white">
              {val.discription}
            </td>
            <td className="border border-gray-800 px-4 py-2 text-white">
              {val.cast}
            </td>
            <td className="border border-gray-800 px-4 py-2">rating</td>
            <td className="border border-gray-800 px-4 py-2">
              <Link to={`/editmovie/${val.id}`}>
              <button className="text-yellow-500 hover:text-yellow-700 mx-2 text-xl">
                <FaEdit />
              </button>
              </Link>
              <button
                className="text-red-500 hover:text-red-700 mx-2 text-xl"
                onClick={() => handleDelete(val.id)}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Adminhome;
