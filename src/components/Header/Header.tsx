import React, { useEffect, useState } from "react";
import { SmallHeader, MedHeader, FullHeader } from "./svgs";
import useDebouncedResize from "../../hooks/useDebounceResize";
import { Link } from "gatsby";

function kebabToCapitalizedWords(kebabString: string): string {
  return kebabString
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [dynamicElement, setDynamicElement] = useState<React.ReactElement | null>(null);
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1025) {
      setDynamicElement(
        <div className="w-[1920px]">
          <img src={FullHeader} aria-hidden="true" alt="" />
        </div>
      );
    } else if (width <= 1024 && width > 375) {
      setDynamicElement(
        <div className="w-[1024px]">
          <img src={MedHeader} aria-hidden="true" alt="" />
        </div>
      );
    } else {
      setDynamicElement(
        <div className="w-[375px]">
          <img src={SmallHeader} aria-hidden="true" alt="" />
        </div>
      );
    }
  };
  const handlePathname = () => {
    let pathname = window.location.pathname;
    const pathArr = pathname.split("/").filter(Boolean);
    let cumulativePath = "";
    let pathObjArr = pathArr.map((path, i) => {
      cumulativePath += `/${path}`;
      let active = false;
      if (pathArr.length - 1 === i) active = true;
      return {
        name: kebabToCapitalizedWords(path),
        href: `${cumulativePath}`,
        active: active,
      };
    });
    pathObjArr = [{ name: "Home", href: "/", active: false }, ...pathObjArr];

    // let pathsWithFiller = pathObjArr.map((item) => [item, { name: "|", href: "", active: true }]).flat();
    // pathsWithFiller.pop();

    return pathObjArr;
  };
  useEffect(() => {
    handlePathname();
    handleResize();
  }, []);
  useDebouncedResize(handleResize, 100);

  return (
    <>
      <div className="">
        <div className="absolute">
          <div className="w-full overflow-hidden">{dynamicElement}</div>
        </div>
        <div className="relative z-[1] min-h-[328px] lg:min-h-[325px] text-white flex flex-col h-full justify-center px-8 lg:p-0 container xl:max-w-7xl mx-auto ">
          <ul className="flex relative z-[2] gap-2" aria-label="Breadcrumb">
            {handlePathname().map(({ name, href, active }) => {
              if (active)
                return (
                  <li aria-current="page" className="font-bold select-none">
                    {name}
                  </li>
                );
              return (
                <>
                  <li className="hover:text-gray-200">
                    <Link to={href}>{name}</Link>
                  </li>
                  <span className="select-none">|</span>
                </>
              );
            })}
          </ul>
          <h1 className="relative text-7xl kanit weight-500">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
