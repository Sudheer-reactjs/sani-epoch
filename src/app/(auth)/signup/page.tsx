"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  BrainIcon,
  EyeIcon,
  FacebookIcon,
  GoogleIcon,
} from "@/utlis/svg";
import ProAccountCard from "@/components/ProAccountCard";
import TextScroll from "@/components/TextScroll";
const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formValues);
  };

  return (
    <main
      className="pt-[70px] black-background bg-black bg-cover bg-top relative z-[1] md:pt-[110px]"
    >
      <div className="w-full max-w-[702px] mx-auto">
        <div className="text-center">
          <div className="flex justify-center brain-icon ">
            <BrainIcon />{" "}
          </div>
          <h1 className="text-white mb-[60px] mt-[35px] md:my-10 max-w-[312px] mx-auto md:max-w-full ">
            Navigate the Markets with Confidence
          </h1>
        </div>
          {/*Non-professional Professional */}
        <div className="customborder grid md:grid-cols-2 gap-4 px-[50px]">
          <button className="relative font-HelveticaNeueThin flex items-center gap-[15px] justify-center bg-[#191919] py-3 px-4 rounded-lg"> 
            Sign up with Google
            <GoogleIcon />
          </button>

          <button className="relative font-HelveticaNeueThin flex items-center gap-[15px] justify-center bg-[#191919] py-3 px-4 rounded-lg">
            Sign up with Facebook
            <FacebookIcon />
          </button>
        </div>

        <div className="text-[#595959] text-center my-5 md:my-4 mx-5 md:mx-[50px] border-through relative">
          {" "}
          <span className="text-sm px-2 bg-black">or</span>
        </div>
         {/*signup form*/} 
        <form onSubmit={handleSubmit} className=" px-5 md:px-[50px] login-form">
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <label htmlFor="">
              First Name
              <div className="input-border relative">
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
            <label htmlFor="">
            Last Name
              <div className="input-border relative">
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </div>

          <div className="mb-5">
            <label htmlFor="">
            Email Address
              <div className="input-border relative">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className=" placeholder-[#757575] "
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </div>

          <div className="mb-5 relative">
            <label htmlFor="">
            Password
              <div className="input-border relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full hide-bg px-3 py-2 rounded bg-gray-700 text-white placeholder-[#757575]  focus:outline-none"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-base mt-1">
                At least 8 characters, with numbers and symbols.
              </p>
              <button
                type="button"
                className="absolute right-3 top-[40px] z-10"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <EyeIcon /> : <EyeIcon />}
              </button>
            </label>
          </div>

          <div className="flex justify-between mb-4">
            <div className="custom-checkbox flex items-center">
              <label htmlFor="remember-me" className=" !text-white">
                <input type="checkbox" id="remember-me" className="" />
                <span></span>
                Remember this device
              </label>
            </div>
          </div>

          <button type="submit" className="!w-full button-black !text-sm">
            Create Account
          </button>
        </form>

        <div className="text-[#757575] text-xs mt-[14px] text-center">
          By logging in, you agree to follow our
          <Link href="/signup" className="text-[#19B0B1] ml-1 underline hover:underline">
            terms of service
          </Link>
        </div>
      </div>

     <ProAccountCard /> 
     <section className="w-full inline-block text-center pb-[100px] md:pb-[100px] lg:pb-0">
          <TextScroll />
      </section>
    </main>
  );
};

export default Page;
