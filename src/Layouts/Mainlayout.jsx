import React from 'react'
import Navbar from '../Components/Headers/Navbar'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Mainlayout