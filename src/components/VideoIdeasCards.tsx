"use client";
import { NextIcon, PervIcon, SelectDownIcon, SelectUpIcon } from "@/utlis/svg";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogImage1 from "@/assets/images/Blog1.jpg";
import BlogImage2 from "@/assets/images/Blog2.jpg";
import BlogImage3 from "@/assets/images/Blog3.jpg";

// Sample blog data
const blogData = [
  {
    id: 1,
    category: "Editors’ picks",
    image: BlogImage1,
    heading: "A new type of chart — Session volume profile",
    date: "2024-08-24",
  },
  {
    id: 2,
    category: "Popular",
    image: BlogImage2,
    heading: "Empowering the financial education with UFABC",
    date: "2024-08-20",
  },
  {
    id: 3,
    category: "Editors’ picks",
    image: BlogImage3,
    heading: "Synchronized bar replay",
    date: "2024-08-16",
  },
  {
    id: 4,
    category: "Popular",
    image: BlogImage1,
    heading: "Introducing Trade nation, a new broker on Epochfin",
    date: "2024-08-22",
  },
  {
    id: 5,
    category: "Editors’ picks",
    image: BlogImage2,
    heading: "Welcoming ThinkMarkets: new brokerage on TradingView",
    date: "2024-08-10",
  },
  {
    id: 6,
    category: "Popular",
    image: BlogImage3,
    heading: "Introducing moomoo: new broker on TradingView",
    date: "2024-08-05",
  },
  {
    id: 7,
    category: "Editors’ picks",
    image: BlogImage1,
    heading: "Introducing moomoo: new broker on TradingView",
    date: "2024-08-24",
  },
  {
    id: 8,
    category: "Popular",
    image: BlogImage2,
    heading: "Display visuals on the chart from your pane scripts",
    date: "2024-08-24",
  },
  {
    id: 9,
    category: "Editors’ picks",
    image: BlogImage2,
    heading: "The Leap is back with 250 cash prizes to win",
    date: "2024-08-24",
  },
];

const categories = [
  "All",
  "Editors’ picks",
  "Popular",

];

export default function VideoIdeasCard() {
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sliderKey, setSliderKey] = useState(0); // Key for forcing slider remount
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<Slider | null>(null); // Reference to the slider

  const sliderBlogSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
      { 
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
      breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrow: false,
            dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
            arrow: false,
            dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Force slider to update its position when the active tab changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide to reset the position
    }
    // Force slider to re-render by updating the key
    setSliderKey((prev) => prev + 1);
  }, [activeTab]);

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
        className="blog-card-custom slider-card-custom bg-custom-gray rounded-[32px] p-[10px] cursor-pointer"
      >
        <div className="relative">
          <Image
            src={blog.image}
            alt={blog.heading}
            className="w-full h-auto rounded-[24px]"
            width={1000}
            height={1000} 
          />
        </div>
        <div className="blog-list py-[20px] px-[20px]">
          <h3 className="text-black text-center line-clamp-2 font-HelveticaNeueMedium leading-[24px] text-[20px] md:leading-[32px] md:min-h-[58px] md:text-[24px] md:text-left">
            {blog.heading}
          </h3>
          <span className="text-custom-black text-center text-[14px] mt-[10px] block md:mt-[15px]  md:text-[16px]  md:text-left">
            {blog.date}
          </span>
        </div>
      </Link>
    )),
  }));

  return (
    <div className="tabs-container  py-[35px] border-b border-custom-black-10 bottom-1 md:px-[20px] lg:py-[90px]">
        <div className="flex flex-wrap gap-[20px] lg:flex-nowrap lg:items-center lg:justify-between">
       <h2 className=" w-full whitespace-nowrap text-center lg:text-left lg:w-max">Video ideas</h2>
      <div className="block w-full lg:hidden relative">
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
      <div className="hidden lg:flex items-center relative">
        <div
          ref={tabsContainerRef}
          className="flex flex-wrap gap-[15px] relative "
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
      </div>
      </div>
      {/* Blog posts content */}
      <div className="tab-content slick-arrow-custom slider-dots slider-dots-bg item-gap pt-[30px] lg:pt-[60px]">
        <Slider ref={sliderRef} key={sliderKey} {...sliderBlogSettings}>
          {categoryLabels[activeTab].content}
        </Slider>
      </div>
    </div>
  );
}
