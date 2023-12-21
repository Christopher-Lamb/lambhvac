import React, { useRef, useState, useEffect, useReducer } from "react";
import useInterval from "../../hooks/useInterval";
import useDebouncedResize from "../../hooks/useDebounceResize";
import "./Carousel.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const colors = ["bg-red-600", "bg-lime-500", "bg-orange-600", "bg-sky-600", "bg-green-600", "bg-blue-600", "bg-amber-500", "bg-violet-600", "bg-fuchsia-500", "bg-rose-600", "bg-purple-600"];

const items = [...Array(10).keys()];

interface CarouselProps {
  className?: string;
  height: string;
  bgColor: string;
  displayArray: [];
  interval: boolean;
  intervalTime: number;
}

const Carousel: React.FC<CarouselProps> = ({ className, height = "400px", bgColor = "bg-white", displayArray = items, interval = true, intervalTime = 8000 }) => {
  const [canChange, setCanChange] = useState(true);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const intervalSwitchRef = useRef("");
  const [count, setCount] = useState(displayArray.length);
  const [stateArr, setStateArr] = useState([...Array(displayArray.length).keys(), ...Array(displayArray.length).keys()]);

  //Debounce Function for resizing
  const handleResize = async (e: UIEvent) => {
    // console.log("COUNT:", count);
    const position = count + 1;
    setCount(position);
    // //This will re-adjust the sizes of the boxes using two moves a forward and a backwards
    // console.log(window.innerWidth);
    if (scrollbarRef.current) {
      scrollbarRef.current.classList.remove("car-smooth");
      const newScrollPosition = window.innerWidth * position;
      scrollbarRef.current.scrollLeft = newScrollPosition;
    }

    setTimeout(() => {
      handleLeft();
      if (scrollbarRef.current) {
        scrollbarRef.current.classList.add("car-smooth");
      }
    }, 600);

    // console.log(count);
  };
  useDebouncedResize(handleResize, 600);

  useEffect(() => {
    clearInterval(intervalId.current);
    if (scrollbarRef.current) {
      scrollbarRef.current.classList.remove("car-smooth");
      const newScrollPosition = window.innerWidth * count;
      scrollbarRef.current.scrollLeft = newScrollPosition;
      scrollbarRef.current.classList.add("car-smooth");
    }
  }, []);

  // I believe this is handling the wrap around feature
  // Its shifting the entire structure such that the user stays in the middle of the row
  // While also removing the scroll animation at the same time
  useEffect(() => {
    console.log(count);
    if (count === 0) {
      setTimeout(() => {
        if (scrollbarRef.current) {
          setCount(displayArray.length);
          scrollbarRef.current.classList.remove("car-smooth");
          const newScrollPosition = window.innerWidth * displayArray.length;
          scrollbarRef.current.scrollLeft = newScrollPosition;
          scrollbarRef.current.classList.add("car-smooth");
        }
      }, 600);
    }
    if (count === displayArray.length + displayArray.length - 1) {
      setTimeout(() => {
        if (scrollbarRef.current) {
          setCount(displayArray.length - 1);
          scrollbarRef.current.classList.remove("car-smooth");
          const newScrollPosition = window.innerWidth * (displayArray.length - 1);
          scrollbarRef.current.scrollLeft = newScrollPosition;
          scrollbarRef.current.classList.add("car-smooth");
        }
      }, 600);
    }
  }, [count]);
  const intervalId = useInterval(() => {
    if (interval && scrollbarRef.current) {
      const position = arraySwitch("positive");
      const newScrollPosition = window.innerWidth * position;
      scrollbarRef.current.scrollLeft = newScrollPosition;
    }
  }, intervalTime);

  const arraySwitch = (direction: "positive" | "negative") => {
    let position = 0;
    if (direction === "positive") {
      setCount((prevState) => prevState + 1);
      position = count + 1;
      if (count >= stateArr.length - 1) {
        setCount(0);
        position = 0;
      }
    } else if (direction === "negative") {
      setCount((prevState) => prevState - 1);
      position = count - 1;
      if (count === 0) {
        setCount(stateArr.length - 1);
        position = stateArr.length - 1;
      }
    }
    return position;
  };

  const arrayLoop = (direction: "positive" | "negative") => {
    //First initalize
    // You Only have to loop on the first and last one
    let position = 0;
    if (direction === "positive") {
      setCount((prevState) => prevState + 1);
      position = count + 1;
    } else if (direction === "negative") {
      setCount((prevState) => prevState - 1);
      position = count - 1;
    }
    return position;
  };

  const handleRight = () => {
    if (!canChange) return;
    //Move scroll bar to right
    clearInterval(intervalId.current);
    const position = arrayLoop("positive");
    //Move Scroll
    if (scrollbarRef.current) {
      const newScrollPosition = window.innerWidth * position;
      scrollbarRef.current.scrollLeft = newScrollPosition;
    }
    setCanChange(false);
    setTimeout(() => {
      setCanChange(true);
    }, 600);
  };

  const handleLeft = () => {
    if (!canChange) return;

    //Move scroll bar to left
    const position = arrayLoop("negative");
    //Change Scroll Position
    const newScrollPosition = window.innerWidth * position;
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollLeft = newScrollPosition;
    }
    setCanChange(false);
    setTimeout(() => {
      setCanChange(true);
    }, 600);
  };

  return (
    <div className="h-[600px] select-none w-full" style={{ height }}>
      <div className="relative w-full h-full">
        <div className="carousel-btns absolute h-full w-full flex items-center justify-between">
          <div className={"h-full flex items-center w-fit z-[1] car-arrow-contx"}>
            <button onClick={handleLeft} aria-label="Scroll right">
              <BsChevronLeft className="relative cursor-pointer w-8 h-8 sm:h-16 sm:w-16 fill-white hover:scale-110" />
            </button>
          </div>
          <div className={"h-full flex items-center w-fit z-[1] car-arrow-contx"}>
            <button onClick={handleRight} aria-label="Scroll right">
              <BsChevronRight className="relative cursor-pointer w-8 h-8 sm:h-16 sm:w-16 fill-white hover:scale-110" />
            </button>
          </div>
        </div>
        <div ref={scrollbarRef} className="grid grid-rows-1 overflow-hidden h-[600px] " style={{ height }}>
          {stateArr.map((position, i) => {
            const colorPos = i % 11;
            const num = i % 3;
            return (
              // This is the inner part of the carousel
              <div
                key={i}
                style={{ width: `${window.innerWidth}px` }}
                className={`relative row-start-1 w-full h-full snap-center flex items-center justify-center ${colors[colorPos]} ${bgColor}z ${className} text-white`}
              >
                {/* {position} */}
                <div className="w-full bg-blackx h-full grid grid-cols-3 px-32">
                  {/* <div className="bg-white w-full flex items-center justify-center text-black text-center pt-8 border">{displayArray[position]}</div> */}
                  {/* <div className="bg-white w-full flex items-center justify-center text-black text-center pt-8 border">{displayArray[position]}</div> */}
                  <div className="bg-white w-full flex items-center justify-center text-black text-center pt-8 border">
                    {/* {displayArray[position]} */}
                    {count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
