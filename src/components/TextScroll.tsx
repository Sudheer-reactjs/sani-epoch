import React, { useEffect } from "react";

const TextScroll = () => {
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
        <div className="marquee__group marquee__group__text  ">
          <div className="opacity-5 text-white font-PublicSansBlack text-[16vw] uppercase tracking-[40px]">
            Epoch fin Epoch fin Epoch fin Epoch fin Epoch fin Epoch fin Epoch  fin
          </div>
        </div>

        <div aria-hidden="true" className="marquee__group">
          <div className="opacity-5 text-white font-PublicSansBlack  text-[16vw] uppercase tracking-[40px]">
            Epoch fin Epoch fin Epoch fin Epoch fin Epoch fin Epoch fin Epoch  fin
          </div>
        </div>
      </div>
    </article>
  );
};

export default TextScroll;
