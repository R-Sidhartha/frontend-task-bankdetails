import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-3xl font-bold">Logo</span>
        </div>

        <div className="hidden md:flex space-x-12 text-2xl">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/blog" className="text-white">
            Blog
          </Link>
          <Link to="/offers" className="text-white">
            Offers
          </Link>
          <Link to="/about" className="text-white">
            About Us
          </Link>
          
          <i className="fas fa-search text-white text-2xl"></i>
          <i className="fas fa-bell text-white text-2xl"></i>
          <i className="fas fa-user text-white text-2xl"></i>
        </div>

        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={toggleMobileMenu}>
            <i
              className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-2">
          <Link to="/" className="text-white block mb-2">
            Home
          </Link>
          <Link to="/services" className="text-white block mb-2">
            Services
          </Link>
          <Link to="/blog" className="text-white block mb-2">
            Blog
          </Link>
          <Link to="/offers" className="text-white block mb-2">
            Offers
          </Link>
          <Link to="/about" className="text-white block mb-2">
            About Us
          </Link>
          <div className="flex space-x-2">
            <i className="fas fa-search text-white text-xl"></i>
            <i className="fas fa-bell text-white text-xl"></i>
            <i className="fas fa-user text-white text-xl"></i>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
