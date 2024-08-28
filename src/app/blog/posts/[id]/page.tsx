// src/app/blog/posts/[id]/page.tsx

"use client"; // Add this line to mark the component as a Client Component

import { useParams } from "next/navigation";
import {
  SocialIconFour,
  SocialIconOne,
  SocialIconThree,
  SocialIcontwo,
} from "@/utlis/svg";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import BannerImage from "@/assets/images/blog-banner.jpg";
import disImage from "@/assets/images/desimage.jpg";
import LeftGridImage from "@/assets/images/left-grid.png";
import YouMayAlosBlog from "@/components/YouMayAlosBlog";

// Sample blog data (could be moved to a separate file if needed)
const blogData = [
  {
    id: 1,
    BannerImage: BannerImage,
    category: "Business",
    heading: "Empowering the financial education with UFABC",
    date: "24 Aug, 2024",
    subheading:
      "The more, the merrier — that’s what we thought and launched The Leap paper trading competition,  now featuring not 5, not 6, but a whopping 250 places that are  guaranteed to receive cash prizes! ",
    topdes:
      "You heard that right — we’re  splitting up our $45,000 prize pool across more winners to celebrate the  skills and knowledge of more TradingViewers. It all starts on August 1, don’t miss out! In the course of our paper trading competition, traders will put their  powers to the test — in this 30-day showdown, they will compete against  each other, all while learning and practicing. No money deposited, no  brokerage account, no hidden costs — The Leap is entirely risk-free as  it happens within our paper trading tool. The only thing that matters is  how much profit you have on your paper trading account by the end of  the competition.",
    imagedes: disImage,
    leftcoldis:
      "Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    righttcoldis:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.",
    girdimage: LeftGridImage,
    subheadinggrid:
      "The Leap paper trading competition,  now featuring not 5, not 6, but a whopping 250 places that are  guaranteed to receive cash prizes! ",
    disgrid:
      "No money deposited, no  brokerage account, no hidden costs — The Leap is entirely risk-free as  it happens within our paper trading tool. The only thing that matters is  how much profit you have on your paper trading account by the end of  the competition.",
  },
];

export default function Post() {
  const { id } = useParams();

  const blog = blogData.find((blog) => blog.id === parseInt(id as string));

  if (!blog) {
    return <main className=" bg-[#F7F7F7] bg-top relative z-[1] pt-[200px] pb-[300px] text-center"><p>Blog post not found</p></main>; 
  }

  return (
    <main className="singl-bolg-page bg-[#F7F7F7] bg-top relative z-[1] pb-[140px]  md:pb-[185px]  lg:pb-[180px]">
      <section className="banner-ingo relative z-[1]">
        <Image
          src={BannerImage}
          alt=""
          width={2500}
          height={2500}
          className="max-h-[900px] min-h-[470px]  md:min-h-[600px] object-cover"
        />
        <div className="absolute w-full bottom-0 pt-[100px] left-0 right-0 pb-[70px] px-[20px] md:px-[20px]">
          <div className="container">
            <div className="bg-white rounded-[90px] text-black text-[14px]  py-[7px] px-[24px] w-max md:text-[18px] ">
              {blog.category}
            </div>
            <h1 className="max-w-[700px] text-white lg:!leading-[76px] my-[10px] md:my-[30px]">
              {blog.heading}
            </h1>
            <p className="text-white !text-[14px] !mb-[0] md:!text-[20px] font-HelveticaNeueThin mt-[15px] md:mt-[0]">
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
      <section className="bg-white py-[60px] md:py-[100px] lg:py-[175px]">
        <div className="container !max-w-[1200px]">
          <div className="grid grid-cols-1 gap-[30px] items-center md:grid-cols-2 ">
            <Image
              src={blog.girdimage}
              alt=""
              width={1000}
              height={1000}
              className="rounded-[32px] lg:pr-[30px]"
            />
            <div className="blogtext-16   ">
              <h2 className="text-center md:text-left">{blog.subheadinggrid}</h2>
              <p className="text-center md:text-left">{blog.disgrid}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px] !pb-0 md:py-[90px]">
        <div className="container !max-w-[1200px]">
          <div className="w-full max-w-[990px] mx-auto text-center">
            <p>
              You heard that right — we’re splitting up our $45,000 prize pool
              across more winners to celebrate the skills and knowledge of more
              TradingViewers. It all starts on August 1, don’t miss out! In the
              course of our paper trading competition, traders will put their
              powers to the test — in this 30-day showdown, they will compete
              against each other, all while learning and practicing.
            </p>
            <p>
              No money deposited, no brokerage account, no hidden costs — The
              Leap is entirely risk-free as it happens within our paper trading
              tool. The only thing that matters is how much profit you have on
              your paper trading account by the end of the competition.
            </p>
          </div>
          <Box className="custom-p-0 border-custom-black-10 border-t-[1px] flex gap-[15px] p-0 mt-[50px] pt-[35px] justify-center md:mt-[60px] md:pt-[60px]">
            <IconButton
              href="https://facebook.com"
              target="_blank"
              color="primary"
            >
              <SocialIconOne />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              color="primary"
            >
              <SocialIcontwo />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              color="primary"
            >
              <SocialIconThree />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              color="primary"
            >
              <SocialIconFour />
            </IconButton>
          </Box>
        </div>
      </section>
      <section className="py-[60px] md:py-[100px] lg:py-[160px]">
        <div className="container !max-w-[1200px]">
          <h2 className="text-24 text-center md:!mb-[55px]">
            You may also like to read
          </h2>
          <YouMayAlosBlog />
        </div>
      </section>
    </main>
  );
}
