"use client";

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENETS
import CodeEditor from "@/components/SyntaxHighliter";
import ERC20Solidity from "@/components/ERC20Solidity";
import Download from "@/components/SolidityDownloadBtn";
import RenderBtn from "@/components/RenderBtn";
import Governor from "@/components/Governor";
import CopyBtn from "@/components/CopyBtn";
import DefenderBtn from "@/components/DefenderBtn";
import ERC721Solidity from "@/components/ERC721Solidity";
import ERC1155 from "@/components/ERC1155";
import Custom from "@/components/Custom";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Popover from "@/components/Popover";
  // IMPORTING MODULES
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<"ERC20" | "ERC721" | "ERC1155" | "Governor" | "Custom">("ERC20");

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
                  onClick={() => setSelected("ERC20")}
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
                  onClick={() => setSelected("ERC721")}
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
                  onClick={() => setSelected("ERC1155")}
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
                  onClick={() => setSelected("Governor")}
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
                  onClick={() => setSelected("Custom")}
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
              onClick={() => setSelected("ERC20")}
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
              onClick={() => setSelected("ERC721")}
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
              onClick={() => setSelected("ERC1155")}
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
              onClick={() => setSelected("Governor")}
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
              onClick={() => setSelected("Custom")}
            >
              Custom
            </button>
          </div>

          {/* popup button FOR ACTION BUTTONS */}
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

        {/* FOR SMALL SCREENS, COLS */}
        {/* FOR MEDIUM TO LARGE SCREENS, 2 ROWS */}
        <div className="grid md:grid-flow-row md:grid-cols-3 gap-4 grid-flow-col grid-rows-2">
          <div className="flex flex-col shrink-0 justify-between overflow-auto  h-[calc(100vh-84px)] rounded shadow-md">
            {selected === "ERC20" && <ERC20Solidity />}
            {selected === "ERC721" && <ERC721Solidity />}
            {selected === "ERC1155" && <ERC1155 />}
            {selected === "Custom" && <Custom />}
            {selected === "Governor" && <Governor />}
          </div>

          <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-84px)] md:col-span-2">
            <CodeEditor />
          </div>
        </div>
      </div>
    </>
  );
}