"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TextWithImage from "@/components/TextWithImage";
import DummyImage from "@/assets/images/dummy.jpg";
import Image from "next/image";
import VideoModal from "@/components/VideoModal";
import { PlusIcon, serviceIcon, YoutubeIcon } from "@/utlis/svg";
import ServiceGrid from "@/components/ServiceGrid";

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
      <section className="w-full inline-block text-center pt-[40px] pb-[30px] md:pt-[110px] md:pb-[120px]">
        <div className="container">
          <h5 className="text-[#757575] text-[16px] md:text-[20px]">
            Elevate your <b>trading</b> with Epochfin
          </h5>
          <h1 className="font-[500] ml-auto mr-auto tracking-[-1px] mt-[4px] mb-[25px] text-[36px] leading-[40px] max-w-[350px] md:tracking-[-2px]  md:mt-[18px]  md:mb-[58px] md:max-w-[600px] md:text-[68px] md:leading-[68px]">
            All in one algorithmic trading platform
          </h1>
          <div className="flex justify-center">
            <Link className="button-black !px-[35px] " href="/get-started">
              Det Started
              <span className="w-[24px] h-[24px] bg-[#fff] inline-block"></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full inline-block">
        <div className="container">
          <div className="relative cursor-pointer" onClick={openModal}>
            <Image
              src={DummyImage}
              alt="A dummy image"
              className="rounded-[28px] border-[10px] border-solid border-[rgba(17,17,17,0.20)] "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <YoutubeIcon />
            </div>
          </div>
          <div className="max-w-[290px] ml-auto mr-auto text-center relative mt-[-120px] md:max-w-[710px]">
            <h2>
              Access elite trading strategies <br></br> without any coding
              experience required.
            </h2>
            <p className="text-[#757575] max-w-[520px] mx-auto mt-[15px] mb-[30px] md:mb-[40px] md:text-[20px]">
              Whether you’re new to trading or a seasoned researcher, our tools
              cater to all your needs.
            </p>
            <div className="flex justify-center">
              <Link
                className="button-black !px-[24px] md:!px-[35px] "
                href="/get-started"
              >
                Create your strategy
                <span className="w-[24px] h-[24px] bg-[#fff] inline-block"></span>
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
              Icon={serviceIcon}
              PlusIcon={PlusIcon}
              Title="Diverse algorithm integration"
            />
            <ServiceGrid
              Icon={serviceIcon}
              PlusIcon={PlusIcon}
              Title="Multi strategy portfolios and combined entry signals"
            />
            <ServiceGrid
              Icon={serviceIcon}
              PlusIcon={PlusIcon}
              Title="Optimized trade management"
            />
            <ServiceGrid
              Icon={serviceIcon}
              PlusIcon={PlusIcon}
              Title="Automated strategy and asset screening"
            />
            <ServiceGrid
              Icon={serviceIcon}
              PlusIcon={PlusIcon}
              Title="AI-Powered trading models"
            />
            <ServiceGrid
              Icon={serviceIcon}
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
            imageSrc={DummyImage}
            smallHeading="No trading experience yet?"
            title="Let the EpochGPT decide for you."
            imageSrcMobile={DummyImage}
            text="Harness AI with Epoch GPT to create trading strategies tailored to your presences and goals."
            buttonText="Ask EpochGPT"
            buttonLink="/"
            imagePosition="left"
          />
          </div>
          <div className="max-w-[1010px] ml-auto py-[65px] md:py-[180px]">
          <TextWithImage
            imageSrc={DummyImage}
            smallHeading=""
            title="Collaborate and profit with our community"
            imageSrcMobile={DummyImage}
            text="Leverage community strategies to trade, sell and share insights with fellow traders."
            buttonText="Explore community"
            buttonLink="/"
            imagePosition="right"
          />
          </div>
          <div className="max-w-[1010px]">
          <TextWithImage
            imageSrc={DummyImage}
            smallHeading=""
            title="Real time trading insights"
            imageSrcMobile={DummyImage}
            text="Access comprehensive, real time analytics to enhance your trading decisions."
            buttonText="Explore Epoch"
            buttonLink="/"
            imagePosition="left"
          />
          </div>
        </div>
      </section>
    </>
  );
}
