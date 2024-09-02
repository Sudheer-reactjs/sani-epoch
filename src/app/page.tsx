"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TextWithImage from "@/components/TextWithImage";
import VideoImage from "@/assets/images/video-image-new.png";
import CommunityImage from "@/assets/images/community.jpg";
import ExploreImage from "@/assets/images/explore.jpg";
import AskGrid from "@/assets/images/ask.jpg";
import MobileVideimage from "@/assets/images/mobile-banner.png"

import VideoModal from "@/components/VideoModal";
import {
  AIPoweredIcon,
  AutomatedIcon,
  ButtonArrow,
  DiverseIcon,
  GlobalIcon,
  MultiIcon,
  OptimizedIcon,
  PlusIcon,
  serviceIcon,
  YoutubeIcon,
} from "@/utlis/svg";
import ServiceGrid from "@/components/ServiceGrid";
import LogoSlider from "@/components/LogoSlider";
import TextScroll from "@/components/TextScroll";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <>
      <main
        className="pt-[82px] home-bg bg-black bg-cover bg-top relative z-[1]"
        style={{ paddingTop: "82px" }}
      >
        <section className="w-full inline-block text-center pt-[40px] pb-[30px] md:pt-[110px] md:pb-[65px]">
          <div className="container">
            <h5 className="font-HelveticaNeue text-[#757575] text-[16px] md:text-[20px] ">
              Elevate your <b className="font-HelveticaNeueMedium">trading</b>{" "}
              with Epochfin
            </h5>
            <h1 className="font-[500] ml-auto mr-auto tracking-[-1px] mt-[4px] mb-[25px] text-[36px] leading-[40px] max-w-[350px] md:tracking-[-2px]  md:mt-[18px]  md:mb-[58px] md:max-w-[620px] md:text-[68px] md:leading-[68px]">
              All in one algorithmic trading platform
            </h1>
            <div className="flex justify-center">
              <Link className="button-black !px-[35px] " href="/get-started">
                Get started
                <ButtonArrow />
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full inline-block">
          <div className="container">
            <div className="relative cursor-pointer text-center" onClick={openModal}>
              <Image
                src={VideoImage}
                alt="VideoImage"
                className="rounded-[28px] hidden md:block "
              />
              <Image src={MobileVideimage} alt="VideoImage" className="max-w-[400px] w-full mx-auto md:hidden " />
              <div className="absolute inset-0 flex items-center justify-center"> 
                <YoutubeIcon />
              </div>
            </div>
            <div className="br-hide max-w-[300px] ml-auto mr-auto text-center relative mt-[-105px] md:max-w-[710px]">
              <h2>
                Access elite trading strategies <br></br> without any coding
                experience required.
              </h2>
              <p className="text-[#757575] max-w-[520px] mx-auto mt-[15px] mb-[30px] md:mb-[40px] md:text-[20px]">
                Whether you’re new to trading or a seasoned researcher, our
                tools cater to all your needs.
              </p>
              <div className="flex justify-center">
                <Link
                  className="button-black !px-[24px] md:!px-[35px] "
                  href="/get-started"
                >
                  Create your strategy
                  <ButtonArrow />
                </Link>
              </div>
            </div>
          </div>
          <VideoModal isOpen={isModalOpen} onClose={closeModal} />
        </section>

        <section className="w-full inline-block pt-[60px] pb-[90px] md:pt-[90px] md:pb-[180px]">
          <div className="container !max-w-[1140px]">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
              <ServiceGrid
                Icon={DiverseIcon}
                PlusIcon={PlusIcon}
                Title="Diverse algorithm integration"
              />
              <ServiceGrid
                Icon={MultiIcon}
                PlusIcon={PlusIcon}
                Title="Multi strategy portfolios and combined entry signals"
              />
              <ServiceGrid
                Icon={OptimizedIcon}
                PlusIcon={PlusIcon}
                Title="Optimized trade management"
              />
              <ServiceGrid
                Icon={AutomatedIcon}
                PlusIcon={PlusIcon}
                Title="Automated strategy and asset screening"
              />
              <ServiceGrid
                Icon={AIPoweredIcon}
                PlusIcon={PlusIcon}
                Title="AI-Powered trading models"
              />
              <ServiceGrid
                Icon={GlobalIcon}
                PlusIcon={PlusIcon}
                Title="Global asset diversification"
              />
            </div>
          </div>
        </section>

        <section className="w-full inline-block text-center">
          <div className="container !max-w-[1140px]">
            <div className="max-w-[1010px]">
              <TextWithImage
                imageSrc={AskGrid}
                smallHeading="No trading experience yet?"
                title="Let the EpochGPT decide for you."
                imageSrcMobile={AskGrid}
                text="Harness AI with Epoch GPT to create trading strategies tailored to your presences and goals."
                buttonText="Ask EpochGPT"
                buttonLink="/"
                imagePosition="left"
              />
            </div>
            <div className="max-w-[1010px] ml-auto py-[65px] md:py-[180px]">
              <TextWithImage
                imageSrc={ExploreImage}
                smallHeading=""
                title="Collaborate and profit with our community"
                imageSrcMobile={ExploreImage}
                text="Leverage community strategies to trade, sell and share insights with fellow traders."
                buttonText="Explore community"
                buttonLink="/community"
                imagePosition="right"
              />
            </div>
            <div className="max-w-[1010px]">
              <TextWithImage
                imageSrc={CommunityImage}
                smallHeading=""
                title="Real time trading insights"
                imageSrcMobile={CommunityImage}
                text="Access comprehensive, real time analytics to enhance your trading decisions."
                buttonText="Explore Epoch"
                buttonLink="/"
                imagePosition="left"
              />
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
