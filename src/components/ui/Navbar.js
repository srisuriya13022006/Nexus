import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "contact"];
      let scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed top-0 left-0 w-full shadow-lg flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Nexus Edge Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold text-accent ml-3">Nexus Edge</h1>
      </div>

      {/* Desktop Navbar Links */}
      <ul className="hidden md:flex space-x-6">
        {["about", "services", "contact"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                activeSection === section ? "bg-accent text-black" : "hover:text-accent"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white py-4 px-6 md:hidden">
          <ul className="flex flex-col space-y-4">
            {["about", "services", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block cursor-pointer px-4 py-2 rounded-lg transition ${
                    activeSection === section ? "bg-accent text-black" : "hover:text-accent"
                  }`}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
