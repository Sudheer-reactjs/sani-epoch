"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogImage1 from "@/assets/images/Blog1.jpg";
import BlogImage2 from "@/assets/images/Blog2.jpg";
import BlogImage3 from "@/assets/images/Blog3.jpg";

// Sample blog data
const blogData = [
  {
    id: 1,
    category: "Business",
    image: BlogImage1,
    heading: "A new type of chart — Session volume profile",
    description:
      "The chart shows volume histograms for the specified sessions, sub-sessions, or time intervals set in the settings.",
    date: "2024-08-24",
  },
  {
    id: 2,
    category: "Charting",
    image: BlogImage2,
    heading: "Empowering the financial education with UFABC",
    description:
      "Founded in 2005, UFABC initially offered the Bachelor in Science and Technology program.",
    date: "2024-08-20",
  },
  {
    id: 3,
    category: "Charting",
    image: BlogImage3,
    heading: "Synchronized bar replay",
    description:
      "And we re finally ready to present you the long-awaited feature — a synchronized Bar Replay!",
    date: "2024-08-16",
  },
  {
    id: 4,
    category: "Business",
    image: BlogImage1,
    heading: "Introducing Trade nation, a new broker on Epochfin",
    description:
      "Welcome Trade Nation, a newly integrated broker within the TradingView trading ecosystem. Access CFD and spread trading on 1,000+ markets.",
    date: "2024-08-22",
  },
  {
    id: 5,
    category: "Screeners",
    image: BlogImage2,
    heading: "Welcoming ThinkMarkets: new brokerage on TradingView",
    description:
      "To bring markets closer to your desktops, we’ve expanded our trading offerings and added one more valuable partner to the brokers’ list.",
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

export default function YouMayAlosBlog() {
  // Limit the number of blog posts shown to 3 for the "You May Also Like" section
  const relatedBlogs = blogData.slice(0, 3); // Adjust this logic if needed

  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[35px] md:mt-[45px] ">
      {relatedBlogs.map((blog) => (
        <Link
          href={`/blog/posts/${blog.id}`}
          key={blog.id}
          className="blog-card-custom bg-custom-gray rounded-[32px] py-[12px] px-[6px] md:py-[16px] md:px-[18px] cursor-pointer"
        >
          <div className="relative">
            <Image
              src={blog.image}
              alt={blog.heading}
              className="w-full h-auto rounded-[24px] aspect-square object-cover"
              width={1000}
              height={1000}
            />
            <div className="absolute bg-black rounded-[90px] text-white text-[14px] top-[15px] py-[7px] px-[24px] left-[15px]  md:top-[25px]  md:left-[25px] md:text-[18px]">
              {blog.category}
            </div>
          </div>
          <div className="blog-list py-[20px] px-[20px]">
            <h3 className="text-black font-HelveticaNeueMedium leading-[24px] text-[20px] md:leading-[32px] md:text-[24px]">
              {blog.heading}
            </h3>
            <span className="text-custom-black text-[14px] mt-[10px] block md:mt-[30px]  md:text-[20px]">
              {blog.date}
            </span>
          </div>
        </Link> 
      ))}
    </div>
  );
}
