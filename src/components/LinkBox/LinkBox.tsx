import { Link } from "gatsby-link";
import React from "react";
import "./LinkBox.css";
import { Flame, House, Phone, SnowFlake, HeatingTips, ACTips, Thermometer, Finance } from "../../assets";

// Type the svgMap
type LinkObj = {
  svg: string;
  path: string;
  alt: string;
  text: string;
};

const svgMap: Record<string, LinkObj> = {
  heating: { svg: Flame, path: "/heating", alt: "Heating Icon", text: "Heating" },
  cooling: { svg: SnowFlake, path: "/air-conditioning", alt: "Air Conditioning Icon", text: "Cooling" },
  about: { svg: House, path: "/about", alt: "About Us Icon", text: "About" },
  contact: { svg: Phone, path: "/contact", alt: "Contact Us Icon", text: "Contact Us" },
  "heating-tips": { svg: HeatingTips, path: "/heating/tips", alt: "Heating Tips Icon", text: "Tips" },
  "ac-tips": { svg: ACTips, path: "/air-conditioning/tips", alt: "Air Conditioning Tips Icon", text: "Tips" },
  financing: { svg: Finance, path: "/financing", alt: "Financing Icon", text: "Financing" },
  "ac-thermostat": { svg: Thermometer, path: "/heating/thermostats", alt: "Air Conditioning Thermostat Icon", text: "Thermostats" },
  "heating-thermostat": { svg: Thermometer, path: "/heating/thermostats", alt: "Heating Thermostat Icon", text: "Thermostats" },
};

type Variant = keyof typeof svgMap;
interface LinkBoxProps {
  variant: Variant;
  size?: "small" | "large";
}

const LinkBox: React.FC<LinkBoxProps> = ({ variant = "about", size = "large" }) => {
  const sizeClass = size === "large" ? "h-med lg:h-large" : "h-small lg:h-med";
  if (svgMap.hasOwnProperty(variant)) {
    const { svg, path, alt, text } = svgMap[variant];
    return (
      <Link to={path}>
        <div className="link-box bg-gradient-to-t from-gray-50 to-white">
          <img src={svg} alt={alt} className={`w-full px-8 ${sizeClass}`} />
          <span className="kanit my-2 text-xl">{text}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <div>
        <span className="text-3xl text-red-700">DNE</span>
      </div>
    );
  }
};

const LinkBoxContainer: React.FC<{ variantArr: Variant[]; size?: "small" | "large" }> = ({ variantArr = ["cooling"], size }) => {
  return (
    <>
      {variantArr.map((variant, i) => (
        <LinkBox key={i} variant={variant} size={size} />
      ))}
    </>
  );
};

export { LinkBoxContainer };

export default LinkBox;
