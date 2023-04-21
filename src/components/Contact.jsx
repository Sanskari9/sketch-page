import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1180px] m-auto flex items-center justify-between">
      <div >
        <h1 className="font-bold">Incredible design, right in your inbox</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quas! Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <form>
                <input type="email" placeholder="Email address" className="border m-2 p-2 rounded-lg bg-slate-200" />
                <button className="text-white bg-gray-400 px-2 py-2 rounded-lg hover:bg-black">Try it out</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
