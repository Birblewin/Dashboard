"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {ERC1155 as ERC1155Atom, ERC20 as ERC20Atom, ERC721 as ERC721Atom, Custom as CustomAtom, Governor as GovernorAtom} from '../store/solidityBtns'
import { useRecoilState } from "recoil";
import {generateERC20SCode} from "../generator/ERC20S";
import {wizard, cairo} from '../store/headerBtns'
import {ERC721, ERC20,Custom } from '../store/cairoBtns'
import {ERC20InitialCairoCode, ERC721InitialCairoCode, CustomInitialCairoCode} from './cairoSnippets'
import { ERC20SBurnable, ERC20SPauseable, ERC20SVotes, ERC20SFlashMinting, ERC20SAccessControlRoles, ERC20SAccessControlOwnable, ERC20SAccessControlManaged, ERC20SPremint, ERC20SUpgradeability, ERC20SUpgradeabilityUUPS } from "@/store/ERC20S";
import { ERC1155InitialCode } from "@/generator/ERC1155";
import { ERC721InitialCode } from "@/generator/ERC721S";
import { GovernorInitialCode } from "@/generator/Governor";
import { CustomInitialCode } from "@/generator/CustomS";


const CodeEditor: React.FC = () => {

  //erc20 logic with props snippets
  const [erc20sburnable] = useRecoilState(ERC20SBurnable);
  const [erc20spausable] = useRecoilState(ERC20SPauseable);
  const [erc20svotes] = useRecoilState(ERC20SVotes);
  const [erc20sflashMinting] = useRecoilState(ERC20SFlashMinting);
  const [erc20sroles] = useRecoilState(ERC20SAccessControlRoles);
  const [erc20sownable] = useRecoilState(ERC20SAccessControlOwnable);
  const [erc20smanaged] = useRecoilState(ERC20SAccessControlManaged);
  const [erc20spremint] = useRecoilState(ERC20SPremint);
  const [erc20supgradeable] = useRecoilState(ERC20SUpgradeability);
  const [erc20sUUPS] = useRecoilState(ERC20SUpgradeabilityUUPS);

  const ERC20InitialCode = generateERC20SCode(erc20sburnable, erc20svotes, erc20spausable, erc20sflashMinting, erc20sroles, erc20sownable, erc20smanaged, erc20spremint, erc20supgradeable, erc20sUUPS);


  //checking which page is active
  const [isWizard] = useRecoilState(wizard)
  const [isCairo] = useRecoilState(cairo)

  //wizard templates
  const [IsERC1155] = useRecoilState(ERC1155Atom);
  const [IsERC721] = useRecoilState(ERC721Atom);
  const [IsERC20] = useRecoilState(ERC20Atom);
  const [IsGovernor] = useRecoilState(GovernorAtom);
  const [IsCustom] = useRecoilState(CustomAtom);

  let initialCode = ERC20InitialCode;

  if (IsERC1155) {
    initialCode = ERC1155InitialCode;
  } else if (IsERC721) {
    initialCode = ERC721InitialCode;
  } else if (IsERC20) {
    initialCode = ERC20InitialCode;
  } else if (IsGovernor) {
    initialCode = GovernorInitialCode;
  } else if (IsCustom) {
    initialCode = CustomInitialCode;
  }

     //cairo templates
      const [CairoERC721] = useRecoilState(ERC721);
      const [CairoERC20] = useRecoilState(ERC20);
      const [CairoCustom] = useRecoilState(Custom);

      let CairoInitialCode = ERC20InitialCairoCode;

      if (CairoERC721) {
        CairoInitialCode = ERC721InitialCairoCode;
      } else if (CairoERC20) {
        CairoInitialCode = ERC20InitialCairoCode;
      } else if (CairoCustom) {
        CairoInitialCode = CustomInitialCairoCode;
      }
  

  return (
    <>

{isWizard && (
      <div className="w-full h-full">
        <SyntaxHighlighter
          language="solidity"
          style={dracula}
          className="w-full h-full font-bold"
        >
          {initialCode}
        </SyntaxHighlighter>
      </div>
    )}
    {isCairo && (
      <div className="w-full h-full">
        <SyntaxHighlighter
          language="solidity"
          style={dracula}
          className="w-full h-full font-bold"
        >
          {CairoInitialCode}
        </SyntaxHighlighter>
      </div>
    )}
    </>
   
  );
};

export default CodeEditor;
