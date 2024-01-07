import React, { useEffect } from "react";
import { Link } from "gatsby-link";
import Button from "./Button";
import HomeImg from "../images/House.jpg";
import HomeImgBig from "../images/houseBigger.jpg";

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
    <div className="relative bg-blue-400 min-h-[630px] lg:h-[700px] w-full overflow-hidden">
      <div className="relative w-full">
        <img src={HomeImgBig} id="layer2" alt="Home header" className="absolute w-[2000px] top-[-300px]" />
      </div>
      <div className="grid h-[100%] relative w-full text-white lg:grid-cols-3 2xl:grid-cols-2 items-center">
        <HeaderCard />
      </div>
    </div>
  );
};

const HeaderCard: React.FC<{ title?: string; text?: string }> = ({ title, text }) => {
  return (
    <div className="bg-[rgb(132,133,135)] shadow rounded-lg max-w-[624px] h-fit col-span-2 col-start-2 p-8 py-12 grid gap-2 grid-rows-4">
      <div className="row-span-3">
        <h1 className="text-5xl kanit weight-500">Expert HVAC Solutions for Your Comfort</h1>
        <p className="text-2xl mt-2">
          Providing unparalleled heating, ventilation, and air conditioning services to ensure your home stays comfortable all year round. Experience the best in HVAC efficiency and reliability.
        </p>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <Button href="tel:+18562174920" className="text-xl">
          Call Now
        </Button>
        <Button varient="outline" href="/contact/request-service" className="text-xl font-semibold tracking-wide ">
          Request Service
        </Button>
      </div>
    </div>
  );
};

export default HomeHeader;
