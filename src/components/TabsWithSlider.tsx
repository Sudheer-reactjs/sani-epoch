// components/TabsWithSlider.tsx
"use client";
import { NextIcon, PervIcon, SelectDownIcon, SelectUpIcon } from "@/utlis/svg";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";  
import { blogData } from "@/utlis/blogData";

const categories = [
  "All",
  "Business",
  "Charting",
  "Mobile",
  "Screeners",
  "Trade and brokerage",
  "Demo",
  "Demo2",
  "Demo3",
];
 
interface TabsWithSliderProps {
  blogData: typeof blogData;
}

const TabsWithSlider: React.FC<TabsWithSliderProps> = ({ blogData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    if (category === "All") return blogData;
    return blogData.filter((blog) => blog.category === category);
  };

  // Get category labels with counts
  const categoryLabels = categories.map((category) => ({
    label: `${category} (${blogData.filter(
      (blog) => category === "All" || blog.category === category
    ).length})`,
    content: filteredBlogs(category).map((blog) => (
      <Link
        href={`/blog/posts/${blog.id}`}
        key={blog.id}
        className="inline-block w-full blog-card-custom bg-custom-gray rounded-[32px] py-[12px] px-[6px] md:py-[16px] md:px-[18px] cursor-pointer"
      >
        <div className="relative">
          <Image
            src={blog.image}
            alt={blog.heading}
            className="w-full h-auto rounded-[24px]"
            width={1000}
            height={1000}
          />
          <div className="absolute bg-black rounded-[90px] text-white text-[14px] top-[15px] py-[7px] px-[24px] left-[15px] md:top-[25px] md:left-[25px] md:text-[18px]">
            {blog.category}
          </div>
        </div>
        <div className="blog-list py-[20px] px-[20px]">
          <h3 className="text-black font-HelveticaNeueMedium leading-[24px] text-[20px] md:leading-[32px] md:text-[24px]">
            {blog.heading}
          </h3>
          <p className="text-black text-[16px] pt-[14px] md:text-[20px] line-clamp-3"> 
            {blog.description}
          </p>
          <span className="text-custom-black text-[14px] mt-[10px] block md:mt-[30px] md:text-[20px]">
            {blog.date}
          </span>
        </div>
      </Link>
    )),
  }));

  return (
    <div className="tabs-container">
      {/* Dropdown for Mobile */}
      <div className="block md:hidden mb-4 relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full bg-white rounded-[90px] py-[12px] px-[24px] text-black text-[18px] flex justify-between items-center text-left"
        >
          {categoryLabels[activeTab].label}
          <span className="material-icons">
            {dropdownOpen ? <SelectUpIcon /> : <SelectDownIcon />}
          </span>
        </button>

        {dropdownOpen && (
          <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-2 z-10 shadow-md">
            {categoryLabels.map((tab, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setDropdownOpen(false);
                }}
                className={`py-1 px-3 cursor-pointer hover:bg-gray-200 ${
                  activeTab === index ? "bg-gray-100 font-semibold " : ""
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tabs for desktop */}
      <div className="hidden md:flex items-center relative before-bg">
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
          className="arrow-button p-0 bg-transparent absolute right-0 top-0 z-[2]"
        >
          <NextIcon />
        </button>
      </div>

      {/* Blog posts content */}
      <div className="tab-content-custom tab-content flex flex-wrap gap-[25px] mt-[25px] mb-[60px] md:gap-[35px] md:mt-[45px] md:mb-[100px] lg:mb-[180px]">
        {categoryLabels[activeTab].content}
      </div>
    </div>
  );
}
export default TabsWithSlider;