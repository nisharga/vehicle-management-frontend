'use client'

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';

const Navbar = () => {

// nav color change
const [color, setColor] = useState(false)
const changeColor = ()=>{
  if(window.scrollY >= 100){
    setColor(true)
  }else{
    setColor(false)
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', changeColor);
}


  const navItems = [
    {
      id: 1,
      itemName: "Business",
      link:"/business"
    },
    {
      id: 2,
      itemName: "Shifting",
      link:'/shifting'
    },
    {
      id: 3,
      itemName: "Dashboard",
      link:"/dashboard"
    },
  ];

  return (
    <div className={`${color ? "bg-secondary opacity-80 duration-500 ease-in" : "duration-500 ease-in-out"} sticky top-0 z-[9999] text-brand`}
    >
      <div className="navbar container mx-auto md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems?.map((navItem) => (
              <li key={navItem?.id}>
                <Link href={navItem?.link} className="">{navItem?.itemName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href='/'>
            <Image
                    src="/images/logo.png"
                    alt='logo'
                    className="w-12 h-12"
                    width={0}
                    height={0}
                    unoptimized
                />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems?.map((navItem) => (
            <li key={navItem?.id} >
              <Link href={navItem?.link} className={`${color ? "" : "text-brand"} font-bold text-[18px]`}>{navItem?.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-6">
      {/* <a href="#" target="_blank" className="border-2 border-brand py-2 px-5 text-green-400 font-bold rounded-sm">VT-Shop</a>
       */}
      
        {/* Login & logout will be conditional rendering */}
        <Link href="/signup" className="border-2 border-green-400 py-2 px-5 text-green-400 font-bold rounded-sm">Sign Up</Link>
        <Link href="/login" className="border-2 border-green-400 py-2 px-5 text-green-400 font-bold rounded-sm">Log In</Link> 
        {/* <a className="border-2 border-red-400 py-2 px-5 text-white font-bold rounded-sm">Log Out</a>  */}
       
      </div>
    </div>
    </div>
  );
};
export default Navbar;
