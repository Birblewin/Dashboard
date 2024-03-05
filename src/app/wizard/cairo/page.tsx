"use client";

import CodeEditor from "@/components/SyntaxHighliter";
import { useState } from "react";
import Download from "@/components/CairoDownloadBtn";
import CopyBtn from "@/components/CopyBtn";
import Custom2 from "@/components/Custom2";
import ERC20 from "@/components/ERC20C"
import ERC721C from "@/components/ERC721C";
import {atom, useRecoilState} from "recoil"
import {ERC20 as ERC20Atom, ERC721 as ERC721Atom, Custom as CustomAtom} from "@/store/cairoBtns"

export default function Cairo() {
  const [selected, setSelected] = useState("ERC20");

  const [IsERC721, setIsERC721] = useRecoilState(ERC721Atom);
  const [IsERC20, setIsERC20] = useRecoilState(ERC20Atom);
  const [IsCustom, setIsCustom] = useRecoilState(CustomAtom);
  

  const handleClick = (id: string) => {
    setSelected(id);
  };

  const handleClickERC20 = () => {
    handleClick("ERC20");
    setIsERC20(true);
    setIsERC721(false);
    setIsCustom(false);
  };
  const handleClickERC721 = () => {
    handleClick("ERC721");
    setIsERC721(true);
    setIsERC20(false);
    setIsCustom(false);
  };
  const handleClickCustom = () => {
    handleClick("Custom");
    setIsCustom(true);
    setIsERC20(false);
    setIsERC721(false);
  };
  return (
    <>
      <div className="flex flex-col gap-4 p-4 mx-4 rounded shadow-md  bg-[#ffffff]">
        <div className=" flex flex-row justify-between ">
          <div className=" overflow-hidden ">
            <div className="flex overflow-hidden ">
              <button
                type="button"
                className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                  selected === "ERC20"
                    ? "selectedd bg-[#fe4a3c] hover:bg-red-600 text-[#f5f5f5]"
                    : ""
                }`}
                onClick={handleClickERC20}
              >
                ERC20
              </button>

              <button
                type="button"
                className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                  selected === "ERC721"
                    ? "selectedd bg-[#fe4a3c] hover:bg-red-600 text-[#f5f5f5]"
                    : ""
                }`}
                onClick={handleClickERC721}
              >
                ERC721
              </button>

              <button
                type="button"
                className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                  selected === "Custom"
                    ? "selectedd bg-[#fe4a3c] hover:bg-red-600 text-[#f5f5f5]"
                    : ""
                }`}
                onClick={handleClickCustom}
              >
                Custom
              </button>
            </div>
          </div>
          <div className="action flex flex-row gap-2 shrink-0">
            <div className="action flex flex-row gap-2 shrink-0">
              <CopyBtn />
              <Download />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 grow">
          <div className="w-64 flex flex-col shrink-0 justify-between overflow-auto h-[calc(100vh-84px)] rounded shadow-md  ">
            {selected === "ERC20" && <ERC20/>}
            {selected === "ERC721" && <ERC721C/>}
            {selected === "Custom" && <Custom2/>}
          </div>

          <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-84px)]  ">
            <CodeEditor />
          </div>
        </div>
      </div>
    </>
  );
}
