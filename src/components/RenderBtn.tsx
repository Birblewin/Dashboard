"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Image from "next/image";
  // IMPORTING PROPS
import { RenderButtonProps } from "@/types/props";

function RenderBtn({handleClick}: RenderButtonProps) {
  return (
    <>
      <button className="font-bold text-black border p-2 rounded hover:bg-gray-200 flex gap-1 items-center">
        <Image src={"/render.svg"} alt="render" width={20} height={20} />
        Open in Remix
      </button>
    </>
  );
}

export default RenderBtn;