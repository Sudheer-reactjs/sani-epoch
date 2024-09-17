"use client";
import { CommentIcon, LikeIcon, NextIcon, PervIcon, SelectDownIcon, SelectUpIcon, TagIcon } from "@/utlis/svg";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from "@/utlis/blogData";

interface PineScriptsCardProps {
  blogData: typeof blogData;
}

const categories = [
  "All",
  "Editors’ picks",
  "Popular",
  "Recent",
];

const PineScriptsCard: React.FC<PineScriptsCardProps> = ({ blogData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sliderKey, setSliderKey] = useState(0); // Key for forcing slider remount
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<Slider | null>(null); // Reference to the slider

  const sliderBlogSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    label: `${category} (${
      blogData.filter(
        (blog) => category === "All" || blog.category === category
      ).length
    })`,
    content: filteredBlogs(category).map((blog) => (
      <Link
      href={`/community/posts/${blog.id}`} 
        key={blog.id}
        className="blog-card-custom slider-card-custom bg-custom-gray rounded-[32px] p-[10px] cursor-pointer"
      >
        <div className="relative">
          <Image
            src={blog.image}
            alt={blog.heading}
            className="w-full h-auto rounded-[24px] !aspect-[1/.577]"
            width={1000}
            height={1000}
          />
          <div className="tag-blog">
          <TagIcon />
          </div>
        </div>
        <div className="blog-list py-[20px] px-[20px]">
          <h3 className="flex items-center text-black text-center line-clamp-2 font-HelveticaNeueMedium leading-[24px] text-[20px] md:leading-[32px] md:min-h-[58px] md:text-[24px] md:text-left">
            {blog.heading}
          </h3>
          <p className="text-[14px] leading-[22px] text-custom-black text-left mt-[10px] md:mt-[15px] line-clamp-4">
            {blog.description}
          </p>
          <div className="flex justify-between items-center mt-[15px]">     
            <div>
              <p className="text-[14px] leading-[22px] text-custom-black text-left">by {blog.author}</p>
              <span className="text-custom-black text-[14px] block md:text-[16px] text-left">
                {blog.date}
              </span>
            </div>
            <div className="post-meta flex justify-between items-center  gap-[10px]">
            <span className="bg-[#F7F7F7] rounded-[4px] py-[6px] px-[6px] gap-[4px] flex justify-between items-center text-[12px] leading-[22px] text-custom-black text-left"><CommentIcon />{blog.comments !== undefined ? blog.comments : 0}</span>
            <span className="bg-[#F7F7F7] rounded-[4px] py-[6px] px-[6px] gap-[4px] flex justify-between items-center text-[12px] leading-[22px] text-custom-black text-left"><LikeIcon />{blog.likes !== undefined ? blog.likes : 0}</span>
            </div>
          </div>
        </div>
      </Link>
    )),
  }));

  return (
    <div className="tabs-container py-[35px] md:px-[20px] lg:py-[90px] !pb-0">
      <div className="flex flex-wrap flex-col gap-[20px] lg:flex-nowrap lg:justify-between lg:gap-[30px]">
        <h2 className=" w-full whitespace-nowrap text-center lg:text-left lg:w-max lg:text-[48px]">
        Pine scripts
        </h2>
        {/* select for desktop */}
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
                } rounded-[90px] py-[6px] px-[16px] text-[16px] whitespace-nowrap md:text-[20px] md:py-[9px] md:px-[26px]`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Blog posts content */}
      <div className="tab-content slick-arrow-custom slider-dots slider-dots-bg item-gap pt-[30px] lg:pt-[100px]">
        <Slider ref={sliderRef} key={sliderKey} {...sliderBlogSettings}>
          {categoryLabels[activeTab].content}
        </Slider>
      </div>
    </div>
  );
};

export default PineScriptsCard;  