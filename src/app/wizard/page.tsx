"use client";

import CodeEditor from "@/components/SyntaxHighliter";
import ERC20Solidity from "@/components/ERC20S";
import Download from "@/components/SolidityDownloadBtn";
import RenderBtn from "@/components/RemixBtn";
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
import { useRecoilState } from "recoil";
import {
  ERC1155 as ERC1155Atom,
  ERC20 as ERC20Atom,
  ERC721 as ERC721Atom,
  Custom as CustomAtom,
  Governor as GovernorAtom,
} from "@/store/solidityBtns";
// IMPORTING TYPES
import { IsOpenType } from "../../types/types";

export default function Home() {
    // A STATE TO KEEP TRACK OF SELECTED TAB
  const [selected, setSelected] = useState<"ERC20" | "ERC721" | "ERC1155" | "Custom" | "Governor">("ERC20");
  
  // A STATE TO KEEP TRACK OF WHETHER OR NOT THE MODAL SHOULD OPEN
  const [isOpen, setIsOpen] = useState<Omit<IsOpenType, "linksPopup">>({
    actionButtonsPopup: {
      largeScreens: false,
      smallScreens: false
    },

    editorPopup: false
  })

  // Define atoms using the createAtom function
 
  
  const [IsERC721, setIsERC721] = useRecoilState(ERC721Atom);
  const [IsERC20, setIsERC20] = useRecoilState(ERC20Atom);
  const [IsERC1155, setIsERC1155] = useRecoilState(ERC1155Atom);
  const [IsCustom, setIsCustom] = useRecoilState(CustomAtom);
  const [IsGovernor, setIsGovernor] = useRecoilState(GovernorAtom);

  const handleClick = (
    id: "ERC20" | "ERC721" | "ERC1155" | "Custom" | "Governor"
  ) => {
    setSelected(id);
    setIsOpen(prevState => ({...prevState, editorPopup: false}))
  };

  const handleERC721Click = () => {
    handleClick("ERC721")
    setIsERC721(true);
    setIsERC20(false);
    setIsERC1155(false);
    setIsCustom(false);
    setIsGovernor(false);
  };
  const handleERC20Click = () => {
    handleClick("ERC20")
    setIsERC20(true);
    setIsERC721(false);
    setIsERC1155(false);
    setIsCustom(false);
    setIsGovernor(false);
  };
  const handleERC1155Click = () => {
    handleClick("ERC1155")
    setIsERC1155(true);
    setIsERC20(false);
    setIsERC721(false);
    setIsCustom(false);
    setIsGovernor(false);
  };
  const handleCustomClick = () => {
    handleClick("Custom")
    setIsCustom(true);
    setIsERC20(false);
    setIsERC721(false);
    setIsERC1155(false);
    setIsGovernor(false);
  };
  const handleGovernorClick = () => {
    handleClick("Governor")
    setIsGovernor(true);
    setIsERC20(false);
    setIsERC721(false);
    setIsERC1155(false);
    setIsCustom(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mx-4 rounded shadow-md bg-black">
        <div className=" flex flex-row justify-between p-2 mb-2 items-center">
          {/* FOR SMALL SCREENS, hamburger FOR ERC TABS */}
          <div className="md:hidden flex gap-3">
            {selected && (
              <p className="bg-[#4e5de4] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
                {selected}
              </p>
            )}

            <Popover
              imageComponent={
                <ArrowDropDownRoundedIcon
                  fontSize="large"
                  className="border-2 border-slate-600 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out"
                  
                  onClick={() =>
                    setIsOpen((prevState) => ({
                      ...prevState,
                      editorPopup: !prevState.editorPopup,
                    }))
                  }
                />
              }
              isOpen={isOpen.editorPopup}
              
            >
              <div className="flex flex-col gap-2 ">
                <button
                  type="button"
                  className={`font-bold py-2 px-4 rounded-md text-white${
                    selected === "ERC20"
                      ? "bg-[#4e5de4] hover:bg-blue-600 "
                      : "hover:bg-[#4D3C77] "
                  }`}
                  onClick={handleERC20Click}
                >
                  ERC20
                </button>

                <button
                  type="button"
                  className={`font-bold py-2 px-4 rounded-md text-white${
                    selected === "ERC721"
                      ? "bg-[#4e5de4] hover:bg-blue-600"
                      : "hover:bg-[#4D3C77]"
                  }`}
                  onClick={handleERC721Click}
                >
                  ERC721
                </button>

                <button
                  type="button"
                  className={`font-bold py-2 px-4 rounded-md text-white${
                    selected === "ERC1155"
                      ? "bg-[#4e5de4] hover:bg-blue-600 "
                      : "hover:bg-[#4D3C77]"
                  }`}
                  onClick={handleERC1155Click}
                >
                  ERC1155
                </button>

                <button
                  type="button"
                  className={`font-bold py-2 px-4 rounded-md text-white${
                    selected === "Governor"
                      ? "bg-[#4e5de4] hover:bg-blue-600 "
                      : "hover:bg-[#4D3C77] "
                  }`}
                  onClick={handleGovernorClick}
                >
                  Governor
                </button>

                <button
                  type="button"
                  className={`font-bold py-2 px-4 rounded-md text-white${
                    selected === "Custom"
                      ? "bg-[#4e5de4] hover:bg-blue-600 "
                      : "hover:bg-[#4D3C77]"
                  }`}
                  onClick={handleCustomClick}
                >
                  Custom
                </button>
              </div>
            </Popover>
          </div>

          {/* FOR MEDIUM TO LARGE SCREENS, ERC TABS */}
          <div className="md:flex hidden gap-0 items-center">
            <button
              type="button"
              className={`font-bold py-2 px-4 rounded-md    ${
                selected === "ERC20"
                  ? "bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : "hover:bg-[#4D3C77] text-white"
              }`}
              onClick={handleERC20Click}
            >
              ERC20
            </button>

            <button
              type="button"
              className={`font-bold py-2 px-4 rounded-md ${
                selected === "ERC721"
                  ? "bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : "hover:bg-[#4D3C77] text-white"
              }`}
              onClick={handleERC721Click}
            >
              ERC721
            </button>

            <button
              type="button"
              className={`font-bold py-2 px-4 rounded-md ${
                selected === "ERC1155"
                  ? "bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : "hover:bg-[#4D3C77] text-white"
              }`}
              onClick={handleERC1155Click}
            >
              ERC1155
            </button>

            <button
              type="button"
              className={`font-bold py-2 px-4 rounded-md   ${
                selected === "Governor"
                  ? "bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : "hover:bg-[#4D3C77] text-white"
              }`}
              onClick={handleGovernorClick}
            >
              Governor
            </button>

            <button
              type="button"
              className={`font-bold py-2 px-4 rounded-md  text-white ${
                selected === "Custom"
                  ? "bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                  : "hover:bg-[#4D3C77] text-[#575c66]"
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
                  
                  onClick={() =>
                    setIsOpen(
                      ({
                        actionButtonsPopup: { largeScreens, smallScreens },
                        editorPopup,
                      }) => ({
                        editorPopup,
                        actionButtonsPopup: {
                          largeScreens,
                          smallScreens: !smallScreens,
                        },
                      })
                    )
                  }
                />
              }
              isOpen={isOpen.actionButtonsPopup.smallScreens}
            >
              <div className="flex flex-col gap-2">
                <DefenderBtn
                  handleClick={() =>
                    setIsOpen(
                      ({
                        actionButtonsPopup: { largeScreens },
                        editorPopup,
                      }) => ({
                        editorPopup,
                        actionButtonsPopup: {
                          largeScreens,
                          smallScreens: false,
                        },
                      })
                    )
                  }
                />

                <CopyBtn
                  handleClick={() =>
                    setIsOpen(
                      ({
                        actionButtonsPopup: { largeScreens },
                        editorPopup,
                      }) => ({
                        editorPopup,
                        actionButtonsPopup: {
                          largeScreens,
                          smallScreens: false,
                        },
                      })
                    )
                  }
                />

                <RenderBtn
                  handleClick={() =>
                    setIsOpen(
                      ({
                        actionButtonsPopup: { largeScreens },
                        editorPopup,
                      }) => ({
                        editorPopup,
                        actionButtonsPopup: {
                          largeScreens,
                          smallScreens: false,
                        },
                      })
                    )
                  }
                />

                <Download
                  handleClick={() =>
                    setIsOpen(
                      ({
                        actionButtonsPopup: { largeScreens },
                        editorPopup,
                      }) => ({
                        editorPopup,
                        actionButtonsPopup: {
                          largeScreens,
                          smallScreens: false,
                        },
                      })
                    )
                  }
                />
              </div>
            </Popover>
          </div>

          {/* TABS SHOWING ACTION BUTTONS FROM LARGE UP */}
          <div className="lg:flex lg:flex-row gap-2 shrink-0 hidden">
            <CopyBtn handleClick={() => null} />
            <Download />
            <DefenderBtn handleClick={() => null}/>
            <RenderBtn handleClick={() => null}/>
          </div>
        </div>

        {/* FOR SMALL SCREENS, COLS */}
        {/* FOR MEDIUM TO LARGE SCREENS, 2 ROWS */}
        <div className="grid md:grid-flow-row md:grid-cols-3 lg:grid-cols-4 md:grid-rows-1 gap-4 grid-flow-col grid-rows-2">
          <div className="flex flex-col shrink-0 justify-between overflow-auto  h-[calc(100vh-240px)] rounded shadow-md bg-[#232343cc]">
            {selected === "ERC20" && <ERC20Solidity />}
            {selected === "ERC721" && <ERC721S />}

            {selected === "ERC1155" && <ERC1155 />}
            {selected === "Custom" && <Custom />}
            {selected === "Governor" && <Governor />}
          </div>

          <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-240px)] md:col-span-2 lg:col-span-3">
            <CodeEditor />
          </div>
        </div>
      </div>
    </>
  );
}