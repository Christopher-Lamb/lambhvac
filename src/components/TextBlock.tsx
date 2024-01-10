import React from "react";

interface TextBlockProps {
  heading: string;
  children: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ heading, children, className }) => {
  return (
    <>
      <h3 className={"text " + className}>{heading}</h3>
      <p className="text mt-1">{children}</p>
    </>
  );
};

export default TextBlock;
