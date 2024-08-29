import React from 'react'
import CommunityCardSlider from '@/components/CommunityCardSlider'
import TradeIdeasCard from '@/components/TradeIdeasCard'
import EducationalIdeasCard from '@/components/EducationalIdeasCard'
import VideoIdeasCard from '@/components/VideoIdeasCards'
import PineScriptsCard from '@/components/PineScriptsCard'


export default function page() {
  return (
    <>
       <main className="bg-[#F7F7F7] footer-bg bg-top relative z-[1] pb-[140px]  md:pb-[185px]  lg:pb-[180px]">
        <section className="bg-community bg-black text-center pt-[115px] pb-[104px] md:pt-[150px] md:pb-[200px] lg:pt-[180px] lg:pb-[252px]">
          <div className="container">
            <h4 className="text-[#757575] font-HelveticaNeue mb-[7px] text-[16px] md:text-xl  md:mb-[20px]">
            Epoch community
            </h4>
            <h1 className="text-white">Feel the love in <br></br> Epoch community</h1>
            <CommunityCardSlider />
          </div>
        </section> 
        <section className="bg-communit text-black">
          <div className="container !max-w-[1664px]">
            <TradeIdeasCard />
          </div>
        </section> 
        <section className="bg-communit text-black">
          <div className="container !max-w-[1664px]">
            <EducationalIdeasCard />
          </div>
        </section> 
        <section className="bg-communit text-black">
          <div className="container !max-w-[1664px]">
            <VideoIdeasCard />
          </div>
        </section> 
        <section className="bg-communit text-black pb-[70px] md:pb-[100px]   lg:pb-[160px]">
          <div className="container !max-w-[1664px]">
            <PineScriptsCard />
          </div>
        </section> 
      </main>
    </>
  )
}
