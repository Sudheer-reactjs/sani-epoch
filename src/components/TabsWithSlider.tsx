"use client";
import { NextIcon, PervIcon } from "@/utlis/svg";
import { useState, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import BlogImage1 from '@/assets/images/Blog1.jpg';
import BlogImage2 from '@/assets/images/Blog2.jpg';
import BlogImage3 from '@/assets/images/Blog3.jpg';

// Sample blog data
const blogData = [
  {
    id: 1,
    category: "Business",
    image: BlogImage1,
    heading: "A new type of chart — Session volume profile",
    description:"The chart shows volume histograms for the specified sessions, sub-sessions, or time intervals set in the settings.",
    date: "2024-08-24",
  },
  {
    id: 2,
    category: "Charting",
    image: BlogImage2,
    heading: "Empowering the financial education with UFABC",
    description: "Founded in 2005, UFABC initially offered the Bachelor in Science and Technology program.",
    date: "2024-08-20",
  },
  {
    id: 3,
    category: "Charting",
    image: BlogImage3,
    heading: "Synchronized bar replay",
    description: "And we re finally ready to present you the long-awaited feature — a synchronized Bar Replay!",
    date: "2024-08-16",
  },
  {
    id: 4,
    category: "Business",
    image: BlogImage1,
    heading: "Introducing Trade nation, a new broker on Epochfin",
    description: "Welcome Trade Nation, a newly integrated broker within the TradingView  trading ecosystem. Access CFD and spread trading on 1,000+ markets.",
    date: "2024-08-22",
  },
  {
    id: 5,
    category: "Screeners",
    image: BlogImage2,
    heading: "Welcoming ThinkMarkets: new brokerage on TradingView",
    description: "To bring markets closer to your desktops, we’ve expanded our trading  offerings and added one more valuable partner to the brokers’ list.",
    date: "2024-08-10",
  },
  {
    id: 6,
    category: "Brokerage",
    image: BlogImage3,
    heading: "Introducing moomoo: new broker on TradingView",
    description: "Description for business blog 1",
    date: "2024-08-05",
  },
  {
    id: 7,
    category: "Screeners",
    image: BlogImage1,
    heading: "Introducing moomoo: new broker on TradingView",
    description: "Description for business blog 1",
    date: "2024-08-24",
  },
  {
    id: 8,
    category: "Mobile",
    image: BlogImage2,
    heading: "Display visuals on the chart from your pane scripts",
    description: "Description for business blog 1",
    date: "2024-08-24",
  },
  {
    id: 9,
    category: "Trade and brokerage", 
    image: BlogImage2,
    heading: "The Leap is back with 250 cash prizes to win",
    description: "Description for business blog 1",
    date: "2024-08-24",
  },
];

const categories = [
  "All",
  "Business",
  "Charting",
  "Mobile",
  "Screeners",
  "Trade and brokerage",
  "Demo",
  "Demo2",
  "Demo3"
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    tabsContainerRef.current?.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    tabsContainerRef.current?.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  };

  // Filter blog posts by category
  const filteredBlogs = (category: string) => {
    if (category === 'All') return blogData;
    return blogData.filter((blog) => blog.category === category);
  };

  // Get category labels with counts
  const categoryLabels = categories.map((category) => ({
    label: `${category} (${blogData.filter(
      (blog) => category === 'All' || blog.category === category
    ).length})`,
    content: filteredBlogs(category).map((blog) => (
      <Link href={`/blog/posts/${blog.id}`} key={blog.id}
      className="blog-card-custom bg-custom-gray rounded-[32px] py-[12px] px-[6px] md:py-[16px] md:px-[18px] cursor-pointer"
      >
          <div className="relative">
            <Image
              src={blog.image}
              alt={blog.heading}
              className="w-full h-auto rounded-[24px]"
              width={1000}
              height={1000}
            />
            <div className="absolute bg-black rounded-[90px] text-white text-[14px] top-[15px] py-[7px] px-[24px] left-[15px]  md:top-[25px]  md:left-[25px] md:text-[18px]">
              {blog.category}
            </div>
          </div>
          <div className="blog-list py-[20px] px-[20px]">
            <h3 className="text-black  font-HelveticaNeueMedium leading-[24px] text-[20px] md:leading-[32px] md:text-[24px]">
              {blog.heading}
            </h3>
            <p className="text-black text-[16px] pt-[14px] md:text-[20px]">{blog.description}</p>
            <span className="text-custom-black text-[14px] mt-[10px] block md:mt-[30px]  md:text-[20px] ">
              {blog.date}
            </span>
          </div>
      </Link>
    )),
  }));

  return (
      <div className="tabs-container">
        <div className="flex items-center relative before-bg">
          <button
            onClick={scrollLeft}
            className="arrow-button p-0 bg-transparent absolute left-0 top-0 z-[2]"
          >
            <PervIcon />
          </button>
          <div
            ref={tabsContainerRef}
            className="flex space-x-2 py-0 overflow-x-auto scrollbar-hide relative custom-scrollbar pr-[30px] pl-[10px] ml-[30px] w-[calc(100%-60px)] md:pl-[40px] md:pr-[60px] md:space-x-4"
          >
            {categoryLabels.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index
                    ? "bg-black text-white"
                    : "bg-white text-[rgba(0,0,0,0.65)] "
                } rounded-[90px] py-[6px] px-[16px] text-[16px] whitespace-nowrap md:text-[20px] md:py-[10px] md:px-[26px]`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="arrow-button  p-0 bg-transparent absolute right-0 top-0 z-[2]"
          >
            <NextIcon />
          </button>
        </div>
        <div className="tab-content-custom tab-content flex flex-wrap gap-[25px] mt-[15px] mb-[60px] md:gap-[35px] md:mt-[45px] md:mb-[100px] lg:mb-[180px]">
          {categoryLabels[activeTab].content}
        </div>
      </div>
  );
}
