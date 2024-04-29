import React, { useEffect, useState } from "react";
import useDebouncedResize from "../../../hooks/useDebounceResize";
import Button from "../.././Button";
import Image from "../../../components/Image";

interface PictureTextProps {
  fileName: string;
  alt: string;
  content: string;
  reverse?: string;
  children?: React.ReactNode;
  className?: string;
}

const PictureText: React.FC<PictureTextProps> = ({ fileName, alt, content, reverse, className }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-five mx-auto md:gap-med h-threed">
      <div className="w-full flex items-center justify-end">
        <Image fileName={fileName} alt={alt} className="h-two rounded w-full" />
      </div>
      <div className="w-full px-2xsmall md:pl-0 md:pr-small pt-xsmall md:pt-small">
        <div dangerouslySetInnerHTML={{ __html: content }} className={className} />
      </div>
    </div>
  );
};
export default PictureText;
