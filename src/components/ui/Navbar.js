import React from "react";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Nexus Edge Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold text-accent ml-3">Nexus Edge</h1>
      </div>
     
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-accent">About</a></li>
        <li><a href="#services" className="hover:text-accent">Services</a></li>
        <li><a href="#contact" className="hover:text-accent">Contact</a></li>
      </ul>
   
   </nav>
  );
};

export default Navbar;
