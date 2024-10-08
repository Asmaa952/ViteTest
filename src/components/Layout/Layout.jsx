import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  
     <Navbar/>
     <div className='py-20 container mx-auto w-10/12'> 
        <Outlet/>
        <Footer/>
     </div>
      
    </>
}
