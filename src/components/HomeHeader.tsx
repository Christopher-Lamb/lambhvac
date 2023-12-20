import React from "react";
import { Link } from "gatsby-link";

const HomeHeader: React.FC = () => {
  return (
    <div className="bg-blue-300 h-[630px] lg:h-[600px] w-full grid lg:grid-cols-3 2xl:grid-cols-2 items-center justify-end">
      <div className="bg-blue-400 max-w-[624px] col-span-2 col-start-2 p-8 py-12 grid gap-2 grid-rows-4">
        <div className="row-span-3">
          <h1 className="text-5xl">Expert HVAC Solutions for Your Comfort</h1>
          <p className="text-2xl mt-2">
            Providing unparalleled heating, ventilation, and air conditioning services to ensure your home stays comfortable all year round. Experience the best in HVAC efficiency and reliability.
          </p>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <button className="bg-white px-6 py-3 text-xl rounded">Call Now</button>
          <button className="bg-white px-6 py-3 text-xl rounded">Request Service</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
