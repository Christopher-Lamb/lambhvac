import React from "react";
import LOGO from "../images/lamb_logox192.png";
import { Link } from "gatsby";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

interface quickLinkProps {
  title: string;
  path: string;
}
const quickLinks: quickLinkProps[] = [
  {
    title: "Air Conditioning",
    path: "/air-conditioning",
  },
  {
    title: "Heating",
    path: "/heating",
  },
  {
    title: "Service Contracts",
    path: "/service-contracts",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const titleClass = "block text-2xl kanit weight-500";

const Footer: React.FC<{ className?: string; margin?: string }> = ({ className, margin }) => {
  return (
    <footer className={"text-white bg-[var(--lambblue)] " + className} style={{ margin }}>
      <div className="absolute h-5  w-full bg-[var(--lambbluedarker)] " />
      <div className="px-4 py-20 grid gap-4 max-w-6xl mx-auto container">
        <div className="w-full mb-5">
          <img src={LOGO} alt="Lamb HVAC Logo" />
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-8">
          <div className="max-w-three">
            <h1 className={titleClass}>About</h1>
            <p>
              LambHVAC has been providing trusted heating, cooling, and air quality services in South Jersey since 2011. Our commitment to reliable, efficient solutions and exceptional customer
              service ensures your comfort in every season.
            </p>
          </div>
          <div>
            <span className={titleClass}>Quick Links</span>
            <ul className="grid grid-cols-2s max-w-[22rem] ml-5 font-semibold unsderline">
              <div>
                {quickLinks.map(({ title, path }) => (
                  <li key={title} className="hover:underline text-[#e7e7e7] ">
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <span className={titleClass}>Contact :</span>
            <ul className="ml-5">
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+18562174920" className=" hover:underline">
                  (856)-217-4920
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:blamb@lambhvac.com" className=" hover:underline">
                  blamb@lambhvac.com
                </a>
              </li>
            </ul>
            <span className={titleClass}>Location :</span>
            <span className="bloc ml-5">1010 Rose Ave. Runnemede</span>
          </div>
        </div>
        <span className="block flex gap-2">
          <FaFacebook size="2rem" />
          <RiInstagramFill size="2rem" />
        </span>
        <span className="block max-w-5xl">Copyright © {new Date().getFullYear()} LambHVAC. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
