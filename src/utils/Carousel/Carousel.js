import React, { useRef, useState, useEffect, useReducer } from "react";
import useInterval from "../../hooks/useInterval";
import "./Carousel.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// const items = [
//   "Incididunt nostrud aute consequat sit adipisicing. Do proident nisi cupidatat irure pariatur Lorem incididunt irure ipsum esse qui eu. Id amet commodo ullamco quis reprehenderit id proident nostrud duis veniam ad eu duis sit.",
//   "Tempor eu eu consectetur non dolor fugiat Lorem velit. Ea ad amet proident proident reprehenderit. Magna aliquip aliqua adipisicing ut deserunt aliqua nulla aliqua qui incididunt. Velit magna Lorem mollit veniam ullamco adipisicing irure minim. Ea ipsum non id enim et nulla laboris reprehenderit Lorem. Pariatur enim exercitation aliqua laboris aliquip in non mollit.",
//   "Incididunt velit magna magna ex consectetur ea cillum est. Esse cupidatat fugiat non quis voluptate non excepteur cillum pariatur. Labore duis amet commodo dolor est nulla amet qui anim cillum duis.",
//   "Mollit est Lorem incididunt proident nulla ea minim adipisicing eiusmod veniam eu minim ut. Culpa laboris sit minim deserunt irure excepteur commodo laboris dolore cupidatat nostrud magna. Anim pariatur sit ullamco velit excepteur. Sit Lorem ea nisi consequat nostrud aute deserunt labore.",
//   "Incididunt nostrud aute consequat sit adipisicing. Do proident nisi cupidatat irure pariatur Lorem incididunt irure ipsum esse qui eu. Id amet commodo ullamco quis reprehenderit id proident nostrud duis veniam ad eu duis sit.",
//   "Tempor eu eu consectetur non dolor fugiat Lorem velit. Ea ad amet proident proident reprehenderit. Magna aliquip aliqua adipisicing ut deserunt aliqua nulla aliqua qui incididunt. Velit magna Lorem mollit veniam ullamco adipisicing irure minim. Ea ipsum non id enim et nulla laboris reprehenderit Lorem. Pariatur enim exercitation aliqua laboris aliquip in non mollit.",
//   "Incididunt velit magna magna ex consectetur ea cillum est. Esse cupidatat fugiat non quis voluptate non excepteur cillum pariatur. Labore duis amet commodo dolor est nulla amet qui anim cillum duis.",
//   "Mollit est Lorem incididunt proiden Anim ut ipsum velit voluptate aute occaecat exercitation aliqua veniam exercitation voluptate consectetur. Aute quis incididunt ut sunt duis esse incididunt. Anim incididunt reprehenderit aliquip sint sunt id commodo minim qui excepteur.t nulla ea minim adipisicing eiusmod veniam eu minim ut. Culpa laboris sit minim deserunt irure excepteur commodo laboris dolore cupidatat nostrud magna. Anim pariatur sit ullamco velit excepteur. Sit Lorem ea nisi consequat nostrud aute deserunt labore.",
// ];

const colors = ["bg-red-600", "bg-lime-500", "bg-orange-600", "bg-sky-600", "bg-green-600", "bg-blue-600", "bg-amber-500", "bg-violet-600", "bg-fuchsia-500", "bg-rose-600", "bg-purple-600"];

const items = [...Array(10).keys()];

function Carousel({ className, height = "400px", bgColor = "bg-white", displayArray = items, interval = true, intervalTime = 800000 }) {
  const [canChange, setCanChange] = useState(true);
  const scrollbarRef = useRef();
  const containerRef = useRef();
  const [width, setWidth] = useState();
  // const intervalSwitchRef = useRef("");
  const [count, setCount] = useState(displayArray.length);
  const [stateArr, setStateArr] = useState([...Array(displayArray.length).keys(), ...Array(displayArray.length).keys()]);

  const [userText, handleUserKeyPress] = useReducer((state, event) => {
    const innerWidth = event.target.innerWidth;

    setTimeout(() => {
      if (window.innerWidth === innerWidth) {
        initScrollbar(() => {
          scrollbarRef.current.classList.remove("smooth");
          const newScrollPosition = containerRef.current.clientWidth * count;
          scrollbarRef.current.scrollLeft = newScrollPosition;
          scrollbarRef.current.classList.add("smooth");
        });
      }
    }, 1000);

    // isUpperCase is always the most recent state (no stale closure value)
    return;
  }, "");

  const initScrollbar = async (callback) => {
    await setWidth(containerRef.current.clientWidth);
    await callback();
  };

  useEffect(() => {
    clearInterval(intervalId.current);
    initScrollbar(() => {
      scrollbarRef.current.classList.remove("smooth");
      const newScrollPosition = containerRef.current.clientWidth * count;
      scrollbarRef.current.scrollLeft = newScrollPosition;
      scrollbarRef.current.classList.add("smooth");
    });
    window.addEventListener("resize", handleUserKeyPress);
    return () => {
      window.removeEventListener("resize", handleUserKeyPress);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        setCount(displayArray.length);
        scrollbarRef.current.classList.remove("smooth");
        const newScrollPosition = width * displayArray.length;
        scrollbarRef.current.scrollLeft = newScrollPosition;
        scrollbarRef.current.classList.add("smooth");
      }, 600);
    }
    if (count === displayArray.length + displayArray.length - 1) {
      setTimeout(() => {
        setCount(displayArray.length - 1);
        scrollbarRef.current.classList.remove("smooth");
        const newScrollPosition = width * (displayArray.length - 1);
        scrollbarRef.current.scrollLeft = newScrollPosition;
        scrollbarRef.current.classList.add("smooth");
      }, 600);
    }
  }, [count]);
  const intervalId = useInterval(() => {
    if (interval) {
      const position = arraySwitch("positive");
      const newScrollPosition = width * position;
      scrollbarRef.current.scrollLeft = newScrollPosition;
    }
  }, intervalTime);

  const arraySwitch = (direction) => {
    setWidth(containerRef.current.clientWidth);
    let position = 0;
    if (direction === "positive") {
      setCount((prevState) => prevState + 1);
      position = count + 1;
      if (count >= stateArr.length - 1) {
        setCount(0);
        position = 0;
      }
    } else if (direction === "negative") {
      setCount((prevState) => prevState - 1, 0);
      position = count - 1;
      if (count === 0) {
        setCount(stateArr.length - 1);
        position = stateArr.length - 1;
      }
    }
    return position;
  };

  const arrayLoop = (direction) => {
    setWidth(containerRef.current.clientWidth);
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
    const newScrollPosition = width * position;
    scrollbarRef.current.scrollLeft = newScrollPosition;
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
    const newScrollPosition = containerRef.current.clientWidth * position;
    scrollbarRef.current.scrollLeft = newScrollPosition;
    setCanChange(false);
    setTimeout(() => {
      setCanChange(true);
    }, 600);
  };

  return (
    <div ref={containerRef} className="h-[300px] select-none w-full" style={{ height }}>
      <div className="relative w-full h-full">
        <div className="carousel-btns absolute h-full w-full flex items-center justify-between">
          <div className={"h-full flex items-center w-fit z-[1] arrowCont"}>
            <BsChevronLeft onClick={handleLeft} className="relative z-[100] cursor-pointer w-8 h-8 sm:h-16 sm:w-16 fill-white hover:scale-110" />
          </div>
          <div className={"h-full flex items-center w-fit z-[1] arrowCont"}>
            <BsChevronRight onClick={handleRight} className="relative z-[100] cursor-pointer w-8 h-8 sm:h-16 sm:w-16 fill-white hover:scale-110" />
          </div>
        </div>
        <div ref={scrollbarRef} className="grid grid-rows-1 overflow-hidden h-[300px] " style={{ height }}>
          {stateArr.map((position, i) => {
            const colorPos = i % 11;
            return (
              // This is the inner part of the carousel
              <div
                key={i}
                style={{ width: `${width}px` }}
                className={`relative row-start-1 w-full h-full snap-center flex items-center justify-center ${colors[colorPos]} s${bgColor} ${className} text-white`}
              >
                <div className="absolute bg-gray-700 h-24 w-96 top-0">
                  <p>
                    Position: <span className="font-bold text-lg">{position}</span>
                  </p>
                  <p>
                    Index: <span className="font-bold text-lg">{i}</span>
                  </p>
                  <p>
                    Count: <span className="font-bold text-lg">{count}</span>
                  </p>
                </div>
                {position}
                <div className="flex gap-16 min-w-6xl justify-between">
                  {/* <div className="h-32 w-32 bg-white text-black text-center pt-8 border">{displayArray[position]}</div>
                    <div className="h-32 w-32 bg-white text-black text-center pt-8 border">{displayArray[position]}</div>
                    <div className="h-32 w-32 bg-white text-black text-center pt-8 border">{displayArray[position]}</div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
