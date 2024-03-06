"use client"

import Image from "next/image";
import Link from "next/link";

function DefenderBtn() {
  return (
    <button className="border p-3 rounded hover:bg-gray-200 w-4/5 mx-auto lg:w-36">
      <Link
        href="#"
        className="font-bold text-black flex gap-1 justify-between items-center text-sm lg:justify-around"
      >
        <Image src={"/defender.svg"} alt="defender" width={15} height={15} />
        Deploy with Defender
      </Link>
    </button>
  );
}

export default DefenderBtn;