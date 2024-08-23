import React from 'react';
import Image from 'next/image';

interface SectionProps {
  Icon: React.ElementType | string;
  PlusIcon: React.ElementType | string;
  Title: string;
}

const ServiceGrid: React.FC<SectionProps> = ({ Icon, Title, PlusIcon }) => {
  return (
    <div className='backdrop flex flex-col justify-between bg-[rgba(0,0,0,0.65)] border-solid border-[2px] border-[#191919] rounded-[32px] p-[35px] min-h-[310px] md:min-h-[350px]'>
      <div className='flex justify-between items-center gap-[10px] pb-[60px]'> 
        <div>
          {typeof Icon === 'string' ? (
            <Image src={Icon} alt="Service Icon" />
          ) : (
            <Icon />
          )}
        </div>
        <div>
          {typeof PlusIcon === 'string' ? (
            <Image src={PlusIcon} alt="Plus Icon" />
          ) : (
            <PlusIcon />
          )}
        </div>
      </div>
      <h4 className='font-HelveticaNeueThin text-[rgba(255,255,255,0.65)] text-[20px] leading-[24px] tracking-[.5px] font-[400] max-w-[230px] md:text-[24px] md:leading-[30px] '>{Title}</h4> 
    </div>
  );
};

export default ServiceGrid;
