import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/footer-logo.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white xl:px-0 px-4">
      <div className="max-w-7xl mx-auto lg:h-[230px] h-[300px] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <img src={footerLogo} alt="logo" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-[#D6D6D6] transition duration-150">
              Home
            </Link>
            <Link href="#" className="text-[#D6D6D6] transition duration-150">
              Upload Document
            </Link>
            <Link href="#" className="text-[#D6D6D6] transition duration-150">
              Ask a Question
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-gray-300 transition duration-150"
            >
              <img src={instagram} alt="logo" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 rounded-lg transition duration-150"
            >
              <img src={facebook} alt="logo" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 rounded-lg transition duration-150"
            >
              <img src={twitter} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-[#B8B8B8]">
          © 2024 Haibird AI. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
