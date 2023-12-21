import { Link } from "gatsby-link";
import React from "react";

interface LinkBoxProps {
  href: string;
  src: string;
  alt: string;
  text?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ href, src, text, alt }) => {
  return (
    <Link to={href}>
      <div className="w-full bg-blue-400">
        <img src={src} alt={alt} />
        {text && <span>{text}</span>}
      </div>
    </Link>
  );
};

export default LinkBox;
