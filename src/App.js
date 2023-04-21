
import React from "react";
import MainSection from "./components/MainSection";
import Contact from "./components/Contact";
import "./App.css"
import Heading from "./components/Heading";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";

function App() {
  return (

    <div className="app ml-6 xl:ml-0">
      <Navbar/>
      <Heading/>
      <MainSection/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;

  