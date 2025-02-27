import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-10">
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/400" 
            alt="About Us"
            className="rounded-lg shadow-lg w-full md:w-10/12 mx-auto"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-bold text-accent mb-4">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to **Nexus Edge Technologies**. We specialize in **Web Development, AI, and UI/UX Design**, delivering top-tier digital solutions.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our goal is to **empower businesses with cutting-edge technology**, creating seamless user experiences and intelligent automation.
          </p>
          <a href="#contact">
            <button className="mt-6 px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:scale-105 transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
