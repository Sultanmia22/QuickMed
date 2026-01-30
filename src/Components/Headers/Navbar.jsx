import React from 'react'
import { Link, NavLink } from 'react-router'
import logoImage from '../../assets/quickmedi-logo.png'
const Navbar = () => {

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Find Doctors', path: '/find-doctors' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'How It Works', path: '/how-work' },
]

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="space-x-5 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
          navLinks?.map( nav => 
            <NavLink key={nav.path} to={nav.path}>{nav.name}</NavLink>
           )
        }
      </ul>
    </div>
    <Link className='flex items-center gap-2'>
    <h2 className='text-xl font-bold text-primary'>QuickMed</h2>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-5">
      {
          navLinks?.map( nav => 
            <NavLink key={nav.path} to={nav.path}>{nav.name}</NavLink>
           )
        }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default Navbar