import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'
import {LibraryBig} from 'lucide-react'
// import '../../assets/css/Nav.css'
const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Sign Up",
      path: "/signup"
    },
    {
      title: "Sign In",
      path: "/signin"
    }
  ]
  return (
    <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 bg-purpleCustom">
      <div className="w-1/4 h-full text-textColor font-bold flex justify-start items-center text-lg"
       >
        <LibraryBig className='h-6 w-6 mr-2 text-white'/>
        LEARNERS</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-9'>
        {/* <Link to='/'>Home </Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register </Link> */}
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}
              className="text-white">
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar