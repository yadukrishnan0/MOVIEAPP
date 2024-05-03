import React from 'react'
import Table from '../components/Table'
import Adminheader from '../components/Adminheader'
function Adminhome() {

  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  
  return (
    <>
    
        <Table/>
    
    
  
    </>
  )
}

export default Adminhome;