import React from "react";
import Button from "../components/Button";
import { Link } from "gatsby";

function parseElement(elString: string): string[] {
  const [elName, second] = elString
    .replaceAll(/(<)|(>)/g, "")
    .split(/(.*?) /)
    .filter((el) => el !== "" && el !== undefined);
  return [elName, second];
}

const GetText: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      {children
        .split(/(<.*?>.*?<\/.*?>)/)
        .filter((el) => el !== "" && el !== undefined)
        .map((text, i) => {
          //           console.log(text);
          const [openTag, innerText, closingTag] = text.split(/(<.*?>)/).filter((el) => el !== "" && el !== undefined);
          //           // console.log("Element", { text, openTag, innerText, closingTag });
          const [elName, second] = parseElement(openTag);

          switch (elName) {
            case "strong":
              return <strong key={i}>{innerText}</strong>;
            case "a":
              return (
                <Link key={i} to={second} style={{ color: "var(--lambbluedarker)", textDecoration: "underline" }}>
                  {innerText}
                </Link>
              );
            default:
              return text;
          }
        })}
    </>
  );
};

function extractUlContents(index: number, arr: string[]): string[] {
  let isUlBlock = false;
  let ulContents: string[] = [];
  const slicedArr = arr.slice(index, -1);

  isUlBlock = true; // Start capturing
  slicedArr.forEach((item) => {
    const [elName, second] = parseElement(item);
    if (elName === "ul") {
    } else if (elName === "/ul") {
      isUlBlock = false;
      return;
    } else if (isUlBlock) {
      ulContents.push(item); // Capture list items
    }
  });
  return ulContents;
}

interface StringArrToHtmlProps {
  arr: string[];
}

const StringArrToHtml: React.FC<StringArrToHtmlProps> = ({ arr }) => {
  return (
    <div>
      {arr.map((item, i) => {
        const filteredItem = item.split(/^(<.*?>)/).filter((el) => el !== "" && el !== undefined);
        const [delimitter, text] = filteredItem;
        const [elName, second] = parseElement(delimitter);
        //         console.log({ elName, second });
        switch (elName) {
          case "p":
            return (
              <p key={i} className={"text " + second}>
                <GetText>{text}</GetText>
              </p>
            );
          case "h3":
            return (
              <h3 key={i} className="text">
                {text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={i} className={"text"}>
                <GetText>{text}</GetText>
              </h4>
            );
          case "button":
            const [del, variant, btn] = item.split(/\((.*?)\)/).filter((el) => el !== "" && el !== undefined);
            return (
              <Button key={i} variant={variant} className="mt-3">
                {btn}
              </Button>
            );
          case "ul":
            const ulContents = extractUlContents(i, arr);
            return (
              <ul key={i} className={"list-disc ml-4 " + second}>
                {ulContents.map((li, i) => (
                  <li key={i} className="text">
                    <GetText>{li}</GetText>
                  </li>
                ))}
              </ul>
            );
          default:
            return;
        }
      })}
    </div>
  );
};

export default StringArrToHtml;
export { extractUlContents };
