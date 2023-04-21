import React,{useEffect, useRef} from 'react'
import { gsap } from 'gsap';

const Heading = () => {
  let heading = useRef(null);
  let para = useRef(null);
  
  useEffect(()=>{
      gsap.to(heading,{ duration: .3, ease: "power3.out", y: -20 });
      gsap.to(para,{ duration: .4, ease: "power3.out", y: -20 })
  },[])
 
  return (
    <div className="flex items-center justify-center">
        <div className="max-w-[810px] m-2 p-2">
            <h1 ref={el =>{heading = el}} className="text-7xl font-bold text-center">Every hero needs a sidekick. We have two.</h1>
            <p ref={el =>{para = el}} className="text-center p-4 text-2xl">Create with our award-winning macOS app, share your projects in the browser (on any platform), and take Sketch with you.</p>
        </div>
         
    </div>
  )
}

export default Heading
