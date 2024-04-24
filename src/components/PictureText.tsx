import React, { useEffect, useState } from "react";
import useDebouncedResize from "../hooks/useDebounceResize";
import Button from "./Button";
import Image from "../components/Image";

interface PictureTextProps {
  variant: "50-50" | "60-40" | "40-60" | "icon";
  fileName: string;
  alt: string;
  imgVariant?: "rounded" | "square";
  reverse?: boolean;
  color?: string;
  background?: string;
  children?: React.ReactNode;
  className?: string;
}

const PictureText: React.FC<PictureTextProps> = ({ variant, className, fileName, alt, children, color, reverse = false, background, imgVariant }) => {
  // const style: string = "60_40";
  // let component: React.ReactNode = null;
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

  const iconStr = "max-w-[23rem] lg:max-w-[30rem] shadow min-h-[14rem] lg:min-h-nones lg:min-h-0s";
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
    <div className={containerClass + " " + className} style={{ background }}>
      {isReverse && (
        <div className={textContainerClass}>
          <TextComponent {...{ color }}>{children}</TextComponent>
        </div>
      )}
      <div className={imageContainerClass}>
        <Image fileName={fileName} alt={alt} className={imageClass} />
      </div>
      {!isReverse && (
        <div className={textContainerClass}>
          <TextComponent {...{ color }}>{children}</TextComponent>
        </div>
      )}
    </div>
  );
};

interface TextComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const TextComponent: React.FC<TextComponentProps> = ({ color, children }) => {
  return (
    <div className="w-full h-full" style={{ color: `${color}` }}>
      {children}
    </div>
  );
};

export default PictureText;
