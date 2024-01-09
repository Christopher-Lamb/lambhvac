import React from "react";

interface TrapezoidProps {
  shortHeight: number;
  longHeight: number;
  width: number;
  color?: string;
  className?: string;
}

const Trapezoid: React.FC<TrapezoidProps> = ({ shortHeight, longHeight, width, className, color = "#9C9C9C" }) => {
  // Assuming the longer side is at the bottom
  const difference = Math.floor((longHeight - shortHeight) / 2);
  const path = `M0 0L${width} ${difference}V${shortHeight + difference}L0 ${longHeight}V0Z`;
  // d="M0 0L100 50V150L0 200V0Z"
  return (
    <svg className={className} width={width} height={longHeight} viewBox={`0 0 ${width} ${longHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill={color} style={{ fill: color, fillOpacity: "1" }} />
    </svg>
  );
};

export default Trapezoid;
