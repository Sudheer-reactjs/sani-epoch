"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-[15px] fixed z-10 top-0 w-full"> 
      <div className="container">
        <div className="header-bg relative z-1 flex items-center justify-between border-[1px] p-[6px] border-[#191919] rounded-[6px]">
          {/* Logo */} 
          <div className="flex items-center lg:min-w-[202px]">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about-us">About Us</Link>
            <Link href="/strategy-builder">Strategy Builder</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/community">Community</Link>
            <Link href="/Blog">Blog</Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Link
              href="/login"
              className="bg-[#191919] text-[#fff] py-[7px] px-[18px] rounded-[10px] md:mr-[10px] "
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-[#fff] text-[#000] py-[7px] px-[18px] rounded-[10px] "
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800">
              <nav className="flex flex-col items-center space-y-4 py-4">
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
                <Link href="/Blog" onClick={toggleMenu}>
                  Blog
                </Link>
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="bg-[#191919] py-[7px] px-[18px] rounded-[10px] md:mr-[10px]"
                >
                  Login
                </Link>
                <Link
                  href="/get-started"
                  onClick={toggleMenu}
                  className="bg-[#fff] text-[#000] py-[7px] px-[18px] rounded-[10px] "
                >
                  Get Started
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
