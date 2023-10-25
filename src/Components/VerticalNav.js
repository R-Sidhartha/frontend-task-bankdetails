import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VerticalNav = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".hidden-on-scroll");
      if (element) {
        if (window.scrollY > 0) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const mobileNavClass = isMobileNavOpen ? 'block' : 'hidden';

  const checkIsMobileView = () => {
    const breakpoint = 768;

    if (window.innerWidth < breakpoint) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    checkIsMobileView();
    window.addEventListener("resize", checkIsMobileView);
    return () => {
      window.removeEventListener("resize", checkIsMobileView);
    };
  }, []);
  return (
    <div className="flex">
      <nav
        className={`bg-gray-200 min-h-screen border-r border-gray-300 ${isMobileView ? 'w-screen' : 'w-60'} ${mobileNavClass} md:block  `}
      >
        <ul className="p-4 space-y-8 my-5">
          <li className="flex items-center">
            <i className="fas fa-tachometer-alt text-gray-500 text-xl"></i>
            <Link className="ml-2" to="/" onClick={closeMobileNav}>
              My Dashboard
            </Link>
            <i className="fas fa-angle-right ml-auto"></i>
          </li>
          <li className="flex items-center">
            <i className="fas fa-calendar-alt text-gray-500 text-xl"></i>
            <Link className="ml-2" to="/" onClick={closeMobileNav}>
              TOTM links
            </Link>
            <i className="fas fa-angle-right ml-auto"></i>
          </li>
          <li className="flex items-center">
            <i className="fas fa-file-alt text-gray-500 text-xl"></i>
            <Link className="ml-2" to="/" onClick={closeMobileNav}>
              Daily Summary
            </Link>
            <i className="fas fa-angle-right ml-auto"></i>
          </li>
          <li className="flex items-center">
            <i className="fas fa-university text-gray-500 text-xl"></i>
            <Link to="/bankdetails" className="ml-2" onClick={closeMobileNav}>
              Bank Details
            </Link>
            <i className="fas fa-angle-right ml-auto"></i>
          </li>
        </ul>
      </nav>
           <div
        className={`md:hidden hidden-on-scroll fixed top-30 left-4 my-2 cursor-pointer z-50 ${
          isMobileNavOpen ? 'hidden' : 'block'
        }`}
        onClick={toggleMobileNav}
      >
        <i className="fa-solid fa-arrow-right text-2xl text-gray-500"></i>
      </div>
      <div
        className={`md:hidden my-2 fixed top-30 right-4 cursor-pointer z-150 ${
          isMobileNavOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleMobileNav} 
      >
        <i className="fas fa-times text-2xl text-gray-500"></i>
      </div>
    </div>
  );
};

export default VerticalNav;
