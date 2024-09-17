"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommunityCardData from "@/components/CommunityCardData";

// Slider settings for mobile
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

const cardData = [
  { Title: "60M+", Text: "Traders and investors use our platform." },
  { Title: "#1", Text: "when it comes to all things investing." },
  { Title: "1.5M+", Text: "Reviews with 4.9 average rating." },
  { Title: "10M+", Text: "Custom scripts and ideas shared by our users." },
];

const renderCards = () => {
  return cardData.map((item, index) => (
    <CommunityCardData key={index} Title={item.Title} Text={item.Text} />
  ));
}; 

const CommunityCardSlider: React.FC = () => { 
  return (
    <>
       <h2 className='text-[#fff] h1'>Feel the love in <br></br>Epoch community</h2>
      {/* Desktop view: Grid display */}
      <div className="hidden md:grid grid-cols-2 gap-[30px] mt-[90px] lg:grid-cols-4">
        {renderCards()}
      </div>

      {/* Mobile view: Slider display */}
      <div className="slider-dots block md:hidden max-w-[250px] mt-[35px] mx-auto">
        <Slider {...settings}>{renderCards()}</Slider> 
      </div>
    </>
  );
};
 
export default CommunityCardSlider;
