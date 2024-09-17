"use client";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/utlis/blogData";
import { useState } from "react";
import { format, subMonths, isWithinInterval } from "date-fns";

interface LastMonthPostProps {
  blogData: typeof blogData;
}

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

const LastMonthPost: React.FC<LastMonthPostProps> = ({  }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(8);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 8); 
  };

  return (
    <div>
      {recentBlogs.length > 0 ? (
        <div className="flex flex-wrap gap-x-[10px] md:gap-x-[0px]">
          {recentBlogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="last-month-blog w-[calc(50%-5px)] py-[15px] md:py-[20px]  lg:py-[40px] md:w-[50%]"
            >
              <Link
                href={`/blog/posts/${blog.id}`}
                className=" relative flex w-full flex-wrap md:flex-nowrap md:items-center"
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
      ) : (
        <p className="text-gray-600 text-lg">No recent posts available.</p>
      )}
    </div>
  );
}

export default LastMonthPost;