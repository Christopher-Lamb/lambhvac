import React, { useEffect, useState } from "react";
import useDebouncedResize from "../hooks/useDebounceResize";
import Button from "./Button";

interface PictureTextProps {
  variant: "50_50" | "60_40" | "40_60";
  src: string;
  alt?: string;
  heading: string;
  body: string;
  reverse?: boolean;
  color?: string;
  background?: string;
  children?: React.ReactNode;
}

const PictureText: React.FC<PictureTextProps> = ({ variant, src, alt, heading, body, children, color, reverse = false, background }) => {
  const style: string = "60_40";
  let component: React.ReactNode = null;
  const [isReverse, setIsReverse] = useState(reverse);

  useDebouncedResize(() => {
    if (innerWidth <= 1024) {
      setIsReverse(false);
    } else {
      setIsReverse(reverse);
    }
  }, 100);

  switch (variant) {
    case "50_50":
      component = (
        <div className="w-full grid lg:grid-cols-2">
          {isReverse && (
            <div className={background + " h-full"}>
              <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
            </div>
          )}
          <div className={"h-full w-full"}>
            <img src={src} alt={alt} className="w-full" />
          </div>
          {!isReverse && (
            <div className={background + " h-full"}>
              <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
            </div>
          )}
        </div>
      );
      break;
    case "40_60":
      component = (
        <section className="w-full min-h-[300px] lg:grid grid-cols-5">
          {isReverse && (
            <div className={background + " h-full lg:col-span-3"}>
              <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
            </div>
          )}
          <div className={"h-full lg:col-span-2"}>
            <img src={src} alt={alt} className="w-full" />
          </div>
          {!isReverse && (
            <div className={background + " h-full lg:col-span-3"}>
              <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
            </div>
          )}
        </section>
      );
      break;
    case "60_40":
      component = (
        <div className="w-full min-h-[300px] grid lg:grid-cols-5">
          {isReverse && (
            <div className={background + " h-full lg:col-span-2"}>
              <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
            </div>
          )}
          <div className={"h-full lg:col-span-3"}>
            <img src={src} alt={alt} className="w-full" />
          </div>
          {!isReverse && (
            <div className={background + " h-full lg:col-span-2"}>
              <TextComponent {...{ heading, body, color }}>{children}</TextComponent>
            </div>
          )}
        </div>
      );
      break;
    default:
      component = <></>;
      break;
  }
  return component;
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
