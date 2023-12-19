import React, { useRef } from "react";
import "./Burger.css";

interface BurgerProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Burger({ onClick, className, children }: BurgerProps) {
  const burgerRef = useRef<HTMLDivElement>(null);
  const burgerToggle = () => {
    if (burgerRef.current) burgerRef.current.classList.toggle("burger-change");
  };

  return (
    <button
      aria-label="Open navigation menu"
      className={"burger-grid"}
      onClick={() => {
        burgerToggle();
        onClick();
      }}
    >
      <div ref={burgerRef} className={"burger-container " + className}>
        <div className={"burger-bar-1"}></div>
        <div className={"burger-bar-2"}></div>
        <div className={"burger-bar-3"}></div>
      </div>
      <p className={"burger-text"}>{children}</p>
    </button>
  );
}
