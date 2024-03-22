"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Image from "next/image";
import Link from "next/link";
  // IMPORTING PROPS
import { DefenderButtonProps } from "@/types/props";

function DefenderBtn({handleClick}: DefenderButtonProps) {
  return (
    <div>
      <button className="border p-2 rounded hover:bg-gray-200">
        <Link href="#" className="font-bold text-black flex gap-1">
          <Image src={"/defender.svg"} alt="defender" width={15} height={15} />
          Deploy with Defender
        </Link>
      </button>
    </div>
  );
}

export default DefenderBtn;