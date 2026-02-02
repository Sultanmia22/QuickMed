import React from 'react'
import Navbar from '../Components/Headers/Navbar'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Mainlayout