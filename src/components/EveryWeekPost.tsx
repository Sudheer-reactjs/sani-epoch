// src/app/recent-posts/page.tsx

import Image from "next/image";
import Link from "next/link";
import BlogImage1 from "@/assets/images/Blog1.jpg";
import BlogImage2 from "@/assets/images/Blog2.jpg";
import BlogImage3 from "@/assets/images/Blog3.jpg";
import { format, startOfWeek, subWeeks, isWithinInterval } from "date-fns";

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

const getStartOfWeekAndLastWeek = () => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  const startOfLastWeek = subWeeks(startOfCurrentWeek, 1);
  return { startOfCurrentWeek, startOfLastWeek };
};

const filterBlogsByWeek = (blogs: typeof blogData) => {
  const { startOfCurrentWeek, startOfLastWeek } = getStartOfWeekAndLastWeek();

  return blogs.filter((blog) => {
    const blogDate = new Date(blog.date);
    return isWithinInterval(blogDate, {
      start: startOfLastWeek,
      end: startOfCurrentWeek,
    });
  });
};

const recentBlogs = filterBlogsByWeek(blogData);

export default function RecentPosts() {
  return (
    <div className="flex flex-wrap gap-6">
      {recentBlogs.map((blog) => (
        <div key={blog.id} className="week-blog rounded-lg">
          <Link href={`/blog/posts/${blog.id}`} key={blog.id} className=" relative">
            <Image
              src={blog.image}
              alt={blog.heading}
              className="w-full h-auto rounded-[32px]"
              width={1400}
              height={800}
            />
            <div className="absolute z-[2] bottom-[0px] w-full text-center p-[30px]">
            <div className="bg-white rounded-[90px] text-black text-[14px]  py-[7px] px-[24px] w-max mx-auto md:text-[18px] ">
              {blog.category}
            </div>
              <h2 className="text-white text-[20px] leading-[28px] my-[15px] font-HelveticaNeue md:text-[24px] md:my-[30px]">{blog.heading}</h2> 
              <span className="block text-gray-400 text-[14px] md:text-[18px]">
                {format(new Date(blog.date), "MMM d, yyyy")}    
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
