import React from "react";
import MainSection from "./components/MainSection";
import Contact from "./components/Contact";
import "./App.css"
import Header from "./components/Header";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="app">
      <Header />
      <Heading/>
      <MainSection/>
      <Contact/>
    </div>
  );
}

export default App;
