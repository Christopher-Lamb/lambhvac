import React, { ImgHTMLAttributes } from "react";
import { StaticImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { PageProps } from "gatsby";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  height?: number;
  fileName: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ className, fileName, alt, height = 250, ...props }) => {
  // const image = getImage(imageData);

  return (
    <div className={`w-full h-[${height}px] lg:h-full overflow-hidden flex justify-center`}>
      <StaticImage src={"../images/House.jpg"} placeholder="blurred" alt={alt} className={"h-full object-contain lg:object-cover relative w-auto " + className} />
    </div>
  );
};

//Put an image element for the props for the picture text then add the className on after maybe or just put the full component inside the props of the picture text
export default Image;
