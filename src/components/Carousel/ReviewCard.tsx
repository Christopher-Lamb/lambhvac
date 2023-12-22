import React from "react";

interface ReviewCardProps {
  name: string;
  text: string;
  stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, stars }) => {
  return (
    <div>
      <span>{name}</span>
      <p>{text}</p>
      <span>{stars}</span>
    </div>
  );
};

export default ReviewCard;
