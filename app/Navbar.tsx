'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500'>
      <div className='sm:text-3xl text-xl font-bold inline-block'>
        <span className='inline-block'>Krisna</span>
      </div>
      <div className='sm:hidden' onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu size={24} />
      </div>
      <nav className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 
      ${showNav ? "top-16 visible" : "max-sm:invisible top-5"}`}>
        <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
          <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 
          ${showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"}`}>
            <a href="#About" className='px-2 '>About</a>
          </li>
          <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 
          ${showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"}`}>
            <a href="#Skills" className='px-2 '>Skills</a>
          </li>
          <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 
          ${showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"}`}>
            <a href="#ContactMe" className='px-2 '>Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
