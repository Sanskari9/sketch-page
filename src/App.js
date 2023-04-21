
import React from "react";
import MainSection from "./components/MainSection";
import Contact from "./components/Contact";
import "./App.css"

import Heading from "./components/Heading";

// import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
function App() {
  return (

    <div className="app">
  
      <Heading/>
      <MainSection/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;

  