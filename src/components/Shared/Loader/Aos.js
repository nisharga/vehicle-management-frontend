"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);

  return null;
};
