"use client"

import React, { useState, useEffect, useRef } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import {useRecoilValue} from "recoil"
// IMPORTING PROPS
import { ButtonProps } from "@/types/props";
// IMPORTING ATOMS
import { ERC721, ERC20, Custom } from "../store/cairoBtns";

import {
  CustomCPauseable,
  CustomCAccessControlRoles,
  CustomCAccessControlOwnable,
  CustomCUpgradeable,
  CustomCUpgradeability,
  CustomCUpgradeabilityUUPS,
  CustomCName,
  CustomCLicense,
} from "@/store/CustomC";

import {
  ERC20CBurnable,
  ERC20CPauseable,
  ERC20CAccessControlRoles,
  ERC20CAccessControlOwnable,
  ERC20CUpgradeable,
  ERC20CMintable,
  ERC20CPremint,
  ERC20CLicense,
  ERC20CName,
  ERC20CSymbol,
} from "@/store/ERC20C";

import {
  ERC721CAccessControlOwnable,
  ERC721CAccessControlRoles,
  ERC721CBurnable,
  ERC721CMintable,
  ERC721CName,
  ERC721CPauseable,
  ERC721CUpgradeable,
} from "@/store/ERC721C";

// IMPORTING CODE GENERATORS
import { GenerateERC721CCode } from "@/generator/ERC721C";
import { generateERC20CCode } from "@/generator/ERC20C";
import { generateCustomCCode } from "@/generator/CustomC";
// IMPORTING TYPES
import { DownloadCodeType } from "@/types/types";

// A FUNCTION THAT GENERATES A DOWNLOADED FILE
function downloadFile({downloadedCode, fileName}: DownloadCodeType, extension: "sol" | "cairo" | "txt" = "txt"): void{
  //CREATE FILE FROM A BLOB, USING AN ARRAY OF STRINGS
  const file: Blob = new Blob([downloadedCode], {type: 'text/plain'}); 

  // INJECT LINK ELEMENT TO THE DOM
  const element: HTMLAnchorElement = document.createElement("a");
  element.href = URL.createObjectURL(file);
  element.download = `${fileName}.${extension}`
  document.body.appendChild(element);

  // SIMULATE CLICK
  element.click();
}

// A COMPONENT THAT RETURNS A DOWNLOAD BUTTON FOR CAIRO WIZARD
export default function Download({handleClick}: ButtonProps) {
  // DEFINING STATES
    // A STATE TO DETERMINE WHETHER OR NOT TO SHOW POPUP
  const [showPopup, setShowPopup] = useState(false);
  // A REF FOR THE POPUP
  const popupRef = useRef(null);
  // CONSUMING ATOMS
    // GETTING VALUES FOR ERC20
  const erc20cburnable = useRecoilValue(ERC20CBurnable);
  const erc20cpausable = useRecoilValue(ERC20CPauseable);
  const erc20croles = useRecoilValue(ERC20CAccessControlRoles);
  const erc20cownable = useRecoilValue(ERC20CAccessControlOwnable);
  const erc20cupgradeable = useRecoilValue(ERC20CUpgradeable);
  const erc20cmintable = useRecoilValue(ERC20CMintable);
  const erc20cpremint = useRecoilValue(ERC20CPremint);
  const erc20clicense = useRecoilValue(ERC20CLicense);
  const erc20cname = useRecoilValue(ERC20CName);
  const erc20csymbol = useRecoilValue(ERC20CSymbol);
    // GETTING VALUES FOR ERC721
  const erc721cburnable = useRecoilValue(ERC721CBurnable);
  const erc721cpausable = useRecoilValue(ERC721CPauseable);
  const erc721croles = useRecoilValue(ERC721CAccessControlRoles);
  const erc721cownable = useRecoilValue(ERC721CAccessControlOwnable);
  const erc721cupgradable = useRecoilValue(ERC721CUpgradeable);
  const erc721cmintable = useRecoilValue(ERC721CMintable);
  const erc721cname = useRecoilValue(ERC721CName);
    // GETTING VALUES FOR CUSTOM
  const customcpausable = useRecoilValue(CustomCPauseable);
  const customcroles = useRecoilValue(CustomCAccessControlRoles);
  const customcownable = useRecoilValue(CustomCAccessControlOwnable);
  const customcupgradeable = useRecoilValue(CustomCUpgradeable);
  const customcupgradeability = useRecoilValue(CustomCUpgradeability);
  const customcUUPS = useRecoilValue(CustomCUpgradeabilityUUPS);
  const customcname = useRecoilValue(CustomCName);
  const customclicense = useRecoilValue(CustomCLicense);
    // GETTIING CURRENT CONTRACT TYPES
  const CairoERC721 = useRecoilValue(ERC721);
  const CairoERC20 = useRecoilValue(ERC20);
  const CairoCustom = useRecoilValue(Custom);

  // GENERATING CODES USING READ VALUES
    // ERC20
  const ERC20CInitialCode = generateERC20CCode(
    erc20cburnable,
    erc20cmintable,
    erc20cpausable,
    erc20croles,
    erc20cownable,
    erc20cupgradeable,
    erc20cpremint,
    erc20cname,
    erc20clicense,
    erc20csymbol
  );

    // ERC721
  const ERC721InitialCairoCode = GenerateERC721CCode(
    erc721cburnable,
    erc721cpausable,
    erc721croles,
    erc721cownable,
    erc721cupgradable,
    erc721cmintable,
  );

    // CUSTOM
  const CustomCInitialCode = generateCustomCCode(
    customcupgradeable,
    customcpausable,
    customcroles,
    customcownable,
    customcupgradeability,
    customcUUPS,
    customcname,
    customclicense
  );

  // SETTING THE DOWNLOADED CODE OBJECT CONDITIONALLY, BASED ON CURRENT TAB
  let downloadedCode: DownloadCodeType;

  if (CairoERC721) {
    downloadedCode = {
      downloadedCode: ERC721InitialCairoCode,
      fileName: erc721cname
    }
  } else if (CairoERC20) {
    downloadedCode = {
      downloadedCode: ERC20CInitialCode,
      fileName: erc20cname
    }
  } else if (CairoCustom) {
    downloadedCode = {
      downloadedCode: CustomCInitialCode,
      fileName: customcname,
    }
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        popupRef.current &&
        (popupRef.current as HTMLElement).contains(event.target)
      ) {
        setShowPopup(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    if(handleClick) handleClick()
    setShowPopup(true);
  };

  return (
    <div>
      <button
        className="font-bold text-white hover:border-[#4D3C77] hover:bg-[#4D3C77] border p-2 rounded"
        onClick={handleButtonClick}
      >
        <DownloadIcon width={15} height={15}  />
        Download
      </button>
      {showPopup && (
        <div
          ref={popupRef}
          className="absolute right-[5%] w-1/4 mt-2 h-full items-center"
        >
          <div className="bg-white p-2 rounded shadow">
            <div 
              className=" hover:border hover:bg-gray-100 rounded p-2 cursor-pointer"
              onClick={() => downloadFile(downloadedCode, "cairo")}
              >
              <h2 className="text-black font-bold flex gap-2">
                <InsertDriveFileRoundedIcon fontSize="large"/>
                Single file
              </h2>
              <p className="text-gray-700 pl-6">
                Requires a Scarb project with{" "}
                <span className="text-gray-700 font-semibold">
                  openzeppelin
                </span>{" "}
                as a dependency.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}