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
    title: "Financing",
    path: "/financing",
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

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-[var(--lambblue)] ">
      <div className="absolute h-5  w-full bg-[var(--lambbluedarker)] " />
      <div className="px-4 py-20 grid gap-4 max-w-6xl mx-auto container">
        <div className="w-[350px] flex justify-center mb-5">
          <img src={LOGO} alt="Lamb HVAC Logo" />
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h1 className={titleClass}>About</h1>
            <p>
              Culpa et labore consectetur commodo excepteur minim ex consectetur qui. Culpa dolore laborum anim magna velit cupidatat aute proident. Eu ut ipsum id excepteur labore eiusmod officia
              culpa.
            </p>
          </div>
          <div>
            <span className={titleClass}>Quick Links</span>
            <ul className="grid grid-cols-2 max-w-[22rem] ml-4 font-semibold">
              <div>
                {quickLinks.slice(0, Math.ceil(quickLinks.length / 2)).map(({ title, path }) => (
                  <li key={title}>
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </div>
              <div>
                {quickLinks.slice(Math.floor(quickLinks.length / 2)).map(({ title, path }) => (
                  <li key={title}>
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <span className={titleClass}>Contact :</span>
            <ul>
              <li>phone</li>
              <li>email</li>
            </ul>
            <span className={titleClass}>Location :</span>
            <span className="block">1010 Rose Ave. Runnemede</span>
          </div>
        </div>
        <span className="block flex gap-2">
          <FaFacebook size="2rem" />
          <RiInstagramFill size="2rem" />
        </span>
        <span className="block max-w-5xl">
          Copyright Mollit tempor consequat sit nisi pariatur laboris. Laboris pariatur tempor magna dolor. Eu voluptate duis do veniam reprehenderit occaecat cupidatat deserunt elit. Aute labore
          magna
        </span>
      </div>
    </footer>
  );
};

export default Footer;
