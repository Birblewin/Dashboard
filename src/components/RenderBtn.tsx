"use client"

import Image from "next/image";

function RenderBtn() {
  return (
    <>
      <button className="border p-2 rounded hover:bg-gray-200 flex items-center justify-between w-4/5 mx-auto lg:w-36 lg:justify-around">
        <Image src={"/render.svg"} alt="render" width={20} height={20} />
        <span className="font-bold text-black">Open in Render</span>
      </button>
    </>
  );
}

export default RenderBtn;