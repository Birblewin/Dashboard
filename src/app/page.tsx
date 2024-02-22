"use client";

import CodeEditor from "@/components/SyntaxHighliter";
import Image from "next/image";
import { useState } from "react";
import ERC20 from "@/components/erc20";
import Download from "@/components/solidityDownloadBtn";
import RenderBtn from "@/components/RenderBtn";
import Governor from "@/components/governor";
import CopyBtn from "@/components/CopyBtn";
import DefenderBtn from "@/components/DefenderBtn";
import ERC721 from "@/components/ERC721";

// import ERC1155 from "@/components/ERC1155";
// import Custom from "@/components/Custom";

export default function Home() {
  const [selected, setSelected] = useState("ERC20");

  function changeTab(clickedButton: any) {
    if (!clickedButton || !clickedButton.classList) {
      return;
    }

    const buttonText = clickedButton.innerText;

    setSelected(buttonText);
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mx-4 rounded  shadow-md bg-[#ffffff]">
        <div className=" flex flex-row justify-between ">
          <div className=" overflow-hidden ">
            <div className="flex overflow-hidden ">
              <button
                type="button"
                className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${
                  selected === "ERC20"
                    ? " bg-[#4e5de4] hover:bg-blue-600 text-[#f5f5f5]"
                    : ""
                }`}
                onClick={(e) => changeTab(e.target)}
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
                onClick={(e) => changeTab(e.target)}
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
                onClick={(e) => changeTab(e.target)}
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
                onClick={(e) => changeTab(e.target)}
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
                onClick={(e) => changeTab(e.target)}
              >
                Custom
              </button>
            </div>
          </div>
          <div className="action flex flex-row gap-2 shrink-0">
            <DefenderBtn />
            <CopyBtn />
            <RenderBtn />
            <Download />
          </div>
        </div>
        <div className="flex flex-row gap-4 grow">
          <div className="w-64 flex flex-col shrink-0 justify-between overflow-auto  h-[calc(100vh-84px)] rounded shadow-md">
            {selected === "ERC20" && <ERC20 />}
            {selected === "ERC721" && <ERC721 />}
            {selected === "ERC1155" && "ERC1155"}
            {selected === "Custom" && "Custom"}
            {selected === "Governor" && <Governor />}
          </div>

          <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-84px)]  ">
            <CodeEditor />
          </div>
        </div>
      </div>
    </>
  );
}
