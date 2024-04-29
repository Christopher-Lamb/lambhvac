import React from "react";

interface ContentSectionProps {
  content: string;
  className: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ content, className }) => {
  return <div className={"px-2xsmall xl:px-0 w-full " + className} dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default ContentSection;
