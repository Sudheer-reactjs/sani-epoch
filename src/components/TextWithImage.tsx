// components/Section.tsx
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { StaticImageData } from "next/image";

interface SectionProps {
  imageSrc: StaticImageData | string;
  smallHeading: string;
  title: string;
  imageSrcMobile: StaticImageData | string;
  text: string;
  buttonLink: string;
  buttonText: string;
  imagePosition: "left" | "right"; // Determines the position of the image
}

const TextWithImage: React.FC<SectionProps> = ({
  imageSrc,
  text,
  smallHeading,
  imageSrcMobile,
  title,
  buttonText,
  buttonLink,
  imagePosition,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: imagePosition === "left" ? "row" : "row-reverse",
      }}
      className="items-center text-left gap-[30px] lg:gap-[88px] "
    >
      <div
        style={{ flex: 1 }}
        className="relative before-image-border w-full rounded-[32px] hidden md:block"
      >
        <Image
          src={imageSrc}
          alt="Section image"
          className="w-full rounded-[32px] relative"
        />
      </div>
      <div
        style={{ flex: 1 }}
        className="flex-col flex gap-[12px] text-center md:text-left md:max-w-[342px] md:gap-[20px]"
      >
        <h6 className="text-[#757575] md:text-[20px]">{smallHeading}</h6>
        <h2 className=" text-[36px] leading-[36px] md:text-[38px] md:leading-[48px] max-w-[300px] mx-auto md:max-w-[100%]">
          {title}
        </h2>
        <div
          style={{ flex: 1 }}
          className="relative before-image-border w-full rounded-[32px] mt-[12px] mb-[20px]  md:hidden"
        >
          <Image
            src={imageSrcMobile}
            alt="Section image"
            className="w-full rounded-[32px] relative"
          />
        </div>
        <p className="text-[#757575] text-[18px] leading-[28px] max-w-[300px] mx-auto md:max-w-[100%] md:text-[20px] md:leading-[30px]">
          {text}
        </p>
        <div className="flex mt-[15px] justify-center md:justify-start">
          <Link className="button-black " href={buttonLink}>
            {buttonText}
            <span className="w-[24px] h-[24px] bg-[#fff] inline-block"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;
