// src/app/blog/posts/[id]/page.tsx
"use client"; // Mark the component as a Client Component
import { useParams } from "next/navigation";
import {
  SocialIconFour,
  SocialIconOne,
  SocialIconThree,
  SocialIcontwo,
} from "@/utlis/svg";
import { Box, Breadcrumbs, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { blogDetail } from "@/utlis/blogDetail";
import YouMayAlosBlog from "@/components/YouMayAlosBlog";
import Link from "next/link";

export default function Post() {
  const { id } = useParams();
  
  const blog = blogDetail.find((blog) => blog.id === parseInt(id as string));

  if (!blog) {
    return (
      <main className="bg-[#F7F7F7] bg-top relative z-[1] pt-[200px] pb-[300px] text-center">
        <p>Blog post not found</p>
      </main>
    );
  }

  return (
    <main className="singl-bolg-page bg-[#F7F7F7] bg-top relative z-[1] pb-[140px] md:pb-[185px] lg:pb-[180px] pt-[200px]">
     {/* Breadcrumb */}
     <div className="container py-[20px]">
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/community" className="text-blue-500 hover:underline">
            Community
          </Link> 
          <Typography color="text.primary">{blog.heading}</Typography>
        </Breadcrumbs> 
      </div>
      {/*Blog Detail*/}
      <section className=" relative z-[1]">
       
        <div className=" pt-[100px] left-0 right-0 pb-[70px] px-[20px] md:px-[20px]">
          <div className="container">
            <div className=" rounded-[90px] text-black text-[14px]  py-[7px] px-[24px] w-max md:text-[18px] ">
              {blog.category}
            </div>
            <h1 className="max-w-[700px]  lg:!leading-[76px] my-[10px] md:my-[30px]">
              {blog.heading}
            </h1>
            <p className=" !text-[14px] !mb-[0] md:!text-[20px] font-HelveticaNeueThin mt-[15px] md:mt-[0]">
              {blog.date}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[35px] pb-[70px] md:py-[90px]  lg:py-[130px]">
        <div className="container !max-w-[890px]">
          <h2>{blog.subheading}</h2>
          <p>{blog.topdes}</p>
          <Image
            src={blog.imagedes}
            alt=""
            width={1000}
            height={1000}
            className="rounded-[32px] my-[35px] md:my-[70px]"
          />
          <div className="blogtext-16 grid grid-cols-1 md:gap-[30px] md:grid-cols-2  ">
            <p>{blog.leftcoldis}</p>
            <p>{blog.righttcoldis}</p>
          </div>
        </div>
      </section>


    </main>
  );
}
