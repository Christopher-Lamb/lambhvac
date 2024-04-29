import React from "react";
import "./Solution.css";

interface SolutionProps {
  content: string;
}

const Solution: React.FC<SolutionProps> = ({ content }) => {
  return (
    <div className="solution-background">
      <div className="max-w-five mx-auto">
        <div className="solution-text lg:w-[55%] py-med px-2xsmall xl:px-0">
          <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="pt-small">
            <a
              href="/request-service"
              className="py-2xsmall px-xsmall rounded bg-lambblue border border-white text-small18 text-white font-semibold mr-3xsmall sm:mr-xsmall hover:brightness-110 shadow-md shadow-lambbluedarker"
            >
              Request Service
            </a>
            <a
              href="tel:+18562174920"
              className="py-2xsmall px-xsmall rounded bg-white border border-lambblue text-lambbluedarker text-small18 font-semibold mr-3xsmall sm:mr-xsmall hover:brightness-110 shadow-md shadow-lambbluedarker"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
