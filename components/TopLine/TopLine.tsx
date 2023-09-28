"use client";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
import "./topline.css";

const TopLine = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(() => window.innerWidth);
    const resizeHanlder = () => {
      setScreenWidth(() => window.innerWidth);
    };

    window.addEventListener("resize", resizeHanlder);

    return () => {
      window.removeEventListener("resize", resizeHanlder);
    };
  }, []);

  const toTopHandler = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return screenWidth < 768 ? (
    <>
      <Headroom disableInlineStyles>
        <div className=" flex justify-center h-12 border-b border-gray-700 bg-black">
          <button onClick={toTopHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#FFFFFF"
            >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </svg>
          </button>
        </div>
      </Headroom>
    </>
  ) : null;
};

export { TopLine };
