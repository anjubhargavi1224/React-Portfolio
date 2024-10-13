import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Workexperience from "./components/Workexperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    
    <div className="overflow-xhidden text-neutral-300 antialised section:bg-cyan-300 selection:text-cyan-900">
     <div className="fixed top-0 -z-10 h-full w-full">
     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
     </div>
     </div>
      <div className="containter mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Workexperience/>
      <Projects/>
      <Contact/>
      </div>
      </div>
  );
};

export default App;
