import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminheader from '../components/Adminheader'
function  Adminlayout() {
  return (
   <>
     <Adminheader/>
     <Outlet/>
   </>
  )
}

export default Adminlayout;