import React from 'react'
import CommunityCardSlider from '@/components/CommunityCardSlider'
import TradeIdeasCard from '@/components/TradeIdeasCard'
import EducationalIdeasCard from '@/components/EducationalIdeasCard'
import VideoIdeasCard from '@/components/VideoIdeasCards'
import PineScriptsCard from '@/components/PineScriptsCard'
import { blogData } from "@/utlis/blogData"; // Import your static data or fetch data here

export default async function Page() {
  // Simulate fetching data
  const communityPosts = blogData.filter((blog) => blog.mainCategory === "Community");

  return (
    <>
       <main className="bg-[#F7F7F7] community-footer-bg bg-top relative z-[1] "> 
       
        <section className=" text-center pt-[115px] pb-[20px] md:pt-[150px] md:pb-[20px] lg:pt-[140px] lg:pb-[30px]">
          <div className="container">
            <h1 className="">Epoch Community</h1>
          </div>
        </section> 

        {/*Trade Ideas Blog*/}
        <section className="bg-communit text-black">
          <div className="container !max-w-[1664px]">
          <TradeIdeasCard blogData={communityPosts} />
          </div>
        </section>  
        
        {/*Educational Ideas Blog*/}
        <section className="bg-communit text-black">
          <div className="container !max-w-[1664px]">
            <EducationalIdeasCard blogData={communityPosts} /> 
          </div>
        </section> 
        
         {/*Video Ideas Blog*/} 
        <section className="bg-communit text-black">
          <div className="container !max-w-[1664px]">
            <VideoIdeasCard blogData={communityPosts} />
          </div>
        </section> 
        
         {/*Pine Scripts Blog*/}
        <section className="bg-communit text-black pb-[70px] md:pb-[100px]   lg:pb-[160px]">
          <div className="container !max-w-[1664px]">
            <PineScriptsCard blogData={communityPosts} />
          </div>
        </section> 

        <section className="bg-community bg-black text-center pt-[70px] pb-[200px] md:pt-[100px] md:pb-[260px] lg:pt-[160px] lg:pb-[282px]">
          <div className="container">
           
            <CommunityCardSlider />
          </div>
        </section>

      </main>
    </>
  )
}
