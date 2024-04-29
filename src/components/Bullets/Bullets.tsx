import React from "react";
import "./Bullets.css";

type arrayOfStringPairs = [string, string];

interface BulletsProps {
  array: string[] | arrayOfStringPairs[];
  variant?: "square" | "round" | "circle" | "snowflake" | "fire" | "check";
  layout?: "grid" | "none";
  margin?: string | number;
  className?: string;
}
function parseToInt(input: string | number): number {
  if (typeof input === "string") {
    return parseInt(input, 10);
  } else if (typeof input === "number") {
    return input;
  } else {
    return 0;
  }
}

function determineHVACMode(): string {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // getMonth returns a zero-based index (0 = January, 11 = December)

  // Check if it's May to September (4 to 8 in zero-based index)
  if (currentMonth >= 4 && currentMonth <= 8) {
    return "air-conditioning";
  }
  // Otherwise, it's October to April
  return "heating";
}

const Bullets: React.FC<BulletsProps> = ({ array, margin, variant = "square", layout = "none", className }) => {
  let bulletClass = "";
  switch (variant) {
    case "square":
      bulletClass += "bullet-square";
      break;
    case "round":
      bulletClass += "bullet-round";
      break;
    case "circle":
      bulletClass += "bullet-circle";
      break;
    case "snowflake":
      bulletClass += "bullet-snowflake";
      break;
    case "fire":
      bulletClass += "bullet-fire";
      break;
    case "check":
      bulletClass += "bullet-green-check";
      break;
    default:
      break;
  }

  let ulClass = "";
  switch (layout) {
    case "grid":
      ulClass = "grid lg:grid-cols-2 gap-2";
      break;
    case "none":
      ulClass = "grid gap-2";
      break;
    default:
      break;
  }

  return (
    <>
      <ul className={`${className ? className : " text-md lg:text-lg "} ${ulClass} pr-8`} style={{ marginLeft: `${margin ? parseToInt(margin) * 4 : ""}px` }}>
        {array.map((item, i) => {
          if (Array.isArray(item)) {
            const [heading, text] = item;
            return (
              <li key={i} className="flex gap-3 items-start mt-1">
                <span className={"mt-1.5 " + bulletClass} />
                <div className="">
                  <span className="block">
                    <strong>{heading}</strong>
                  </span>
                  <span className="block">{text}</span>
                </div>
              </li>
            );
          } else if (typeof item === "string") {
            return (
              <li key={i} className="flex gap-3 mt-1">
                <div className={"mt-1.5 " + bulletClass} />
                <span className="">{item}</span>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Bullets;
