"use client";
import React from "react";
import Link from "next/link";
import TextScroll from "@/components/TextScroll";
import LogoSlider from "@/components/LogoSlider";
import { ButtonArrow } from "@/utlis/svg";
import GetStartedTabComponent from "@/components/GetStartedTabComponent";

export default function page() {
  return (
    <>
      <main
        className="pt-[100px] bg-black bg-cover bg-top relative z-[1]"
        style={{ paddingTop: "110px" }}
      >
        <section className="w-full inline-block text-center py-[120px]">
          <div className="container">
            <h1>Free, until you’re ready</h1>
            <p className="text-[#757575] max-w-[600px] mx-auto mt-[24px] mb-[35px] md:text-[20px] md:leading-[30px]">
              Look first at how all the markets are performing. Then leap into
              them on the platform used by 60 million traders.
            </p>
            <div className="flex justify-center">
              <Link
                className="button-black !px-[24px] md:!px-[24px] "
                href="/login"
              >
                Sign up for free
                <ButtonArrow />
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full inline-block text-center pb-[180px]">
          <div className="container">
            <GetStartedTabComponent />
          </div>
        </section>

        <section className="w-full inline-block text-center pb-[40px] pt-[64px] md:pt-[170px] md:pb-[60px]">
          <div className="container">
            <h6 className="uppercase text-[16px] tracktext-center font-HelveticaNeue text-white text-base tracking-widest mb-[30px] md:mb-[45px]">
              Powering 20k+ businesses globally
            </h6>
          </div>
          <LogoSlider />
        </section>

        <section className="w-full inline-block text-center pb-[80px] md:pb-[100px] lg:pb-0">
          <TextScroll />
        </section>
      </main>
    </>
  );
}
