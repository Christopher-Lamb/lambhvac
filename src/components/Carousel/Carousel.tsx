import React, { useRef, useState, useEffect, useReducer } from "react";
import useInterval from "../../hooks/useInterval";
import useDebouncedResize from "../../hooks/useDebounceResize";
import { splitArrayIntoChunks } from "./carouselUtils";
import ReviewArr from "../../utils/reviews";
import "./Carousel.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReviewCard from "./ReviewCard";

const colors = ["bg-red-600", "bg-lime-500", "bg-orange-600", "bg-sky-600", "bg-green-600", "bg-blue-600", "bg-amber-500", "bg-violet-600", "bg-fuchsia-500", "bg-rose-600", "bg-purple-600"];

// === Future Features
//It works for now but the
// const newScrollPosition = window.innerWidth * position;
// scrollbarRef.current.scrollLeft = newScrollPosition;
// Could be a lot cleaner and DRY'er
//The variants with component and array could be taken out of this file and imported ==> for this project its not neccessary even though ill be adding a blog
// Scrool speed is a little fast aswell would be nice if javascript scroll to controll easing in and out
// aria-hidden on elements that arent in view

interface CarouselProps {
  className?: string;
  height: string;
  bgColor?: string;
  variant?: "reviews";
  interval?: boolean;
  intervalTime?: number;
}
const variants = { reviews: { arr: ReviewArr, component: ReviewCard } };

const Carousel: React.FC<CarouselProps> = ({ className, height = "400px", bgColor = "bg-white", variant = "reviews", interval = true, intervalTime = 8000 }) => {
  const [canChange, setCanChange] = useState(true);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [gridCols, setGridCols] = useState(3);
  const [items, setItems] = useState<any[][]>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);
  const [positionArray, setPositionArray] = useState<number[]>([]);

  debugger;
  //Debounce Function for resizing
  const handleResize = async (e: UIEvent) => {
    const newLength = carouselSpliter();
    // console.log("COUNT:", count);
    // const position = count + 1;
    // setCount(position);
    // //This will re-adjust the sizes of the boxes using two moves a forward and a backwards
    if (scrollbarRef.current) {
      if (!items) return;
      scrollbarRef.current.classList.remove("car-smooth");
      const newScrollPosition = window.innerWidth * newLength;
      scrollbarRef.current.scrollLeft = newScrollPosition;
      scrollbarRef.current.classList.add("car-smooth");
    }

    // setTimeout(() => {
    //   handleLeft();
    //   if (scrollbarRef.current) {
    //   }
    //   // carouselSpliter();
    // }, 600);
  };

  useDebouncedResize(handleResize, 600);

  useEffect(() => {
    carouselSpliter();
    clearInterval(intervalId.current);
    //Initalizes it in the correct position
    console.log("loaded once");
  }, []);
  //Takes the input array and chuncks it and sets state accordingly
  const carouselSpliter = (): number => {
    const screenW = window.innerWidth;
    let length: number = 0;
    if (screenW >= 1280) {
      //xl+ screen width
      const chunkedArr = splitArrayIntoChunks(variants[variant].arr, 3);
      setGridCols(3);
      distributeState(chunkedArr);
      length = chunkedArr.length;
    } else if (screenW < 1280 && screenW >= 784) {
      //md to xl
      const chunkedArr = splitArrayIntoChunks(variants[variant].arr, 2);
      setGridCols(2);
      distributeState(chunkedArr);
      length = chunkedArr.length;
    } else {
      //less than md
      const chunkedArr = splitArrayIntoChunks(variants[variant].arr, 1);
      setGridCols(1);
      distributeState(chunkedArr);
      length = chunkedArr.length;
    }
    return length;
  };

  const distributeState = (arr: any[]) => {
    console.log("Received array in distributeState:", arr);
    setItems(arr);
    setCount(arr.length);
    console.log("arr length", arr.length);
    setPositionArray([...Array(arr.length).keys(), ...Array(arr.length).keys()]);
  };

  //When we get our items we use the amount and we can set the scroll position
  useEffect(() => {
    console.log(items); // Log the updated state
    if (scrollbarRef.current) {
      if (!items) return;
      scrollbarRef.current.classList.remove("car-smooth");
      const newScrollPosition = window.innerWidth * items.length; //change to items.length
      scrollbarRef.current.scrollLeft = newScrollPosition;
      scrollbarRef.current.classList.add("car-smooth");
    }
  }, [items]); // Dependency array to run useEffect when items changes

  // I believe this is handling the wrap around feature
  // Its shifting the entire structure such that the user stays in the middle of the row
  // While also removing the scroll animation at the same time
  useEffect(() => {
    if (!items) return;
    // If at start
    if (count === 0) {
      setTimeout(() => {
        if (scrollbarRef.current) {
          setCount(items.length);
          scrollbarRef.current.classList.remove("car-smooth");
          const newScrollPosition = window.innerWidth * items.length;
          scrollbarRef.current.scrollLeft = newScrollPosition;
          scrollbarRef.current.classList.add("car-smooth");
        }
      }, 600);
    }
    //If at the end
    if (count === items.length + items.length - 1) {
      setTimeout(() => {
        if (scrollbarRef.current) {
          setCount(items.length - 1);
          scrollbarRef.current.classList.remove("car-smooth");
          const newScrollPosition = window.innerWidth * (items.length - 1);
          scrollbarRef.current.scrollLeft = newScrollPosition;
          scrollbarRef.current.classList.add("car-smooth");
        }
      }, 600);
    }
  }, [count]);

  //Timer for auto looping effect
  const intervalId = useInterval(() => {
    if (interval && scrollbarRef.current) {
      const position = arrayLoop("positive");
      const newScrollPosition = window.innerWidth * position;
      scrollbarRef.current.scrollLeft = newScrollPosition;
    }
  }, intervalTime);

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
  //Right Arrow
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

  //Left Arrow
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
          {positionArray.map((position, i) => {
            const colorPos = i % 11;
            // console.log(position);
            if (!items) return;
            return (
              // This is the inner part of the carousel
              <div
                key={i}
                style={{ width: `${window.innerWidth}px` }}
                className={`relative row-start-1 w-full h-full snap-center flex items-center justify-center s${colors[colorPos]} ${bgColor}z ${className} text-white`}
              >
                {/* {position} */}
                <div ref={containerRef} className="car-container " style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}>
                  {/* <div className="bg-white w-full flex items-center justify-center text-black text-center pt-8 border">{items[position][0].name}</div>
                  <div className="bg-white w-full flex items-center justify-center text-black text-center pt-8 border">{items[position][0].name}</div> */}
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
                  {items[position].map((props, i) => {
                    const Componet = variants[variant].component;
                    return (
                      <div key={i} className="bg-white w-full flex items-center justify-center text-black text-center pt-8 border">
                        <Componet {...props} />
                      </div>
                    );
                  })}
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
