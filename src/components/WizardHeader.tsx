"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// A FUNCTION THAT GENERATES A WIZARDHEADER COMPONENT
export default function WizardHeader() {
  const [isHome, setIsHome] = useState(true);
  const svg = "/logo.svg";

  return (
    <div className="flex flex-row items-center min-w-[800px] mx-auto p-4 place-content-between bg-[#ffffff] mb-8">
      <div className="flex items-center">
        <Image src={svg} alt="birble logo" width={50} height={50} />
        <Link
          href={"https://www.birbleai.com/"}
          className="font-semibold text-xl ml-2 text-[#333333]"
        >
          Birble AI
          <span className="font-light text-xl text-[#333333]">| contracts</span>
        </Link>
        <Link href={"/"}>
          <div
            className={`${
              isHome
                ? "border-none bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] text-white p-2 ml-4 rounded-[0.5rem]"
                : "group bg-white border-[1.5px] hover:border-none border-[#4e5de4] hover:bg-gradient-to-r hover:from-[#51d4ff] hover:to-[#4e5de4]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
            }`}
            onClick={() => setIsHome(true)}
          >
            <div
              className={`text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] hover:text-white text-transparent font-bold ${
                isHome ? "text-white" : ""
              }`}
            >
              Solidity Wizard
            </div>
          </div>
        </Link>
        <Link href={"/cairo"}>
          <div
            className={`${
              !isHome
                ? "border-none bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] text-white p-2 ml-4 rounded-[0.5rem]"
                : "group bg-white border-[1.5px] hover:border-none border-[#fe4a3c] hover:bg-gradient-to-r hover:from-[#fe9149] hover:to-[#fe4a3c]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
            }`}
            onClick={() => setIsHome(false)}
          >
            <div
              className={` text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#fe9149] to-[#fe4a3c]  font-bold hover:text-white text-transparent ${
                !isHome ? "text-white" : ""
              }`}
            >
              Cairo Wizard
            </div>
          </div>
        </Link>
      </div>
      <div>
        <a
          href={"https://t.me/birblemain"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          Forum
        </a>
        <a
          href={"https://www.birbleai.com/"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
        <a
          href={"https://github.com/Birblewin"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={"https://twitter.com/birble_AI"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  )
}