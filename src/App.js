import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration 1 sec
  }, []);
  return (
    <div className="overflow-x-hidden w-screen">
      <Navbar />
      <Hero />
      <About /> 
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
