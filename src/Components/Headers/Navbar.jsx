import React, { useEffect, useState } from 'react'
import { FaBars, FaClinicMedical } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { Link, NavLink } from 'react-router'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Doctors', path: '/find-doctors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'How It Works', path: '/how-work' },
  ]

  // TOGGLE MENU FOR MOBILE VIEW
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // get html element and set data-theme attribute 
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
  },[theme])

  // TOGGLE THEME 
  const toggleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light')
  }





  return (
    <div className='bg-base-100 py-5 border-b-2 border-primary w-full dark:bg-gray-700'>
      <nav className=' w-11/12 md:w-10/12 mx-auto flex justify-between items-center'>

        {/* Logo */}
        <div className=''>
          {/* Mobile Nav Link */}
          {
            isMenuOpen &&
            <div className=' w-full absolute top-19 left-0 md:hidden'>
              <ul className='flex flex-col gap-5 bg-base-100  py-4 px-5  z-20 shadow-xl text-center'>
                {
                  navLinks.map(link => <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? ' border border-primary/25 py-2 text-primary rounded-md' : 'text-primary rounded-md'} key={link.path} to={link.path}> {link.name} </NavLink>)
                }
              </ul>
            </div>
          }
          <div className='flex items-center gap-3'>
            <div onClick={toggleMenu} className='md:hidden'>
              {
                isMenuOpen ? <RxCross1 className='text-primary' size={20} /> : <FaBars className='text-primary' size={20} />
              }

            </div>

            <Link className='flex items-center gap-1'>
              <span><FaClinicMedical className='text-primary' size={26} /></span>
              <h2 className='text-xl text-primary font-bold'> Quick<span className='text-secondary'>M</span>ed </h2>
            </Link>
          </div>
        </div>

        {/* Nav Links Desktop */}
        <ul className='space-x-5 text-primary hidden md:flex'>
          {
            navLinks.map(link => <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-secondary' : ''} key={link.path} to={link.path}> {link.name} </NavLink>)
          }
        </ul>

        {/* PROFILE AND AUTH BUTTONS and theme controll */}
        <div className='flex items-center gap-5'>

          {/* Theme Control Section */}
          <div>
            <label>
              <input className='hidden' onClick={(e) => toggleTheme(e.target.checked)} type="checkbox" name="" id="" />
              <div>
                {
                  theme === 'dark' ? <span className=' text-primary ml-2'>🌙</span> : <span className='  text-primary ml-2'>☀️</span>
                }
              </div>
            </label>
          </div>

          {/* Auth Buttons */}
          <div className='flex items-center gap-3'>
            <Link  className='text-primary font-bold'> SignIn </Link>
            <div className='h-5 w-0.5 bg-secondary'></div>
            <Link to='/sign-up' className='text-primary font-bold'> SignUp </Link>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar