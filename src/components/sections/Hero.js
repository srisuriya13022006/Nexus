import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/logo.png"; // Replace with your actual image

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-20 h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white overflow-hidden"
    >
      {/* Text Animation */}
      <motion.h1
        className="text-5xl font-bold text-accent mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Nexus Edge Technologies
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Where Innovation Meets the Cutting Edge.
      </motion.p>

      {/* Image Animation */}
      <motion.img
        src={heroImage}
        alt="Hero"
        className="rounded-full w-48 h-48 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Buttons Container */}
      <div className="mt-6 flex space-x-4">
        {/* Know About Us Button */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md transition"
        >
          Know About Us
        </motion.a>

        {/* Get Project Now Button */}
        <motion.a
          href="#contact" // Assuming it leads to the Contact section
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md transition"
        >
          Get Project Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
