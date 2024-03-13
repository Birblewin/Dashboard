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
import { ERC721InitialCode } from "@/generator/ERC721S";
import { GovernorInitialCode } from "@/generator/Governor";
import { CustomInitialCode } from "@/generator/CustomS";
import { ERC1155Burnable, ERC1155Pauseable, ERC1155AccessControlRoles, ERC1155AccessControlOwnable, ERC1155UpdateableURI, ERC1155AccessControlManaged, ERC1155Upgradeability, ERC1155UpgradeabilityUUPS, ERC1155SupplyTracking, ERC1155UpgradeabilityTransparent, ERC1155SecurityContact, ERC1155Mintable, ERC1155BaseURI } from "@/store/ERC1155";
import { GenerateERC1155Code } from "@/generator/ERC1155";


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
 
  //ERC1155
  const [erc1155baseUrl] = useRecoilState(ERC1155BaseURI);
  const [erc1155mintable] = useRecoilState(ERC1155Mintable);
  const [erc1155burnable] = useRecoilState(ERC1155Burnable);
  const [erc1155pausable] = useRecoilState(ERC1155Pauseable);
  const [erc1155supplyTracking] = useRecoilState(ERC1155SupplyTracking);
  const [erc1155updatableURI] = useRecoilState(ERC1155UpdateableURI);
  const [erc1155roles] = useRecoilState(ERC1155AccessControlRoles);
  const [erc1155ownable] = useRecoilState(ERC1155AccessControlOwnable);
  const [erc1155managed] = useRecoilState(ERC1155AccessControlManaged);
  const [erc1155upgradability] = useRecoilState(ERC1155Upgradeability);
  const [erc1155transparent] = useRecoilState(ERC1155UpgradeabilityTransparent);
  const [erc1155UUPS] = useRecoilState(ERC1155UpgradeabilityUUPS);
  const [erc1155security] = useRecoilState(ERC1155SecurityContact);

  const ERC1155InitialCode = GenerateERC1155Code(erc1155burnable, erc1155supplyTracking, erc1155pausable, erc1155updatableURI, erc1155roles, erc1155ownable, erc1155managed, erc1155transparent, erc1155UUPS, erc1155security, erc1155upgradability, erc1155mintable, erc1155baseUrl);


  const [isWizard] = useRecoilState(wizard)
  const [isCairo] = useRecoilState(cairo)

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