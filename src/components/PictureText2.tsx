import React from "react";
import HOUSE from "../images/House.jpg";

interface HVACComponentProps {
  imageUrl: string;
  altText: string;
  title: string;
  content: string;
  reverseLayout?: boolean;
  imageWidthPercentage?: number; // 40% by default
}

const HVACComponent: React.FC<HVACComponentProps> = ({ imageUrl, altText, title, content, reverseLayout = false, imageWidthPercentage = 50 }) => {
  const textWidthPercentage = 100 - imageWidthPercentage;

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: reverseLayout ? "row-reverse" : "row",
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap", // Allows items to wrap on smaller screens
  };

  const imageContainerStyle: React.CSSProperties = {
    width: `${imageWidthPercentage}%`,
    minWidth: "300px", // Ensures the image doesn't get too small
  };

  const textContainerStyle: React.CSSProperties = {
    width: `${textWidthPercentage}%`,
    padding: "20px",
    minWidth: "300px", // Ensures the text section doesn't get too small
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={HOUSE} alt={altText} style={{ width: "100%", height: "auto" }} />
      </div>
      <div style={textContainerStyle}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HVACComponent;
