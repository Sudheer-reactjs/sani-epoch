"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HumburgerCloseIcon, HumburgerIcon, Logo } from "@/utlis/svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header className="footer-main flex items-center justify-between py-[14px] fixed z-10 top-0 w-full"> 
      <div className="container">
        <div className="header-bg relative z-[9] flex items-center justify-between border-[1px] py-[10px] px-[18px] border-[#191919] rounded-[6px] lg:py-[5px] lg:px-[8px]">
          {/* Logo */} 
          <div className="flex items-center lg:min-w-[220px]">
            <Link href="/" className="text-xl font-bold"> 
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/about-us">About Us</Link>
            <Link href="/strategy-builder">Strategy Builder</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/community">Community</Link>
            <Link href="/Blog">Blog</Link>
          </nav>

          {/* Login Button */}
          <div className="hidden lg:flex">
            <Link
              href="/login"
              className="font-HelveticaNeueMedium bg-[#191919] text-[#fff] py-[7px] px-[17px] rounded-[10px] md:mr-[15px] "
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="font-HelveticaNeueMedium bg-[#fff] text-[#000] py-[7px] px-[17px] rounded-[10px] "
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
             {isMenuOpen ? <HumburgerCloseIcon /> : <HumburgerIcon />} 
          </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
            <div className="mobile-menu fixed left-0 top-0 w-full min-h-[100vh] h-[100vh] p-[30px] bg-black z-[8] overflow-scroll lg:hidden">
              <nav className="flex flex-col items-center space-y-4 py-[130px] text-[#fff] text-[24px]">
                <Link href="/about-us" onClick={toggleMenu}>
                  About Us
                </Link>
                <Link href="/strategy-builder" onClick={toggleMenu}>
                  Strategy Builder
                </Link>
                <Link href="/pricing" onClick={toggleMenu}>
                  Pricing
                </Link>
                <Link href="/community" onClick={toggleMenu}>
                  Community
                </Link>
                <Link href="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </nav>
              <div className="flex flex-col max-w-[235px] w-full mx-auto text-center gap-[15px]">
              <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="font-HelveticaNeueMedium bg-[#191919] py-[12px] px-[18px] rounded-[10px] md:mr-[10px]"
                >
                  Login
                </Link>
                <Link
                  href="/get-started"
                  onClick={toggleMenu}
                  className="font-HelveticaNeueMedium bg-[#fff] text-[#000] py-[12px] px-[18px] rounded-[10px] "
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
    </header>
  );
};

export default Header;
