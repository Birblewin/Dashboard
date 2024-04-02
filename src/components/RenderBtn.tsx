"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Image from "next/image";
  // IMPORTING PROPS
import { RenderButtonProps } from "@/types/props";

function RenderBtn({handleClick}: RenderButtonProps) {
  return (
    <>
      <button className="font-bold text-white hover:border-[#4D3C77] hover:bg-[#4D3C77] border p-2 rounded flex gap-1 items-center">
        <Image src={"/render.svg"} alt="render" width={20} height={20} style={{ filter: 'invert(100%)' }}  />
        Open in Remix
      </button>
    </>
  );
}

export default RenderBtn;