// src/app/blog/posts/[id]/page.tsx

"use client"; // Add this line to mark the component as a Client Component

import { useParams } from 'next/navigation';
import Image from 'next/image';
import BlogImage1 from '@/assets/images/Blog1.jpg';
import BlogImage2 from '@/assets/images/Blog2.jpg';
import BlogImage3 from '@/assets/images/Blog3.jpg';

// Sample blog data (could be moved to a separate file if needed)
const blogData = [
    {
        id: 1,
        category: "Business",
        image: BlogImage1,
        heading: "A new type of chart — Session volume profile",
        description: "The chart shows volume histograms for the specified sessions, sub-sessions, or time intervals set in the settings.",
        date: "24 Aug, 2024",
      },
      {
        id: 2,
        category: "Charting",
        image: BlogImage2,
        heading: "Empowering the financial education with UFABC",
        description: "Founded in 2005, UFABC initially offered the Bachelor in Science and Technology program.",
        date: "24 Aug, 2024",
      },
      {
        id: 3,
        category: "Charting",
        image: BlogImage3,
        heading: "Synchronized bar replay",
        description: "And we’re finally ready to present you the long-awaited feature — a synchronized Bar Replay!",
        date: "24 Aug, 2024",
      },
      {
        id: 4,
        category: "Business",
        image: BlogImage1,
        heading: "Introducing Trade nation, a new broker on Epochfin",
        description: "Welcome Trade Nation, a newly integrated broker within the TradingView trading ecosystem. Access CFD and spread trading on 1,000+ markets.",
        date: "24 Aug, 2024",
      },
      {
        id: 5,
        category: "Screeners",
        image: BlogImage2,
        heading: "Welcoming ThinkMarkets: new brokerage on TradingView",
        description: "To bring markets closer to your desktops, we’ve expanded our trading offerings and added one more valuable partner to the brokers’ list.",
        date: "24 Aug, 2024",
      },
      {
        id: 6,
        category: "Brokerage",
        image: BlogImage3,
        heading: "Introducing moomoo: new broker on TradingView",
        description: "Description for business blog 1",
        date: "24 Aug, 2024",
      },
      {
        id: 7,
        category: "Screeners",
        image: BlogImage1,
        heading: "Introducing moomoo: new broker on TradingView",
        description: "Description for business blog 1",
        date: "24 Aug, 2024",
      },
      {
        id: 8,
        category: "Mobile",
        image: BlogImage2,
        heading: "Display visuals on the chart from your pane scripts",
        description: "Description for business blog 1",
        date: "24 Aug, 2024",
      },
      {
        id: 9,
        category: "Trade and brokerage", 
        image: BlogImage2,
        heading: "The Leap is back with 250 cash prizes to win",
        description: "Description for business blog 1",
        date: "24 Aug, 2024",
      },
    
];

export default function Post() {
  const { id } = useParams();
  
  const blog = blogData.find((blog) => blog.id === parseInt(id as string));

  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return (
    <main className="pt-[82px] bg-[#F7F7F7] bg-top relative z-[1] pb-[180px]">
    <div className="container">
      <div className="blog-detail">
        <Image
          src={blog.image}
          alt={blog.heading}
          className="w-full h-auto rounded-[24px]"
          width={1000}
          height={1000}
        />
        <div className="blog-detail-content py-[20px] px-[20px]">
          <h1 className="text-black text-[32px] font-HelveticaNeueMedium leading-[40px]">
            {blog.heading}
          </h1>
          <p className="text-black text-[20px] pt-[14px]">{blog.description}</p>
          <span className="text-custom-black text-[20px] mt-[30px] block">
            {blog.date}
          </span>
        </div>  
      </div>
    </div>
    </main>
  );
}
