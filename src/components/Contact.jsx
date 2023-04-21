import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1180px] m-auto flex md:flex-row flex-col items-center justify-between my-4">
      <div className=" my-4 text-center md:text-start" >
        <h1 className="font-bold">Incredible design, right in your inbox</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quas! Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <form className='grid grid-cols-3'>
                <input type="email" placeholder="Email address" className=" col-span-2 border my-2 p-2 rounded-lg bg-slate-200" />
                <button className="text-white bg-gray-400 my-2 p-2 mx-1 rounded-lg hover:bg-black">Try it out</button>
                <span className='col-span-3 flex'>
                <input type="checkbox"/> <p className="mx-2 text-gray-400">I agree to receive marketing emails from Sketch.</p>
                </span>
                
            </form>
        </div>
    </div>
  )
}

export default Contact
