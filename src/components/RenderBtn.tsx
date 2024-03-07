"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Image from "next/image";
  // IMPORTING PROPS
import { RenderButtonProps } from "@/types/props";

function RenderBtn({handleClick}: RenderButtonProps) {
  return (
    <>
      <button 
        className="border p-2 rounded hover:bg-gray-200 flex items-center justify-between w-4/5 mx-auto lg:w-36 lg:justify-around"
        onClick={() => handleClick()}
      >
        <Image src={"/render.svg"} alt="render" width={20} height={20} />
        <span className="font-bold text-black">Open in Render</span>
      </button>
    </>
  );
}

export default RenderBtn;