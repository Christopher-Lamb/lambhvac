import React from "react";
import "./CallToAction.css"

interface CallToActionProps {
  title: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title }) => {
  return (
    <div className="max-w-five w-full mx-auto flex justify-between flex-wrap flex-col lg:flex-row rounded-xl lg:px-med py-small bg-lambbluex cta-gradient text-white">
      <span className="text-med sm:text-4xl px-4 lg:px-0 lg:text-large text-center lg:text-left font-semibold w-full lg:w-6/12 block" aria-label="Call To Action">
        CALL LAMB HEATING AND AIR CONDITIONING TODAY!
      </span>
      <div className="flex items-center justify-center w-full lg:w-[367px] mt-small lg:mt-0">
        <a href="#form" className="py-2xsmall px-xsmall rounded bg-lambbluedarker text-small18 text-white font-semibold mr-3xsmall sm:mr-xsmall hover:brightness-110 shadow-md shadow-lambbluedarker">
          Contact Us
        </a>
        <a className="py-2xsmall px-xsmall rounded-lg bg-white text-gray-900 text-small18 font-semibold hover:brightness-110 shadow-md shadow-lambbluedarker" href="tel:1+8562174920">
          (856)-217-4920
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
