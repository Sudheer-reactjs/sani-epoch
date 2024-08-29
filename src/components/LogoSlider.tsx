import React, { useEffect } from "react";
import Image from "next/image";
import DropboxImage from "@/assets/images/dropbox.png";
import AdobeImage from "@/assets/images/adobe.png";
import AwsImage from "@/assets/images/aws.png";
import CiscoImage from "@/assets/images/cisco.png";
import DellImage from "@/assets/images/dell.png";
import GoogleCloudImage from "@/assets/images/google-cloud.png";
import IbmImage from "@/assets/images/ibm.png";
import OracleImage from "@/assets/images/oracle.png";
import VmwareImage from "@/assets/images/vmware.png";

const LogoSlider = () => {
  useEffect(() => {
    const control = document.getElementById("direction-toggle");
    const wrapper = document.querySelector(".wrapper");

    if (control && wrapper) {
      const marquees = document.querySelectorAll(".marquee");

      control.addEventListener("click", () => {
        control.classList.toggle("toggle--vertical");
        wrapper.classList.toggle("wrapper--vertical");
        marquees.forEach((marquee) =>
          marquee.classList.toggle("marquee--vertical")
        );
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      if (control) {
        control.removeEventListener("click", () => {});
      }
    };
  }, []);
  return (
    <article className="wrapper flex flex-col mx-auto max-w-[100vw] gap-[25px]">
      <div className="marquee">
        <div className="marquee__group">
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
        </div>

        <div aria-hidden="true" className="marquee__group">
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
        </div>
      </div>

      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
        </div>

        <div aria-hidden="true" className="marquee__group">
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
          <Image src={DropboxImage} alt="" />
          <Image src={AdobeImage} alt="" />
          <Image src={AwsImage} alt="" />
          <Image src={CiscoImage} alt="" />
          <Image src={DellImage} alt="" />
          <Image src={GoogleCloudImage} alt="" />
          <Image src={IbmImage} alt="" />
          <Image src={OracleImage} alt="" />
          <Image src={VmwareImage} alt="" />
        </div>
      </div>
    </article>
  );
};

export default LogoSlider;
