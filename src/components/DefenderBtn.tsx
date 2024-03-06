"use client"

import Image from "next/image";
import Link from "next/link";

function DefenderBtn() {
  return (
    <button className="border p-2 rounded hover:bg-gray-200 w-[85%] mx-auto">
      <Link
        href="#"
        className="font-bold text-black flex gap-1 justify-around items-center"
      >
        <Image src={"/defender.svg"} alt="defender" width={15} height={15} />
        Deploy with Defender
      </Link>
    </button>
  );
}

export default DefenderBtn;