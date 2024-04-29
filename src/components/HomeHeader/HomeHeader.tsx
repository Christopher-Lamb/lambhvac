import React, { useEffect } from "react";
import { Link } from "gatsby-link";
import Button from "../Button";
// import HomeImg from "../../images/House.jpg";
import HomeImgBig from "../../images/houseBigger.jpg";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import { StaticImage } from "gatsby-plugin-image";
import Image from "../Image";
import "./HomeHeader.css";

const HomeHeader: React.FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const layer2 = document.getElementById("layer2") || null;
      if (!layer2) return;
      layer2.style.transform = `translateY(${scrollPosition * 0.15}px)`;
    });
  });

  return (
    <div className="relative  min-h-[630px] lg:h-[700px] w-full overflow-hidden">
      <div className="relative w-full h-full homeheader-img min-h-[630px] lg:h-[700px]">
        <div id="layer2" className="absolute w-full h-full min-h-[630px] lg:h-[700px] z-[1]">
          <Image fileName="House.jpg" alt="Home header" className="absolute object-cover w-full top-[-20px] lg:top-[-300px] h-[660px] lg:h-[1000px]" />
        </div>
        <div className="w-full relative z-[3] min-h-[630px] lg:h-[700px] flex items-center justify-center">
          <HeaderCard />
        </div>
      </div>
    </div>
  );
};

const HeaderCard: React.FC<{ title?: string; text?: string }> = ({ title, text }) => {
  return (
    <AnimatedComponent animationClassName="homeheader-animation">
      <div className="relative text-white max-w-four w-full flex flex-col items-center">
        <span className="text-small18 lg:text-med">Lamb HVAC</span>
        <h1 className="kanit weight-500 text-center text-large lg:text-one">Expert HVAC Solutions at Your Doorstep</h1>
        <p className="text-small18 lg:text-med px-4 md:px-0 mt-2 text-center max-w-four">
          With LambHVAC, experience unmatched comfort through precision climate control – efficient, reliable, and tailored to your needs.{" "}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-2xsmall">
          <a
            href="/contact/"
            className="py-2xsmall px-xsmall rounded bg-lambblue text-med text-white font-semibold mr-xsmall hover:brightness-150 hover:translate-y-[-1px] shadow-md shadow-[#2458a6ad]"
          >
            Contact Us
          </a>
          <a
            href="/contact/request-service"
            className="py-[10px] px-xsmall rounded text-med text-white border border-[5px] box-border font-semibold mr-xsmall hover:brightness-150 hover:translate-y-[-1px] shadow-md shadow-[rgba(255,255,255,.4)]"
          >
            Request Service
          </a>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default HomeHeader;
