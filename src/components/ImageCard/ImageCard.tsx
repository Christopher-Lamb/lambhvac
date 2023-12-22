import React from "react";
import Button from "../Button";
import { Link } from "gatsby";
import "./ImageCard.css";

interface ImageCardProps {
  title: string;
  body: string;
  className?: string;
  href?: string;
  src?: string;
  alt?: string;
}

function truncateString(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

const ImageCard: React.FC<ImageCardProps> = ({ title, body, src, alt, href = "s", className }) => {
  return (
    <div className={"grid w-full img-card-cont " + className}>
      <Link to={href}>
        <img src={src} alt={alt} className="w-full max-h-[200px]" />
        <div className="p-7 grid">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{truncateString(body)}</p>
          {href && (
            <div className="mt-4 flex justify-center">
              <span className="px-7 py-3 inline-block bg-blue outline block text-xl rounded-3xl kanit weight-500 read-more-btn">Read More</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

interface ImageCardContainerProps {
  className?: string;
  children: React.ReactNode;
}

const ImageCardContainer: React.FC<ImageCardContainerProps> = ({ children, className }) => {
  return <div className={"border " + className}>{children}</div>;
};

export { ImageCard, ImageCardContainer };
export default ImageCard;
