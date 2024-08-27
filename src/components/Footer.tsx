import React from "react";
import Link from "next/link";
import { ButtonArrow } from "@/utlis/svg";
import NewsletterForm from "./NewsletterForm";


export default function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-top footer-text bg-[#000] relative rounded-[32px] z-[1]  flex gap-[20px] justify-between items-center flex-col p-[35px] md:py-[85px] md:px-[50px] mt-[-40px] md:mt-[-80px] lg:py-[85px] lg:px-[122px] md:flex-row lg:mt-[-180px] ">
            <h2 className="text-[#fff] font-HelveticaNeue max-w-[596px] text-center md:text-left !text-[20px] md:!text-[38px]">  
              Build trading algorithms with AI, backtest them, then execute —
              all in one platform. No coding skills required.
            </h2>
            <div className="flex justify-center">
              <Link
                className="button-black !px-[24px] md:!px-[35px] !text-[#fff] "
                href="/get-started"
              >
                Get started
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <div className="footer-middle flex flex-col gap-[40px] justify-between w-full text-left pt-[30px] pb-[30px] md:pb-[60px] md:pt-[120px] md:flex-row ">
            <div className="flex justify-between gap-[20px]  w-full md:max-w-[400px]">
              <div className="w-[50%] md:w-auto ">
                <h4 className="uppercase font-HelveticaNeue leading-none tracking-wider mb-[20px] md:leading-tight md:tracking-[3px] text-base md:text-xl md:mb-[40px]">Company</h4>
                <div className="flex flex-col space-y-2 leading-loose text-base font-HelveticaNeue md:text-xl md:space-y-6 ">
                  <Link href="/about-us">About Epochfin</Link>
                  <Link href="/strategy-builder">Strategy builder</Link>
                  <Link href="/pricing">Pricing</Link>
                  <Link href="/community">Community</Link>
                </div>
              </div>
              <div className="w-[50%] md:w-auto ">
              <h4 className="uppercase font-HelveticaNeue leading-none tracking-wider mb-[20px] md:leading-tight md:tracking-[3px] text-base md:text-xl md:mb-[40px]">Resources</h4>
                <div className="flex flex-col space-y-2 leading-loose text-base md:text-xl md:space-y-6 ">  
                  <Link href="/blog">Blog</Link>
                  <Link href="/documentations">Documentations</Link>
                  <Link href="/ask-epoch-gpt">Ask Epoch GPT</Link>
                </div>
              </div> 
            </div>
            <NewsletterForm /> 
          </div>
          <div className="footer-bottom flex-col-reverse border-solid border-t py-[24px] flex justify-center text-center gap-[10px] md:flex-row md:justify-between md:text-left" style={{ borderTopColor: "rgba(0, 0, 0, 0.15)" }}>
            <p className="opacity-45 text-[#000] text-[15px] md:text-[18px]">© 2024 Epochfin, All rights reserved.</p>
             <ul className="opacity-45 text-[#000] flex gap-[15px] text-[15px]  justify-center  md:justify-start md:text-[18px]">
               <li><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
             </ul>
          </div>
        </div>
      </footer>
     
    </>
  );
}
