import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../../assets/navbar-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-black"
      : "text-[#5E5E5E] hover:text-black";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <img src={navLogo} alt="logo" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/home"
              className={`${getLinkClass(
                "/home"
              )} px-3 py-2 rounded-md font-medium`}
            >
              Home
            </Link>
            <Link
              to="/upload-documents"
              className={`${getLinkClass(
                "/upload-documents"
              )} px-3 py-2 rounded-md font-medium`}
            >
              Upload Documents
            </Link>
            <Link
              to="/ask-questions"
              className={`${getLinkClass(
                "/ask-questions"
              )} px-3 py-2 rounded-md font-medium`}
            >
              Ask a Question
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/signin"
              className={`${getLinkClass(
                "/signin"
              )} px-3 py-2 rounded-md font-medium`}
            >
              Sign In
            </Link>
            <Link
              to="/get-started"
              className="text-[#CC9F3A] px-4 py-2 rounded-[50px] border border-[#CC9F3A] font-medium"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#CC9F3A] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              to="/home"
              className={`${getLinkClass(
                "/home"
              )} block px-3 py-2 rounded-md font-medium`}
            >
              Home
            </Link>
            <Link
              to="/upload-documents"
              className={`${getLinkClass(
                "/upload-documents"
              )} block px-3 py-2 rounded-md font-medium`}
            >
              Upload Documents
            </Link>
            <Link
              to="/ask-questions"
              className={`${getLinkClass(
                "/ask-questions"
              )} block px-3 py-2 rounded-md font-medium`}
            >
              Ask a Question
            </Link>
            <Link
              to="/signin"
              className={`${getLinkClass(
                "/signin"
              )} block px-3 py-2 rounded-md font-medium`}
            >
              Sign In
            </Link>
            <Link
              to="/get-started"
              className="block text-[#CC9F3A] px-4 py-2 rounded-[50px] border border-[#CC9F3A] font-medium text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
