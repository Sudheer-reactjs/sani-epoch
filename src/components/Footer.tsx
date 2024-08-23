import React from "react";
import Link from "next/link";
import { ButtonArrow } from "@/utlis/svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-text bg-[#000] rounded-[32px] py-[85px] px-[122px]">
              <h2>Build trading algorithms with AI, backtest them, then execute—all in one platform. No coding skills required.</h2>
              <div className="flex justify-center">
                <Link
                  className="button-black !px-[24px] md:!px-[35px] " 
                  href="/get-started"
                >
                  Get started 
                  <ButtonArrow />
                </Link>
              </div>
          </div>
          <div className="flex gap-[40px] text-left">
            <div>
              <h4>Company</h4>
              <div className="flex flex-col space-y-4 py-4">
                <Link href="/about-us">About Us</Link>
                <Link href="/strategy-builder">Strategy Builder</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/community">Community</Link>
                <Link href="/Blog">Blog</Link>
              </div>
            </div>
            <div>
              <h4>Resources</h4>
              <div className="flex flex-col items-center space-y-4 py-4">
                <Link href="/Blog">Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
