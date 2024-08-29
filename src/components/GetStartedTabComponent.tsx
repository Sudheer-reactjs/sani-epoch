"use client";

import { useState } from "react";
import PlanComparison from "./PlanComparison";

const GetStartedTabComponent = () => {
  const [activeTab, setActiveTab] = useState("non-professional");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full inline-block"> 
      {/* Tabs */}
      <div className="tab-bg-before relative z-[1] p-[6.5px] border-[1px] border-custom-white-15  flex mx-auto max-w-[377px] rounded-[90px] shadow  backdrop-blur-[15px]">
        <button
          className={`flex-1 py-[7px] text-center cursor-pointer font-HelveticaNeue ${
            activeTab === "non-professional"
              ? "bg-gradient-to-br from-[#19b0b1] to-[#0951a6] rounded-[90px]"
              : "text-white text-base font-medium"
          }`}
          onClick={() => handleTabClick("non-professional")}
        >
          Non-professional
        </button>
        <button
          className={`flex-1 py-[7px] text-center cursor-pointer font-HelveticaNeue ${
            activeTab === "professional"
              ? "bg-gradient-to-br from-[#19b0b1] to-[#0951a6] rounded-[90px]"
              : "text-white text-base font-medium "
          }`}
          onClick={() => handleTabClick("professional")}
        >
          Professional
          <div className="h-[27px] ml-[10px] px-2 py-[4px] bg-white/0 rounded-[90px] border-2 border-[#19b0b1] backdrop-blur-[25px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-sm">PRO</div>
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-[24px]">
        {activeTab === "non-professional" && (
          <div>
            <h2 className="max-w-[540px] mx-auto"> 
              Upgrade to unlock more features and unlimited access
            </h2>
            <p className="text-[#757575] max-w-[600px] mx-auto mt-[15px] md:text-[20px] md:leading-[30px]">
              Discover the ideal plan, 25% discount on the annual plan.
            </p>
            <PlanComparison />
          </div>
        )}
        {activeTab === "professional" && (
          <div>
            <h2 className="text-lg font-semibold">Professional Content</h2>
            <p>This is the content for the Professional tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStartedTabComponent;
