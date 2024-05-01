import React from 'react'
import {FaTrash,FaEdit } from "react-icons/fa";
import moviePic from '../assets/manju.webp'
function Table() {
  return (
    <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-900 text-[#3c9b9b]">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Poster</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Cast</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Trailer</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            
              <tr className="text-center">
                <td className="border border-gray-800 px-4 py-2">
                  avatar
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <img
                    src={ moviePic}
                    alt="Movie Poster"
                    className="h-20 mx-auto"
                  />
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  goooood filim
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  cast
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  rating
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <video
                    src=''
                    alt="Movie Trailer"
                    className="h-20 mx-auto"
                    autoPlay
                    controls
                    muted
                  ></video>
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <button
                    className="text-yellow-500 hover:text-yellow-700 mx-2 text-xl"
                    onClick={() => onEdit(movie)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 mx-2 text-xl"
                    onClick={() => handleDelete(movie.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
           
          </tbody>
        </table>
  )
}

export default Table