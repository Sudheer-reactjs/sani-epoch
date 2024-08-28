import React from 'react';

interface SectionProps {
  Title: string;
  Text: string;
}

const ServiceGrid: React.FC<SectionProps> = ({ Title, Text }) => {
  return (
    <div className='bg-custom-white-10 rounded-2xl backdrop-blur-[45px] text-left py-[20px] px-[24px] md:py-[27px] md:px-[30px]'>
      <h2 className='text-white  font-HelveticaNeueMedium  text-[36px] leading-[46px]  md:text-[50px] lg:text-[68px] md:leading-[56px] lg:leading-[76px]'>{Title}</h2> 
      <p className='opacity-60 text-white max-w-[200px] font-HelveticaNeueThin mt-[15px] leading-[24px] text-[16px] md:text-lg md:mt-[5px]'>{Text}</p> 
    </div>
  );
};

export default ServiceGrid;
