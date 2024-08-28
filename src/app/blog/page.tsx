import TabsWithSlider from "@/components/TabsWithSlider";
import React from "react";
import EveryWeekPost from "@/components/EveryWeekPost";
import LastMonthPost from "@/components/LastMonthPost";

export default function page() {
  return (
    <>
      <main className="pt-[82px] bg-[#F7F7F7] bg-top relative z-[1] pb-[140px]  md:pb-[185px]  lg:pb-[180px]">
        <section className="text-center pt-[10px] pb-[30px] md:pb-[60px] md:pt-[40px]">
          <div className="container">
            <h4 className="text-[#757575] font-HelveticaNeue mb-[7px] text-[16px] md:text-xl  md:mb-[14px]">
              Blogs & updates
            </h4>
            <h1 className="text-black">Lastest about Epoch</h1>
          </div>
        </section>
        <section className="">
          <div className="container">
            <TabsWithSlider /> 
          </div>
        </section>
        <section className="bg-white py-[60px] md:py-[100px] lg:py-[180px]">
          <div className="container">
            <h2 className="max-w-[794px] mx-auto text-center mb-[20px] md:mb-[55px]">
              We’re releasing new updates nearly every week. Stay on top of them
              here with all our latest company news and views.
            </h2>
            <EveryWeekPost />
          </div>
        </section>
        <section className="py-[60px] md:py-[100px] lg:py-[180px]">
          <div className="container">
            <h2 className="mb-[10px]">More from last month</h2>
            <LastMonthPost /> 
          </div>
        </section>
      </main>
    </>
  );
}
