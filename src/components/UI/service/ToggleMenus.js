'use client'
import React, { useState } from "react";
import Contain1 from "./Contain1";
import Contain2 from "./Contain2";


const ToggleMenus = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const toggleButton1 = () => {
    setActiveButton("button1");
  };

  const toggleButton2 = () => {
    setActiveButton("button2");
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 font-semibold border-2 border-brand md:w-1/3 w-1/2">
        <button
          className={`py-2 ${
            activeButton === "button1"
              ? "bg-brand text-white duration-500"
              : "bg-white text-black duration-500"
          }`}
          onClick={toggleButton1}
        >
          Offline Service
        </button>
        <button
          className={`py-2 ${
            activeButton === "button2"
              ? "bg-brand text-white duration-500"
              : "bg-white text-black duration-500"
          }`}
          onClick={toggleButton2}
        >
          Online Service
        </button>
      </div>
      {activeButton === "button1" ? <Contain1 /> : <Contain2 />}
    </div>
  );
};

export default ToggleMenus;
