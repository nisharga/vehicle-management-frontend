"use client";

import { useState } from "react";

const Header = () => {
  // nav color change
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <nav
      className={`${
        color ? "bg-white shadow-lg" : "bg-white shadow-sm"
      } sticky top-0 z-[9999] flex flex-wrap
          justify-end
          pr-12
          text-lg`}
    >
      <div className="w-auto">
        <ul
          className="
              gap-x-5
              py-5
              flex"
        >
          <li>
            <a className="text-base text-secondary block" href="#">
              Item 1
            </a>
          </li>
          <li>
            <a className="text-base text-secondary block" href="#">
              item 2
            </a>
          </li>
          <li>
            <a className="text-base text-secondary block" href="#">
              item 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
