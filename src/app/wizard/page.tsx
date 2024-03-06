"use client";

// IMPORTING NECESSARY FILES
// IMPORTING COMPONENETS
import CodeEditor from "@/components/SyntaxHighliter";
import ERC20Solidity from "@/components/ERC20S";
import Download from "@/components/SolidityDownloadBtn";
import RenderBtn from "@/components/RenderBtn";
import Governor from "@/components/Governor";
import CopyBtn from "@/components/CopyBtn";
import DefenderBtn from "@/components/DefenderBtn";
import ERC721S from "@/components/ERC721S";

import ERC1155 from "@/components/ERC1155";
import Custom from "@/components/Custom";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Popover from "@/components/Popover";
// IMPORTING MODULES
import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import {
  ERC1155 as ERC1155Atom,
  ERC20 as ERC20Atom,
  ERC721 as ERC721Atom,
  Custom as CustomAtom,
  Governor as GovernorAtom,
} from "@/store/solidityBtns";

export default function Home() {
  const [selected, setSelected] = useState("ERC20");

  // Define atoms using the createAtom function

  const [IsERC721, setIsERC721] = useRecoilState(ERC721Atom);
  const [IsERC20, setIsERC20] = useRecoilState(ERC20Atom);
  const [IsERC1155, setIsERC1155] = useRecoilState(ERC1155Atom);
  const [IsCustom, setIsCustom] = useRecoilState(CustomAtom);
  const [IsGovernor, setIsGovernor] = useRecoilState(GovernorAtom);

  const handleERC721Click = (e: { target: any }) => {
    changeTab(e.target);
    setIsERC721(true);
    setIsERC20(false);
    setIsERC1155(false);
    setIsCustom(false);
    setIsGovernor(false);
  };
  const handleERC20Click = (e: { target: any }) => {
    changeTab(e.target);
    setIsERC20(true);
    setIsERC721(false);
    setIsERC1155(false);
    setIsCustom(false);
    setIsGovernor(false);
  };
  const handleERC1155Click = (e: { target: any }) => {
    changeTab(e.target);
    setIsERC1155(true);
    setIsERC20(false);
    setIsERC721(false);
    setIsCustom(false);
    setIsGovernor(false);
  };
  const handleCustomClick = (e: { target: any }) => {
    changeTab(e.target);
    setIsCustom(true);
    setIsERC20(false);
    setIsERC721(false);
    setIsERC1155(false);
    setIsGovernor(false);
  };
  const handleGovernorClick = (e: { target: any }) => {
    changeTab(e.target);
    setIsGovernor(true);
    setIsERC20(false);
    setIsERC721(false);
    setIsERC1155(false);
    setIsCustom(false);
  };

  function changeTab(clickedButton: { classList: any; innerText: any }) {
    if (!clickedButton || !clickedButton.classList) {
      return;
    }

    const buttonText = clickedButton.innerText;

    setSelected(buttonText);
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mx-4 rounded shadow-md bg-[#ffffff]">
        <div className=" flex flex-row justify-between p-2 mb-2">
          {/* FOR SMALL SCREENS, hamburger FOR ERC TABS */}
          <div className="md:hidden">
            <Popover
              imageComponent={
                <ArrowDropDownRoundedIcon
                  fontSize="large"
                  className="border-2 border-slate-600 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out"
                />
              }
            >
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                    selected === "ERC20"
                      ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                      : ""
                  }`}
                  onClick={handleERC20Click}
                >
                  ERC20
                </button>

                <button
                  type="button"
                  className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                    selected === "ERC721"
                      ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                      : ""
                  }`}
                  onClick={handleERC721Click}
                >
                  ERC721
                </button>

                <button
                  type="button"
                  className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                    selected === "ERC1155"
                      ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                      : ""
                  }`}
                  onClick={handleERC1155Click}
                >
                  ERC1155
                </button>

                <button
                  type="button"
                  className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                    selected === "Governor"
                      ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                      : ""
                  }`}
                  onClick={handleGovernorClick}
                >
                  Governor
                </button>

                <button
                  type="button"
                  className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                    selected === "Custom"
                      ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                      : ""
                  }`}
                  onClick={handleCustomClick}
                >
                  Custom
                </button>
              </div>
            </Popover>
          </div>

          {/* FOR MEDIUM TO LARGE SCREENS, ERC TABS */}
          <div className="md:flex hidden gap-2 items-center">
            <button
              type="button"
              className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                selected === "ERC20"
                  ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : ""
              }`}
              onClick={handleERC20Click}
            >
              ERC20
            </button>

            <button
              type="button"
              className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                selected === "ERC721"
                  ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : ""
              }`}
              onClick={handleERC721Click}
            >
              ERC721
            </button>

            <button
              type="button"
              className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                selected === "ERC1155"
                  ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : ""
              }`}
              onClick={handleERC1155Click}
            >
              ERC1155
            </button>

            <button
              type="button"
              className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                selected === "Governor"
                  ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : ""
              }`}
              onClick={handleGovernorClick}
            >
              Governor
            </button>

            <button
              type="button"
              className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                selected === "Custom"
                  ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : ""
              }`}
              onClick={handleCustomClick}
            >
              Custom
            </button>
          </div>

          {/* popup button FOR ACTION BUTTONS, FOR SMALL TO MEDIUM SCREENS */}
          <div className="block lg:hidden">
            <Popover
              imageComponent={
                <BuildRoundedIcon
                  fontSize="large"
                  className="border-2 border-slate-600 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out"
                />
              }
            >
              <div className="flex flex-col gap-2">
                <DefenderBtn />
                <CopyBtn />
                <RenderBtn />
                <Download />
              </div>
            </Popover>
          </div>

          {/* TABS SHOWING ACTION BUTTONS FROM LARGE UP */}
          <div className="lg:flex gap-2 hidden">
            <CopyBtn />
            <Download />

            <Popover
              imageComponent={
                <BuildRoundedIcon
                  fontSize="large"
                  className="border-2 border-slate-600 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out"
                />
              }
            >
              <div className="flex flex-col gap-2">
                <DefenderBtn />
                <RenderBtn />
              </div>
            </Popover>
          </div>
        </div>

        {/* FOR SMALL SCREENS, COLS */}
        {/* FOR MEDIUM TO LARGE SCREENS, 2 ROWS */}
        <div className="grid md:grid-flow-row md:grid-cols-3 lg:grid-cols-4 md:grid-rows-1 gap-4 grid-flow-col grid-rows-2">
          <div className="flex flex-col shrink-0 justify-between overflow-auto  h-[calc(100vh-84px)] rounded shadow-md">
            {selected === "ERC20" && <ERC20Solidity />}
            {selected === "ERC721" && <ERC721S />}
            {selected === "ERC1155" && <ERC1155 />}
            {selected === "Custom" && <Custom />}
            {selected === "Governor" && <Governor />}
          </div>

          <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-84px)] md:col-span-2 lg:col-span-3">
            <CodeEditor />
          </div>
        </div>
      </div>
    </>
  );
}
