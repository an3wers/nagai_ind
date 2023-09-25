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
        <div className=" flex justify-center h-10 border-b border-gray-700 bg-black">
          <button onClick={toTopHandler}>Top</button>
        </div>
      </Headroom>
    </>
  ) : null;
};

export { TopLine };
