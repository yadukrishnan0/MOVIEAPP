import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
function Userlayout() {
  return (
   <>
     <Header/>
     <Outlet/>
   </>
  )
}

export default Userlayout