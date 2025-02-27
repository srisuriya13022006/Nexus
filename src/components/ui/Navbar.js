import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-white text-2xl font-bold">Nexus Edge</h1>
        <ul className="flex space-x-6 text-white">
          <li><a href="#hero" className="hover:text-accent transition">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#services" className="hover:text-accent transition">Services</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
