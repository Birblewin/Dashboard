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
      <button className="border text-white hover:border-[#4D3C77] hover:bg-[#4D3C77] p-2 rounded ">
        <Link href="https://docs.openzeppelin.com/defender/v2/tutorial/deploy?utm_campaign=Defender%20GA_2024&utm_source=Wizard#environment_setup" className="font-bold text-white flex gap-1" target="_blank" rel="noreferrer">
          <Image src={"/defender.svg"} alt="defender" width={15} height={15} style={{ filter: 'invert(100%)' }} />
          Deploy with Defender
        </Link>
      </button>
    </div>
  );
}

export default DefenderBtn;