import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import LAMBHVACLOGO from "../../images/lamb_logox192.png";
import Burger from "../Burger";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import "./Navbar.css";

interface NavLinkProps {
  title: string;
  path: string;
  sublinks?: NavLinkProps[];
}

const navLinks: NavLinkProps[] = [
  {
    title: "Air Conditioning",
    path: "/air-conditioning",
    sublinks: [
      { title: "Installs", path: "/air-conditioning/installs" },
      { title: "Repairs", path: "/air-conditioning/repairs" },
      { title: "Maintenance", path: "/air-conditioning/maintenance" },
      { title: "Ductless Mini Splits", path: "/air-conditioning/ductless-mini-splits" },
      { title: "Thermostats", path: "/air-conditioning/thermostats" },
      { title: "Tips", path: "/air-conditioning/tips" },
    ],
  },
  {
    title: "Heating",
    path: "/heating",
    sublinks: [
      { title: "Boilers", path: "/heating/boilers" },
      { title: "Ductless Mini Splits", path: "/heating/ductless-mini-splits" },
      { title: "Furnaces", path: "/heating/furnaces" },
      { title: "Heat Pumps", path: "/heating/heat-pumps" },
      { title: "Thermostats", path: "/heating/thermostats" },
      { title: "Tips", path: "/heating/tips" },
    ],
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
    sublinks: [{ title: "Request Service", path: "/contact/request-service" }],
  },
];
const NavLink: React.FC<NavLinkProps> = ({ title, path, sublinks }) => {
  const [isHovering, setIsHovering] = useState(false);
  const sublinkRef = useRef<HTMLUListElement>(null);

  const hideSubLink = () => {
    if (sublinkRef.current) sublinkRef.current.style.display = "none";
  };
  const showSubLink = () => {
    if (sublinkRef.current) sublinkRef.current.style.display = "";
  };

  return (
    <div onMouseOver={showSubLink} onMouseOut={hideSubLink}>
      <Link to={path}>
        <span className="kanit lg:text-xl text-white hover:text-blue-100 pb-2 block">{title}</span>
      </Link>
      {sublinks && (
        <ul ref={sublinkRef} style={{ display: "none" }} className="bg-white z-[999] absolute flex flex-col shadow p-4 gap-2 lg:text-lg">
          {sublinks.map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ title, path, sublinks }) => {
  const subLinksRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const subLinkToggle = () => {
    if (subLinksRef.current) subLinksRef.current.classList.toggle("nav-not-active");
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <li className="relative z-[999] bg-blue-100 w-full flex space-around items-center border-b-2 border-blue-200">
        <Link to={path} className="w-full px-4 py-2">
          <span className="inline-block cursor-pointer text-xl kanit">{title}</span>
        </Link>
        {sublinks && (
          <button aria-label={"Open " + title + " Navigation"} onClick={subLinkToggle} className=" flex items-center justify-center w-10 h-10 mr-4 cursor-pointer">
            {isOpen ? <FaChevronUp className="w-[20px] h-full" /> : <FaChevronDown className="w-[20px] h-full" />}
          </button>
        )}
      </li>
      <ul ref={subLinksRef} className="nav-not-active relative grid z-[999] bg-blue-100">
        {sublinks?.map(({ title, path }) => (
          <Link to={path} key={path}>
            <li className="px-8 py-1 text-xl border-b-[1px] border-blue-200">{title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

const Navbar: React.FC = () => {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const displayNavToggle = () => {
    mobileNavRef?.current?.classList.toggle("nav-not-active");
  };

  return (
    <header className="h-[6.5625rem] md:h-[136px] bg-[var(--lambblue)] ">
      <div className="w-full h-full grid grid-cols-2 justify-center-center lg:flex lg:justify-evenly">
        {/* LOGO */}
        <div className="flex items-center ml-8 lg:ml-0 lg:justify-center">
          <Link to="/">
            <img src={LAMBHVACLOGO} alt="LambHVAC Logo" className="w-[9rem] md:w-[10rem] xl:w-auto" />
          </Link>
        </div>
        {/* NAV */}
        <div className="hidden lg:block h-full">
          <div className="grid max-w-3xl justify-center items-end h-full">
            {/* Phone Click */}
            <div className="flex justify-end">
              <a href="tel:+18562174920" className="py-4 mx-4 px-8 rounded-lg text-2xl bg-white tracking-wider font-semibold">
                (856)-217-4920
              </a>
            </div>
            <nav className="flex justify-end gap-4 ">
              {navLinks.map((navlink) => (
                <NavLink key={navlink.title} {...navlink} />
              ))}
            </nav>
          </div>
        </div>
        {/* Mobile Burger */}
        <div className="lg:hidden flex items-center justify-end pr-8">
          <Burger onClick={displayNavToggle} />
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="relative w-full lg:hidden">
        <div ref={mobileNavRef} className="absolute nav-not-active w-full bg-blue-100">
          <ul>
            {navLinks.map((navlink) => (
              <MobileNavLink key={navlink.title} {...navlink} />
            ))}
          </ul>
        </div>

        <div className="flex justify-end relative z-[998]">
          <a href="tel:+18562174920">
            <span className="mx-auto inline-block py-4 mx-4 px-8 text-2xl bg-white border-b-4 border-x-4 border-gray-300 tracking-wider font-semibold">Call (856)-217-4920</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
