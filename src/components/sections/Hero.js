import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold animate-fade-in">Nexus Edge Technologies</h1>
        <p className="text-lg mt-4 font-light tracking-wide">
          Where Innovation Meets the Cutting Edge
        </p>
        <a href="#services">
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300">
            Explore Services
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
