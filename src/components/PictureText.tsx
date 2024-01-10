import React, { useEffect, useState } from "react";
import useDebouncedResize from "../hooks/useDebounceResize";
import Button from "./Button";
import Image from "../components/Image";

interface PictureTextProps {
  variant: "50-50" | "60-40" | "40-60" | "icon";
  fileName: string;
  alt: string;
  heading: string;
  body: string;
  imgVariant?: "rounded" | "square";
  reverse?: boolean;
  color?: string;
  background?: string;
  children?: React.ReactNode;
}

const PictureText: React.FC<PictureTextProps> = ({ variant, fileName, alt, heading, body, children, color, reverse = false, background, imgVariant }) => {
  const style: string = "60_40";
  let component: React.ReactNode = null;
  const [isReverse, setIsReverse] = useState(reverse);

  const resizeFunc = () => {
    if (innerWidth <= 1024) {
      setIsReverse(false);
    } else {
      setIsReverse(reverse);
    }
  };
  useDebouncedResize(resizeFunc, 100);
  useEffect(resizeFunc, []);
  let containerClass = "w-full";
  let imageContainerClass = "";
  let textContainerClass = "";
  let imageClass = "";
  switch (variant) {
    case "50-50":
      containerClass += ` grid lg:grid-cols-2`;
      textContainerClass = `h-full `;
      imageContainerClass = `"h-full w-full"`;
      break;
    case "40-60":
      containerClass += ` min-h-[300px] lg:grid grid-cols-5`;
      textContainerClass = `h-full lg:col-span-3 `;
      imageContainerClass = `h-full lg:col-span-2`;
      break;
    case "60-40":
      containerClass += ` min-h-[300px] grid lg:grid-cols-5`;
      textContainerClass = `h-full lg:col-span-2 `;
      imageContainerClass = `h-full lg:col-span-3`;
      break;
    case "icon":
      containerClass += " flex flex-col lg:flex-row items-center";
      textContainerClass += " lg:w-1/2";
      imageContainerClass += " lg:w-1/2 max-h-[22rem]";
    default:
      break;
  }

  const iconStr = "max-w-[23rem] lg:max-w-[30rem] shadow min-h-[15rem] lg:min-h-[22rem] lg:min-h-0";
  switch (imgVariant) {
    case "rounded":
      imageClass += " rounded-xl " + iconStr;
    case "square":
      imageClass += " max-w-[23rem]shadow-lg mx-8 " + iconStr;
      break;

    default:
      break;
  }

  return (
    <div className={containerClass} style={{ background }}>
      {isReverse && (
        <div className={textContainerClass}>
          <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
        </div>
      )}
      <div className={imageContainerClass}>
        <Image fileName={fileName} alt={alt} className={imageClass} />
      </div>
      {!isReverse && (
        <div className={textContainerClass}>
          <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
        </div>
      )}
    </div>
  );
};

interface TextComponentProps {
  heading: string;
  body: string;
  color?: string;
  children?: React.ReactNode;
}

const TextComponent: React.FC<TextComponentProps> = ({ heading, body, color, children }) => {
  return (
    <div className="p-4 px-8 w-full h-full flex flex-col justify-center gap-4 max-w-4xl" style={{ color: `${color}` }}>
      <h2 className=" text-4xl xl:text-5xl">{heading}</h2>
      <p className="text-md xl:text-lg">{body}</p>
      {children}
    </div>
  );
};

export default PictureText;
