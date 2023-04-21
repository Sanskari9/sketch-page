import React from "react";
import Mac from "../assests/mac-app-2022-summary-header.avif";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const MainSection = () => {
  return (
    <div className="max-w-[1180px] m-auto border rounded-lg bg-slate-100/90 my-4 shadow-lg">
          
          {/* Top Section */}
      <div className="flex border-b-2">
        
          <img
            src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image-updated%404x.png?ixlib=rb-4.1.0&w=587&q=95&fm=png&auto=format&s=a886f311b31cc626b39f1bd6c5d40832"
            className="w-[560px] h-[500px] rounded-e-lg rounded-tl-lg mb-8"
            alt=""
          />
        
        <div className="mx-16 my-8">
          <h3 className="py-2 pl-2 bg-slate-200 w-[110px] rounded-xl my-2">
            FOR EDITORS
          </h3>
          <h1 className="font-[600] text-5xl my-4">Design on your Mac</h1>
          <p className="font-light text-2xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis dolore doloribus minima quis iste debitis pariatur
            quibusdam dignissimos animi?
          </p>
          <div className="flex">
            <img src={Mac} alt="" className="rounded-xl mr-2" />
            <p className="mx-2 text-xl font-light">
              Everything you need to know about the Sketch <span className="text-black font-medium">Mac app</span>
            <ArrowForwardOutlinedIcon />
            </p>
          </div>
          <button className="border bg-black text-white px-2 py-2 rounded-md my-6 font-medium hover:bg-gray-400">Download for macOS</button>
        </div>
        <hr />
      </div>

        {/* Middle Section */}
      <div className="flex border-b-2">
        <div className="mx-16 my-10 w-[600px]">
          <h3 className="py-2 pl-2 bg-slate-200 w-[130px] rounded-xl my-2">
            FOR EVERYONE
          </h3>
          <h1 className="font-[600] text-5xl my-4">Explore in your browser</h1>
          <p className="font-light text-2xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis dolore doloribus minima quis iste debitis pariatur
            quibusdam dignissimos animi?
          </p>
          <div className="flex">
            <img src="https://sketch-cdn.imgix.net/assets/blog/web-app-2022-summary-header.png?ixlib=rb-4.1.0&fit=crop&dpr=1&w=64&h=64&q=95&fm=jpg&auto=format&s=f2bf712ff8f4cdbfdc1bcd8c1114a8f5" alt="" className="rounded-xl mr-2" />
            <p className="mx-2 text-xl font-light">
              Everything you need to know about the Sketch <span className="text-black font-medium">Web app</span>
            <ArrowForwardOutlinedIcon />
            </p>
          </div>
          <button className="border bg-black text-white px-2 py-2 rounded-md my-6 font-medium hover:bg-gray-400">Open the Web App</button>
        </div>
          
          <img
            src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image-updated%404x.png?ixlib=rb-4.1.0&w=587&q=95&fm=png&auto=format&s=8e9f8c274930e1180b3114a9087d9e16"
            className="w-[590px] rounded-e-lg"
            alt=""
          />
        
      </div>

        {/* Bottom Section */}
      <div className="flex">
      <img
            src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image%404x.png?ixlib=rb-4.1.0&w=587&q=95&fm=png&auto=format&s=647d1050facbd578f9fb1e81c1c04654"
            className="w-[560px] h-[420px] rounded-lg"
            alt=""
          />
        <div className="mx-16 mt-10 w-[600px]">
          <h3 className="py-2 pl-2 bg-slate-200 w-[130px] rounded-xl my-2">
            FOR EVERYONE
          </h3>
          <h1 className="font-[600] text-5xl my-4">Preview on iPhone</h1>
          <p className="font-light text-2xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis dolore doloribus minima quis iste debitis.
          </p>
          <button className="border bg-black text-white px-2 py-2 rounded-md mt-6 font-medium  hover:bg-gray-400">Download on the app Store</button>
        </div>
        
      </div>
    </div>
  );
};

export default MainSection;
