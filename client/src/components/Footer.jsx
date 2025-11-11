

import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* ✅ TOP FOOTER (Black section like screenshot) */}
      <div
        className="w-full text-white bg-gradient-to-r from-blue-900/20 to-blue-800/60  py-6 sm:py-8 px-4 sm:px-6 
        border-t-4 border-[#F37021] rounded-tl-[30px] sm:rounded-tl-[40px] rounded-tr-[30px] sm:rounded-tr-[40px]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="Goodwill Logo"
              className="w-20 sm:w-20 md:w-24 lg:w-32 h-auto"
            />
          </div>

          {/* MENU LINKS */}
          <nav className="flex gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-medium text-black text-left md:text-left max-w-2xl">
            Leading providers of premium Facade solutions, we transform spaces
            with innovative designs and exceptional craftsmanship, delivering
            durable, weather-resistant, and aesthetically striking finishes that
            redefine modern architectural possibilities for both exterior
            facades and interior applications.
          </nav>
        </div>
      </div>

      {/* ✅ BOTTOM BLUE COPYRIGHT STRIP (exact like image) */}
      <div className="bg-[#0E2C4C] py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4 sm:px-6 text-white text-sm sm:text-base md:text-lg gap-2 sm:gap-4">
          {/* MOBILE LAYOUT STACK */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-4 w-full md:w-auto">
            {/* PHONE - Mobile First */}
            <a
              href="tel:+919892118052"
              className="flex items-center gap-2 hover:text-white duration-300 text-center order-1 md:order-none"
            >
              <MdCall className="text-base sm:text-lg text-[#dd671d] flex-shrink-0" />
              +91 9892118052
            </a>

            {/* EMAIL */}
            <a
              href="mailto:thegoodwillfacade@gmail.com"
              className="flex items-center gap-4 hover:text-white duration-300 text-center mt-2 md:mt-0 order-2 md:order-none"
            >
              <MdEmail className="text-base sm:text-lg text-[#dd671d] flex-shrink-0" />
              <span className="break-all sm:break-normal">
                thegoodwillfacade@gmail.com
              </span>
            </a>
          </div>

          {/* COPYRIGHT */}
          <span className="text-center mt-2 md:mt-0 order-3 md:order-none w-full md:w-auto">
            © 2025 The Goodwill Facade. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
