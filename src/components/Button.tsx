import { Link } from "gatsby-link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ varient, href, className, onClick, children, ...other }) => {
  let styles: string = "";

  const outline = "";
  switch (varient) {
    case "outline":
      styles = "border rounded border-[5px] py-[7px] px-[19px] ";
      break;
    default:
      styles = "py-3 px-6 rounded bg-[#2458a6]";
      break;
  }

  return (
    <>
      {href ? (
        <div>
          <Link to={href || "/"} className={`text-white ${className} ${styles} block`}>
            {children}
          </Link>
        </div>
      ) : (
        <div>
          <button onClick={onClick} className={`text-white ${styles} ${className}`} {...other}>
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
