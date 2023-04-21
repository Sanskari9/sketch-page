import {IoDiamond } from "react-icons/io5"
import {TfiAngleDown} from "react-icons/tfi"
import {FaBars, FaTimes} from "react-icons/fa"

import React, {useState} from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false);
   
     const handleClick = () => {
       return setNav(!nav);
     };

  return (
    <div className="max-w-[1180px] m-auto min-h-[60px] flex justify-between items-center">
      <div className="flex px-4">
        <IoDiamond size={40}/>

        <ul className=" hidden md:flex font-medium items-center justify-center">
          <li className="text-xl px-4 flex items-center justify-center">
           <a href="" className="mr-2">Product</a> 
           <TfiAngleDown size={12}/>
          </li>
          <li className="text-xl px-4 flex items-center justify-center">
           <a href="" className="mr-2">Learn</a>
           <TfiAngleDown size={12}/>
          </li>
          <li className="text-xl px-4">
            <a href="">Apps</a>
          </li>
          <li className="text-xl px-4">
            <a href="">Pricing</a>
          </li>
          <li className="text-xl px-4 flex items-center justify-center">
            <a href="" className="mr-2">Why Sketch</a>
            <TfiAngleDown size={12}/>
          </li>
          <li className="text-xl px-4 flex items-center justify-center">
            <a href="" className="mr-2">Support</a>
            <TfiAngleDown size={12}/>
          </li>
          </ul>
      </div>
      <div className=" hidden md:flex items-center justify-center">
        <a href="#" className="font-medium px-4 text-xl">SignIn</a>
        <button className="border bg-black text-white px-2 py-2 rounded-md my-6 font-medium hover:bg-gray-400">Get Started</button>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-20 md:justify-between">
           {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
         </div>

          {/* Mobile View */}

          <ul 
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#888a8c] flex flex-col justify-center items-center z-10 "
            }
           >
            <li className="py-6 my-4 text-5xl"><a href="">Product</a></li>
            <li className="py-6 my-4 text-5xl"><a href="">Learn</a></li>
            <li className="py-6 my-4 text-5xl"><a href="">Apps</a></li>
            <li className="py-6 my-4 text-5xl"><a href="">Pricing</a></li>
            <li className="py-6 my-4 text-5xl"><a href="">Why Sketch</a></li>
            <li className="py-6 my-4 text-5xl"><a href="">Support</a></li>
            </ul>

    </div>
  )
}

export default Navbar;
