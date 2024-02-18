"use-client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component from Next.js

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollable = documentHeight - windowHeight;
    const progress = (scrollY / scrollable) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-3  w-full bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-400 transition-width duration-300 ease-in-out opacity-0"
      style={{
        display: "flex",
        alignItems: "center",
        width: `${scrollProgress > 100 ? 100 : scrollProgress}%`,
        transition: "width 0.3s, opacity 0.3s, left 0.3s",
        opacity: scrollProgress === 0 ? 0 : 1,
      }}
    >
      {/* 90% empty space */}
      <div className={"flex flex-grow"}></div>

      {/* 10% image */}
      <Image
        src="/logo.svg"
        alt="Image"
        width={47} // Adjust width and height as needed
        height={47}
        className="mt-7 left-[25px] object-scale-down relative"
      />
    </div>
  );
};
