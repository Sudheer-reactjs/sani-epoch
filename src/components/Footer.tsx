import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
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
