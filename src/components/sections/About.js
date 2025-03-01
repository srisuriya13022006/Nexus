import React from "react";
import aboutImage from "../../assets/aboutimg.jpg"; 


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={aboutImage} 
            alt="About Us"
            className="rounded-lg shadow-lg w-full md:w-10/12 mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-bold text-accent mb-4">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to <strong>Nexus Edge Technologies</strong>. We specialize in{" "}
            <strong>Web Development, AI, and UI/UX Design</strong>, delivering
            top-tier digital solutions.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our goal is to <strong>empower businesses with cutting-edge technology</strong>,
            creating seamless user experiences and intelligent automation.
          </p>
          <p><strong>Feel free to reach out for projects</strong></p>
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
