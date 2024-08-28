"use client";
import Image from "next/image";
import Link from "next/link";
import BlogImage1 from "@/assets/images/Blog1.jpg";
import BlogImage2 from "@/assets/images/Blog2.jpg";
import BlogImage3 from "@/assets/images/Blog3.jpg";
import { useState } from "react";
import { format, subMonths, isWithinInterval } from "date-fns";

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
      "Welcome Trade Nation, a newly integrated broker within the TradingView  trading ecosystem. Access CFD and spread trading on 1,000+ markets.",
    date: "2024-08-22",
  },
  {
    id: 5,
    category: "Screeners",
    image: BlogImage2,
    heading: "Welcoming ThinkMarkets: new brokerage on TradingView",
    description:
      "To bring markets closer to your desktops, we’ve expanded our trading  offerings and added one more valuable partner to the brokers’ list.",
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

const filterBlogsByLastMonth = (blogs: typeof blogData) => {
  const today = new Date();
  const oneMonthAgo = subMonths(today, 1);

  return blogs.filter((blog) => {
    const blogDate = new Date(blog.date);
    return isWithinInterval(blogDate, {
      start: oneMonthAgo,
      end: today,
    });
  });
};

const recentBlogs = filterBlogsByLastMonth(blogData);

export default function RecentPosts() {
  const [visibleBlogs, setVisibleBlogs] = useState(8);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 8);
  };

  return (
    <div className="flex flex-wrap gap-x-[10px] md:gap-x-[0px]">
      {recentBlogs.slice(0, visibleBlogs).map((blog) => (
        <div
          key={blog.id}
          className="last-month-blog w-[calc(50%-5px)] py-[15px] md:py-[20px]  lg:py-[40px] md:w-[50%]"
        >
          <Link
            href={`/blog/posts/${blog.id}`}
            className=" relative flex flex-wrap md:flex-nowrap md:items-center"
          >
            <div className="w-full md:max-w-[150px] lg:max-w-[184px]">
              <Image
                src={blog.image}
                alt={blog.heading}
                className="w-full h-auto rounded-[18px] aspect-square object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="text-left w-full  md:pl-[15px] lg:pl-[30px]">
              <div className="text-black text-[14px] mt-[15px] font-HelveticaNeueMedium md:text-[16px] md:mt-[0]">
                {blog.category}
              </div>
              <h2 className=" text-[16px] leading-[20px] mt-[5px] mb-[10px] font-HelveticaNeueMedium md:mt-[10px] md:mb-[15px] md:leading-[24px] lg:leading-[32px] md:text-[20px] lg:text-[24px]">
                {blog.heading}
              </h2>
              <span className="block text-custom-black text-[14px] md:text-[18px]">
                {format(new Date(blog.date), "MMM d, yyyy")}
              </span>
            </div>
          </Link>
        </div>
      ))}

      {visibleBlogs < recentBlogs.length && (
        <div className="load-button flex justify-center w-full mt-[15px] md:mt-[90px]">
          <button
            onClick={loadMoreBlogs}
            className="button-black !font-HelveticaNeueMedium !px-[35px] md:!px-[55px] !bg-[#f7f7f7]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
