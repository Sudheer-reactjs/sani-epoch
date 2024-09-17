"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/utlis/blogData";

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
