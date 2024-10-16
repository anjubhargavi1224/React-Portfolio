import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import logo from "../assets/SBLogo3.png";

const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-3'>
        <div className='flex flex-shrink-0 size-28 items-center'>
            <img className='mx-2 w-10' src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
        </div>
    </nav>
  )
}

export default Navbar