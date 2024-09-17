"use client";
import React from "react";
import Link from "next/link";
import TextScroll from "@/components/TextScroll";
import LogoSlider from "@/components/LogoSlider";
import { ButtonArrow } from "@/utlis/svg";
import GetStartedTabComponent from "@/components/GetStartedTabComponent";
import ComparePlansTable from "@/components/ComparePlansTable";
import ComparePlansTableMobile from "@/components/ComparePlansTableMobile";

export default function page() {
  return (
    <>
      <main className="pt-[78px] get-bg bg-black bg-top relative z-[1]">
       
        <section className="w-full inline-block text-center pt-[20px] pb-[180px] md:py-[120px]">
          <div className="container">
            <h1 className="max-w-[250px] mx-auto md:max-w-full"> 
              Free, until you’re ready
            </h1>
            <p className="text-[#757575] max-w-[600px] px-[25px] mx-auto mt-[15px] mb-[24px] md:px-[0] md:text-[20px] md:leading-[30px] md:mt-[24px] md:mb-[35px]">
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
         
          {/*Non-professional Professional */}
        <section className="w-full inline-block text-center ">
          <div className="container">
            <GetStartedTabComponent />
          </div>
        </section>

        {/*Compare plans*/}
        <section className="ComparePlansTable w-full inline-block text-center  pt-[70px] md:pt-[100px] ">
          <div className="container">
            <div className="hidden w-full lg:block">
              <ComparePlansTable />
            </div>
            <div className="inline-block w-full lg:hidden">
              <ComparePlansTableMobile />
            </div>
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

        <section className="w-full inline-block text-center pb-[100px] md:pb-[100px] lg:pb-0">
          <TextScroll />
        </section>
      </main>
    </>
  );
}
