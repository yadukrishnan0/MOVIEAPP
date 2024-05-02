import React from 'react';
import MovieForm from '../components/Form';
import { useMovies } from '../Redux/Moviecontext';
import { VscBeaker } from 'react-icons/vsc';
import {  useNavigate } from 'react-router-dom';

const Addmovies = () => {
  const initailvalue = {
    Title: "",
    cast: "",
    discription: "",
    image: "",
    language: "",
    reviews:[]
  };
  const {addmovie} =  useMovies()
const Navigate =useNavigate()
const  handlesubmit=(values,{setSubmitting,resetForm})=>{
  addmovie(values);
  setSubmitting(false);
  resetForm();
  Navigate('/adminhome')

}



  return (
   <div className='h-screen w-full flex items-center justify-center'>
 <MovieForm initailvalue={initailvalue} onSubmit={handlesubmit}/>
   </div>
  
 
  );
};

export default  Addmovies;