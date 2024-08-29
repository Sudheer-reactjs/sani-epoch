// components/PlanComparison.tsx

import React from "react";
import Link from "next/link";
import { AvailableIcon, ButtonArrow, NotAvailableIcon } from "@/utlis/svg";

// Define each plan's features
const plans = [
  {
    planName: "Essential",
    monthlyPrice: "$12.95",
    perMonth: "/month",
    anuallyPrice: "$155.40 / year",
    trybutton: "Try free for 30 days",
    skipTrial: "or skip trial and",
    payNow: "pay now",
    features: [
      { text: "2 charts per tab", available: true },
      { text: "5 indicators per chart", available: true },
      { text: "10K historical bars", available: true },
      { text: "20 price alerts", available: true },
      { text: "20 technical alerts", available: true },
      { text: "10 parallel chart connections", available: true },
      { text: "No ads", available: true },
      { text: "Volume profile", available: true },
      { text: "Custom timeframes", available: true },
      { text: "Custom Range Bars", available: true },
      { text: "Multiple watchlists", available: true },
      { text: "Bar Replay", available: true },
      { text: "Indicators on indicators", available: true },
      { text: "Chart data export", available: false },
      { text: "Charts based on custom formulas", available: false },
      { text: "Time Price Opportunity", available: false },
      { text: "Auto Chart Patterns", available: false },
      { text: "Second-based alerts", available: false },
      { text: "Alerts that don't expire", available: false },
      { text: "Publishing invite-only scripts", available: false },
      { text: "Second-based intervals", available: false },
      { text: "Tick-based intervals (BETA)", available: false },
      { text: "Ability to buy professional market data", available: false },
      { text: "First priority support", available: false },
    ],
  },
  {
    planName: "Plus",
    monthlyPrice: "$24.95",
    perMonth: "/month",
    anuallyPrice: "$299.40 / year",
    trybutton: "Try free for 30 days",
    skipTrial: "or skip trial and",
    payNow: "pay now",
    features: [
      { text: "4 charts per tab", available: true },
      { text: "10 indicators per chart", available: true },
      { text: "10K historical bars", available: true },
      { text: "100 price alerts", available: true },
      { text: "100 technical alerts", available: true },
      { text: "20 parallel chart connections", available: true },
      { text: "No ads", available: true },
      { text: "Volume profile", available: true },
      { text: "Custom timeframes", available: true },
      { text: "Custom Range Bars", available: true },
      { text: "Multiple watchlists", available: true },
      { text: "Bar Replay", available: true },
      { text: "Indicators on indicators", available: true },
      { text: "Chart data export", available: true },
      { text: "Charts based on custom formulas", available: true },
      { text: "Time Price Opportunity", available: false },
      { text: "Auto Chart Patterns", available: false },
      { text: "Second-based alerts", available: false },
      { text: "Alerts that don't expire", available: false },
      { text: "Publishing invite-only scripts", available: false },
      { text: "Second-based intervals", available: false },
      { text: "Tick-based intervals (BETA)", available: false },
      { text: "Ability to buy professional market data", available: false },
      { text: "First priority support", available: false },
    ],
  },
  {
    planName: "Premium",
    monthlyPrice: "$49.95",
    perMonth: "/month",
    anuallyPrice: "$599.40 / year",
    trybutton: "Try free for 30 days",
    skipTrial: "or skip trial and",
    payNow: "pay now",
    features: [
      { text: "8 charts per tab", available: true },
      { text: "25 indicators per chart", available: true },
      { text: "20K historical bars", available: true },
      { text: "400 price alerts", available: true },
      { text: "400 technical alerts", available: true },
      { text: "50 parallel chart connections", available: true },
      { text: "No ads", available: true },
      { text: "Volume profile", available: true },
      { text: "Custom timeframes", available: true },
      { text: "Custom Range Bars", available: true },
      { text: "Multiple watchlists", available: true },
      { text: "Bar Replay", available: true },
      { text: "Indicators on indicators", available: true },
      { text: "Chart data export", available: true },
      { text: "Charts based on custom formulas", available: true },
      { text: "Time Price Opportunity", available: true },
      { text: "Auto Chart Patterns", available: true },
      { text: "Second-based alerts", available: true },
      { text: "Alerts that don't expire", available: true },
      { text: "Publishing invite-only scripts", available: true },
      { text: "Second-based intervals", available: true },
      { text: "Tick-based intervals (BETA)", available: false },
      { text: "Ability to buy professional market data", available: false },
      { text: "First priority support", available: false },
    ],
  },
];

const PlanComparison = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-[40px]">
      {plans.map((plan) => (
        <div key={plan.planName} className="price-grid relative w-full lg:w-1/3"> 
          <div className="">
            <h4 className="text-[#757575] font-HelveticaNeueMedium text-[20px]">{plan.planName}</h4>
            <div className="flex gap-[10px] justify-center items-end">
              <h3 className="font-semibold text-center font-HelveticaNeue leading-[68px] text-[68px]">
                {plan.monthlyPrice}
              </h3>
              <span className="text-[#757575] text-[16px]">{plan.perMonth}</span>
            </div>
            <p className="text-center text-gray-500 mt-[14px] mb-[28px]">
              {plan.anuallyPrice}
            </p>
            <div className="flex justify-center">
              <Link className="button-black !bg-[#111111] !px-[14px] md:!px-[22px] md:!text-[18px]" href="#">
                {plan.trybutton}
                <ButtonArrow />
              </Link>
            </div>
            <p className="text-center text-gray-500 my-4"> 
              {plan.skipTrial}
              <Link className="" href="#">
                {" "}
                {plan.payNow}
              </Link>
            </p>
          </div>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 ${
                  feature.available ? "text-white" : "text-custom-white-50"
                }`}
              >
                {feature.available ? <AvailableIcon /> : <NotAvailableIcon />}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlanComparison;
