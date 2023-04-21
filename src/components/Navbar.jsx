import {IoDiamond } from "react-icons/io5"
import {TfiAngleDown} from "react-icons/tfi"

import React from 'react'

const Navbar = () => {
  return (
    <div className="max-w-[1180px] m-auto min-h-[60px] flex justify-between items-center">
      <div className="flex px-4">
        <IoDiamond size={40}/>

        <ul className="flex font-medium items-center justify-center">
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
      <div className="flex items-center justify-center">
        <a href="#" className="font-medium px-4 text-xl">SignIn</a>
        <button className="border bg-black text-white px-2 py-2 rounded-md my-6 font-medium hover:bg-gray-400">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar;
