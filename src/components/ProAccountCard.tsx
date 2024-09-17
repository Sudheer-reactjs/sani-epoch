import React from 'react'
import profile from "@/assets/images/profile.png" 
import Image from "next/image";
import { QuoteIcon } from '@/utlis/svg';

export default function ProAccountCard() {
  return (
    <section className="mt-[70px] md:mt-[100px]">
    <div className="container">
      <div className="flex justify-center mb-10">
        <QuoteIcon />
      </div>
      <p className="text-center max-w-[287px] md:max-w-[433px] mx-auto text-[#757575] text-base font-normal leading-snug ">
        Game changing trading software that helped me{" "}
        <span className="text-white">analysis market trends </span>easily and <span className="text-white">make better decisions</span>
      </p>
      <div className="mt-[10px] text-center">
        <Image src={profile} alt="" width={48} height={48} className="mx-auto"/>
        <p className="my-[10px] text-sm">Aaron O&apos;Donnell</p>
        <p className="text-[#19B0B1] text-xs bg-[#ffaa2b0f] px-2 py-[5px] rounded-3xl inline-block  ">Pro Account</p>
      </div>
    </div>
  </section>
  )
}
