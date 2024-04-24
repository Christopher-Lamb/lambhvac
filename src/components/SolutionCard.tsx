import React from "react";
import LOGO from "../images/lamb_logox192.png";

interface SolutionCardProps {
  heading: string;
  content: string;
  margin?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ heading, content, margin }) => {
  return (
    <div className="w-full bg-[var(--lambblue)]">
      <div className="max-w-6xl text-white px-12 py-12 mx-auto " style={{ margin }}>
        <div className="flex gap-12 ">
          <div>
            <h3 className="text mb-3">{heading}</h3>
            <p className="text text-white">{content}</p>
          </div>
          <img src={LOGO} alt="LambHVAC logo" className="w-96 hidden lg:block" style={{ flexShrink: "0" }} />
        </div>
        <button className="bg-white text-black px-4 py-3 rounded mr-6 mt-4 font-bold text-[var(--lambblue)]">Contact Us</button>
        <a href="tel:+18562174920" className="bg-[var(--lambblue)] border border-4 font-bold text-white px-4 py-3 rounded mt-4">
          Call us here
        </a>
      </div>
    </div>
  );
};

export default SolutionCard;
