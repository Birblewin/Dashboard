"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Image from "next/image";
import Link from "next/link";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Popover from "@/components/Popover"
import { cairo, wizard } from "../store/headerBtns";
  // IMPORTING MODULES
import { useState } from "react";
import {atom, useRecoilState} from "recoil"

// A FUNCTION THAT GENERATES A NAVBAR COMPONENT
export default function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const [Cairo, setCairo] = useRecoilState(cairo);
  const [Wizard, setWizard] = useRecoilState(wizard);

  const handleWizardClick = () => {
    setIsHome(true);
    setWizard(true);
    setCairo(false);
  };

  const handleCairoClick = () => {
    setIsHome(false);
    setCairo(true);
    setWizard(false);
  };

  return (
    <nav className="flex flex-row items-center p-4 justify-between bg-[#ffffff] mb-8">
      {/* VISIBLE FOR SMALL ONLY */}
      <Link
        href={"https://www.birbleai.com/"}
        target="_blank"
        className="md:hidden"
      >
        <Image src={"/logo.svg"} alt="birble logo" width={50} height={50} />
      </Link>

      {/* EDITORPOPOVER, MD:HIDDEN */}
      <div className="md:hidden">
        <Popover
          imageComponent={
            <MenuRoundedIcon
              fontSize="large"
              className="border-2 border-slate-600 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out"
            />
          }
        >
          <div className="flex flex-col gap-2">
            <Link href={"/wizard"}>
              <div
                className={`${
                  isHome
                    ? "border-none bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] text-white p-2 ml-4 rounded-[0.5rem]"
                    : "group bg-white border-[1.5px] hover:border-none border-[#4e5de4] hover:bg-gradient-to-r hover:from-[#51d4ff] hover:to-[#4e5de4]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
                }`}
                onClick={handleWizardClick}
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

            <Link href={"/wizard/cairo"}>
              <div
                className={`${
                  !isHome
                    ? "border-none bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] text-white p-2 ml-4 rounded-[0.5rem]"
                    : "group bg-white border-[1.5px] hover:border-none border-[#fe4a3c] hover:bg-gradient-to-r hover:from-[#fe9149] hover:to-[#fe4a3c]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
                }`}
                onClick={handleCairoClick}
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

            <Link
              href={"https://t.me/birblemain"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
            >
              Forum
            </Link>

            <Link
              href={"https://www.birbleai.com/"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </Link>

            <Link
              href={"https://github.com/Birblewin"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>

            <Link
              href={"https://twitter.com/birble_AI"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Link>
          </div>
        </Popover>
      </div>

      {/* VISIBLE FROM MIDDLE UP */}
      <div className="hidden md:flex items-center">
        <div className="flex gap-1">
          <Link
            href={"https://www.birbleai.com/"}
            target="_blank"
          >
            <Image src={"/logo.svg"} alt="birble logo" width={50} height={50} />
          </Link>

          {/* VISIBLE FROM LARGE UP */}
          <Link
            href={"https://www.birbleai.com/"}
            className="font-semibold lg:text-xl text-lg ml-2 text-[#333333] hidden lg:block my-auto"
          >
            Birble AI
            <span className="font-light lg:text-xl text-lg text-[#333333]">
              | contracts
            </span>
          </Link>
        </div>

        <Link href={"/wizard"}>
          <div
            className={`${
              isHome
                ? "border-none bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] text-white p-2 ml-4 rounded-[0.5rem]"
                : "group bg-white border-[1.5px] hover:border-none border-[#4e5de4] hover:bg-gradient-to-r hover:from-[#51d4ff] hover:to-[#4e5de4]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
            }`}
            onClick={handleWizardClick}
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

        <Link href={"/wizard/cairo"}>
          <div
            className={`${
              !isHome
                ? "border-none bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] text-white p-2 ml-4 rounded-[0.5rem]"
                : "group bg-white border-[1.5px] hover:border-none border-[#fe4a3c] hover:bg-gradient-to-r hover:from-[#fe9149] hover:to-[#fe4a3c]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
            }`}
            onClick={handleCairoClick}
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

      {/* VISIBLE FROM MIDDLE UP */}
      <div className="hidden md:flex items-center">
        <Link
          href={"https://t.me/birblemain"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          Forum
        </Link>
        <Link
          href={"https://www.birbleai.com/"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </Link>
        <Link
          href={"https://github.com/Birblewin"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        <Link
          href={"https://twitter.com/birble_AI"}
          className="font-medium text-[1rem] ml-4 text-[#333333]"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>
      </div>
    </nav>
  );
}