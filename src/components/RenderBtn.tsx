"use client"

import Image from "next/image";

function RenderBtn() {
  return (
    <>
      <button className="font-bold text-black border p-2 rounded hover:bg-gray-200 flex gap-1 items-center">
        <Image src={"/render.svg"} alt="render" width={20} height={20} />
        Open in Render
      </button>
    </>
  );
}

export default RenderBtn;