import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { CgQuote } from "react-icons/cg";

interface ReviewCardProps {
  name: string;
  text: string;
  stars: number;
}
//#faa502 ==> orange fb923c

const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, stars }) => {
  return (
    <div className="bg-whitse bordedr text-black lg:text-lg flex items-center">
      <div className="border p-4 bg-white rounded shadow-md ">
        <CgQuote className="absoluste relative right-3 w-7 h-7 lg:h-12 lg:w-12" size={""} />
        <p className="ml-2">{text}</p>
        <span className="font-semibolsd kanit block ml-2">- {name}</span>
        <span className="flex justify-end">
          {[...Array(stars).keys()].map(() => (
            <GiRoundStar color="#faa502" />
          ))}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
