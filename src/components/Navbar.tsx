"use client";

// IMPORTING COMPONENTS
import Image from "next/image";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Popover from "@/components/Popover";
// IMPORTING ATOMS
import wizardTab from "@/store/wizard";
// IMPORTING MODULES
import React from "react";
import { useRecoilState } from "recoil";
import { usePathname } from "next/navigation";
// IMPORTING TYPES
import { IsOpenType, WizardTabType } from "@/types/types";
// IMPORTING LIBS
import getCurrentTab from "@/lib/getCurrentTab"

// A FUNCTION THAT GENERATES A NAVBAR COMPONENT
export default function Navbar() {
  // GETTING THE CURRENT URL PATH VISITED
  const pathName: string = usePathname();

  // GETTING THE CURRENT TAB FROM THE ATOM, AND SETTING IT APPROPRIATELY
  const [currentTab, setCurrentTab] = useRecoilState<WizardTabType>(wizardTab);

  // A STATE TO KEEP TRACK OF WHETHER OR NOT THE POPUP IS OPEN
  const [isOpen, setIsOpen] = React.useState<Pick<IsOpenType, "linksPopup">>({
    linksPopup: false,
  });

  // A USEEFFECT TO RESET THE CURRENT TAB IN CASE THE CURRENT LINK CHANGES
  React.useEffect(() => {
    setCurrentTab(getCurrentTab(pathName));
  }, [pathName, setCurrentTab]);

  return (
    <nav className="flex flex-row items-center p-4 justify-between bg-transparent mb-8">
      {/* VISIBLE FOR SMALL ONLY */}
      <Link
        href={"https://www.birbleai.com/"}
        target="_blank"
        className="md:hidden"
      >
        <Image
          src={"/logo.svg"}
          alt="birble logo"
          width={50}
          height={50}
          priority={true}
        />
      </Link>

      {/* EDITOR POPOVER, MD:HIDDEN */}
      <div className="md:hidden flex gap-3">
        {currentTab === "Solidity" && (
          <p className="font-bold border-none bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] text-white p-2 ml-4 rounded-[0.5rem]">
            Solidity
          </p>
        )}
        {currentTab === "Cairo" && (
          <p className="font-bold border-none bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] text-white p-2 ml-4 rounded-[0.5rem]">
            Cairo
          </p>
        )}
        {currentTab === "Other" && (
          <p className="font-bold border-none bg-gradient-to-r from-gray-500 to-black via-slate-400 text-white p-2 ml-4 rounded-[0.5rem]">
            Cairo
          </p>
        )}

        <Popover
          imageComponent={
            <MenuRoundedIcon
              fontSize="large"
              className="border-2 border-slate-600 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  linksPopup: !prevState.linksPopup,
                }))
              }
            />
          }
          isOpen={isOpen.linksPopup}
        >
          <div className="flex flex-col gap-2">
            <Link href={"/wizard"}>
              <div
                className={`${
                  currentTab === "Solidity"
                    ? "border-none bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] text-white p-2 ml-4 rounded-[0.5rem]"
                    : "group bg-white border-[1.5px] hover:border-none border-[#4e5de4] hover:bg-gradient-to-r hover:from-[#51d4ff] hover:to-[#4e5de4]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
                }`}
                onClick={() =>
                  setIsOpen((prevState) => ({
                    ...prevState,
                    linksPopup: false,
                  }))
                }
              >
                <div
                  className={`text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] hover:text-white text-transparent font-bold ${
                    currentTab === "Solidity" ? "text-white" : ""
                  }`}
                >
                  Solidity Wizard
                </div>
              </div>
            </Link>

            <Link href={"/wizard/cairo"}>
              <div
                className={`${
                  currentTab === "Cairo"
                    ? "border-none bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] text-white p-2 ml-4 rounded-[0.5rem]"
                    : "group bg-white border-[1.5px] hover:border-none border-[#fe4a3c] hover:bg-gradient-to-r hover:from-[#fe9149] hover:to-[#fe4a3c]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
                }`}
                onClick={() =>
                  setIsOpen((prevState) => ({
                    ...prevState,
                    linksPopup: false,
                  }))
                }
              >
                <div
                  className={` text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#fe9149] to-[#fe4a3c]  font-bold hover:text-white text-transparent ${
                    currentTab === "Cairo" ? "text-white" : ""
                  }`}
                >
                  Cairo Wizard
                </div>
              </div>
            </Link>

            <Link
              href={"https://www.birbleai.com/dashboard"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  linksPopup: false,
                }))
              }
            >
              Home
            </Link>

            <Link
              href={"https://docs.openzeppelin.com/"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  linksPopup: false,
                }))
              }
            >
              Docs
            </Link>

            <Link
              href={"https://github.com/Birblewin"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  linksPopup: false,
                }))
              }
            >
              GitHub
            </Link>

            <Link
              href={"https://twitter.com/birble_AI"}
              className="font-medium text-[1rem] ml-4 text-[#333333]"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  linksPopup: false,
                }))
              }
            >
              Twitter
            </Link>
          </div>
        </Popover>
      </div>

      {/* VISIBLE FROM MIDDLE UP */}
      <div className="hidden md:flex items-center">
        <div className="flex gap-1">
          <Link href={"https://www.birbleai.com/"} target="_blank">
            <Image
              src={"/logo.svg"}
              alt="birble logo"
              width={50}
              height={50}
              priority={true}
            />
          </Link>

          {/* VISIBLE FROM LARGE UP */}
          <Link
            href={"https://www.birbleai.com/"}
            className="font-semibold lg:text-xl text-lg ml-2 text-[#333333] hidden lg:block my-auto"
          >
            <h2 className="overflow-hidden max-h-8 text-2xl font-bold text-white">Birble
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-emerald-300">AI </span>
            <span className="font-light lg:text-xl text-lg text-[white]">
              contracts
            </span>
            </h2>
          </Link>
        </div>

        <Link href={"/wizard"}>
          <div
            className={`${
              currentTab === "Solidity"
                ? "border-none bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] text-white p-2 ml-4 rounded-[0.5rem]"
                : "group bg-transparent border-[1.5px] hover:border-none border-[#4e5de4] hover:bg-gradient-to-r hover:from-[#51d4ff] hover:to-[#4e5de4]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
            }`}
          >
            <div
              className={`text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] hover:text-white text-transparent font-bold ${
                currentTab === "Solidity" ? "text-white" : ""
              }`}
            >
              Solidity Wizard
            </div>
          </div>
        </Link>

        <Link href={"/wizard/cairo"}>
          <div
            className={`${
              currentTab === "Cairo"
                ? "border-none bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] text-white p-2 ml-4 rounded-[0.5rem]"
                : "group bg-transparent border-[1.5px] hover:border-none border-[#fe4a3c] hover:bg-gradient-to-r hover:from-[#fe9149] hover:to-[#fe4a3c]  ml-4 rounded-[0.5rem] p-2 hover:text-white"
            }`}
          >
            <div
              className={` text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#fe9149] to-[#fe4a3c]  font-bold hover:text-white text-transparent ${
                currentTab === "Cairo" ? "text-white" : ""
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
          href={"https://www.birbleai.com/dashboard"}
          className="font-medium text-[1rem] ml-4 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Forum
        </Link>
        <Link
          href={"https://docs.openzeppelin.com/"}
          className="font-medium text-[1rem] ml-4 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </Link>
        <Link
          href={"https://github.com/Birblewin"}
          className="font-medium text-[1rem] ml-4 text-white"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        <Link
          href={"https://twitter.com/birble_AI"}
          className="font-medium text-[1rem] ml-4 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>
      </div>
    </nav>
  );
}
