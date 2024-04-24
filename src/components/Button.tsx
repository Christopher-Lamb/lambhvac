import { Link } from "gatsby-link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, href, className, onClick, children, ...other }) => {
  let styles: string = " hover:brightness-110 active:translate-y-px ";
  const outline = "";
  const variantArr = variant?.split("-");
  variantArr?.forEach((item) => {
    switch (item) {
      case "circular":
        styles += " rounded-3xl ";
        break;
      case "rounded":
        styles += " rounded ";
        break;
      case "light":
        styles += " text-gray-100 border-gray-100 ";
        break;
      case "dark":
        styles += " text-gray-800 border-gray-600 ";
        break;
      case "outline":
        styles += " border-[5px] py-[7px] px-[19px] ";
        break;
      case "primary":
        styles += "text-white py-3 px-6 bg-[#2458a6]";
        break;
      case "secondary":
        styles += "text-gray-800 py-3 px-6 bg-[#fac28d]";
        break;
      default:
        // styles = "text-white py-3 px-6 rounded bg-[#2458a6]";
        break;
    }
  });

  return (
    <>
      {href ? (
        <div>
          <Link to={href || "/"} className={` ${styles} ${className} block`}>
            {children}
          </Link>
        </div>
      ) : (
        <div>
          <button onClick={onClick} className={`${styles} ${className}`} {...other}>
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
