"use client";
import { useEffect, useState } from "react";

export default function useDarkSide(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [theme, setTheme] = useState<string>(localStorage.theme || "light");
  const colorTheme: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
