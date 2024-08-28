"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import CommunityCardData from "@/components/CommunityCardData"

// Slider settings for mobile
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1, // Show one slide at a time on mobile
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

const SlickSlider: React.FC = () => {
  return (
    <>
      {/* Desktop view: Grid display */}
      <div className="hidden md:grid grid-cols-2 gap-[30px] mt-[90px] lg:grid-cols-4">
          <CommunityCardData 
          Title="60M+"
          Text="Traders and investors use our platform."
          /> 
        <CommunityCardData  
          Title="#1"
          Text="when it comes to all things investing."
          />
        <CommunityCardData 
          Title="1.5M+"
          Text="Reviews with 4.9 average rating."
          />
        <CommunityCardData 
          Title="10M+"
          Text="Custom scripts and ideas shared by our users."
          />
      </div>
      
      {/* Mobile view: Slider display */}
      <div className="slider-dots block md:hidden max-w-[250px] mt-[35px] mx-auto">
        <Slider {...settings}>
        <CommunityCardData 
          Title="60M+"
          Text="Traders and investors use our platform."
          /> 
        <CommunityCardData  
          Title="#1"
          Text="when it comes to all things investing."
          />
        <CommunityCardData 
          Title="1.5M+"
          Text="Reviews with 4.9 average rating."
          />
        <CommunityCardData 
          Title="10M+"
          Text="Custom scripts and ideas shared by our users."
          />
        </Slider>
      </div>
      </>
  );
};

export default SlickSlider;
