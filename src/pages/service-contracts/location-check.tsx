import React, { useEffect, useState } from "react";
import { PageProps, HeadFC } from "gatsby";
import Header from "../../components/Header/Header";
import cities from "../../utils/service-contract-cities";
import useDebouncedResize from "../../hooks/useDebounceResize";

function reorderArrayForSnakingColumns(arr: string[], numCols: number): string[] {
  const numRows = Math.ceil(arr.length / numCols);
  const output = new Array(arr.length);
  let index = 0;

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      if (index < arr.length) {
        const position = col + row * numCols;
        output[position] = arr[index];
        index++;
      }
    }
  }
  return output;
}

const LocationCheckPage: React.FC<PageProps> = () => {
  const [numberCols, setNumberCols] = useState(4);
  let reorderedArray = reorderArrayForSnakingColumns(cities, numberCols);

  const handleColNumber = () => {
    if (window.innerWidth >= 1024) {
      setNumberCols(4);
    } else if (window.innerWidth >= 768) {
      setNumberCols(3);
    } else if (window.innerWidth >= 640) {
      setNumberCols(2);
    } else {
      setNumberCols(1);
    }
  };
  useDebouncedResize(handleColNumber, 100);

  useEffect(() => {
    handleColNumber();
  }, []);
  // useDebouncedResize(() => {
  //   reorderedArray = reorderArrayForSnakingColumns(cities, 4);
  // }, 100);

  return (
    <>
      <Header title="Location Check" />
      <section className="cont lg:max-w-4xl mx-auto">
        <span className="text block text-center mt-4">Please select a location from the list to confirm our service availability in your area of New Jersey.</span>
        <span className="block text-center mb-4">If your specific location is not listed, we regret to inform you that our services do not currently extend to that area.*</span>
        <ul className="grid grid-cols-1 px-4 lg:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {reorderedArray.map((location, i) => {
            console.log(reorderedArray.length);
            return (
              <div className="flex gap-2 items-center font-semibold hover:scale-[1.1] hover:ml-4 hover:underline cursor-pointer">
                <div className="lamb-bullet rounded-2xl shrink-0" style={{ width: "9px", height: "9px" }} />
                <li className="capitalize text-lg">
                  <a>{location}</a>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default LocationCheckPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="Reach out to our expert HVAC team for top-notch heating, cooling, and ventilation solutions. Contact us today for reliable service and professional advice" />
    <title>Location Verification - Professional HVAC Services & Support</title>;
  </>
);
