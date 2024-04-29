import React from "react";
import { Flame, House, Phone, SnowFlake, HeatingTips, ACTips, Thermometer, Finance } from "../../../assets";
import "./RelatedLinks.css";

interface RelatedLinksProps {
  names: string;
}
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
  "heating-tips": { svg: HeatingTips, path: "/heating/tips", alt: "Heating Tips Icon", text: "Heating Tips" },
  "cooling-tips": { svg: ACTips, path: "/air-conditioning/tips", alt: "Air Conditioning Tips Icon", text: "AC Tips" },
  finance: { svg: Finance, path: "/financing", alt: "Financing Icon", text: "Financing" },
  "cooling-thermostat": { svg: Thermometer, path: "/heating/thermostats", alt: "Air Conditioning Thermostat Icon", text: "Thermostats" },
  "heating-thermostat": { svg: Thermometer, path: "/heating/thermostats", alt: "Heating Thermostat Icon", text: "Thermostats" },
};
function stringToArray(str: string) {
  // Trim the string to remove spaces at the beginning and end, and split by comma
  const items = str.trim().split(",");

  // Filter out any empty strings that may have been created by leading or trailing commas
  // Also trim each item to remove any extra spaces around the options
  const filteredItems = items.filter((item) => item.trim() !== "").map((item) => item.trim());

  return filteredItems;
}
const RelatedLinks: React.FC<RelatedLinksProps> = ({ names }) => {
  const links = stringToArray(names);
  return (
    <div>
      <span className="block text-med kanit font-semibold w-full text-center mb-2">Related Links</span>
      <div className="flex flex-wrap max-w-five mx-auto items-center justify-center">
        {links &&
          links.map((link) => {
            if (!Object.keys(svgMap).includes(link)) return;
            const { svg, path, alt, text } = svgMap[link];
            return (
              <a key={path} href={path} aria-label={text + " Navigation"}>
                <div className="px-med py-xsmall border related-links rounded">
                  <img src={svg} alt={alt} className="w-12 h-12 lg:w-20 lg:h-20" />
                  <span className="w-full mt-3xsmall uppercase font-semibold kanit text-center block">{text}</span>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedLinks;
