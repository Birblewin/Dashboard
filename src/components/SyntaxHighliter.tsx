"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {ERC1155 as ERC1155Atom, ERC20 as ERC20Atom, ERC721 as ERC721Atom, Custom as CustomAtom, Governor as GovernorAtom} from '../store/solidityBtns'
import { useRecoilState } from "recoil";
import {generateERC20SCode} from "../generator/ERC20S";
import {wizard, cairos} from '../store/headerBtns'
import {ERC721, ERC20,Custom } from '../store/cairoBtns'
import {ERC20InitialCairoCode, CustomInitialCairoCode} from './cairoSnippets'
import { ERC20SBurnable, ERC20SPauseable, ERC20SVotes, ERC20SFlashMinting, ERC20SAccessControlRoles, ERC20SAccessControlOwnable, ERC20SAccessControlManaged, ERC20SPremint, ERC20SUpgradeability, ERC20SUpgradeabilityUUPS} from "@/store/ERC20S";
import { ERC1155InitialCode } from "@/generator/ERC1155";
import { GenerateERC721SCode } from "@/generator/ERC721S";
import { GovernorInitialCode } from "@/generator/Governor";
import { CustomInitialCode } from "@/generator/CustomS";
import { ERC721SBurnable, ERC721SPauseable, ERC721SVotes, ERC721SAccessControlRoles, ERC721SAccessControlOwnable, ERC721SAccessControlManaged, ERC721SEnumerable, ERC721SURIStorage, ERC721SUpgradeabilityTransparent, ERC721SUpgradeabilityUUPS, ERC721SSecurityContact, ERC721SUpgradeability, ERC721SAutoIncrementIds, ERC721SMintable, ERC721SBaseURI } from "@/store/ERC721S";
import { GenerateERC721CCode } from "@/generator/ERC721C";
import { ERC721CAccessControlOwnable, ERC721CAccessControlRoles, ERC721CBurnable, ERC721CMintable, ERC721CPauseable, ERC721CUpgradeable } from "@/store/ERC721C";
import { PrismLight } from 'react-syntax-highlighter';
import cairo from 'prismjs-cairo';

PrismLight.registerLanguage('cairo', cairo);

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


  const [erc721sburnable] = useRecoilState(ERC721SBurnable);
  const [erc721spausable] = useRecoilState(ERC721SPauseable);
  const [erc721svotes] = useRecoilState(ERC721SVotes);
  const [erc721sUriStorage] = useRecoilState(ERC721SURIStorage);
  const [erc721sroles] = useRecoilState(ERC721SAccessControlRoles);
  const [erc721sownable] = useRecoilState(ERC721SAccessControlOwnable);
  const [erc721smanaged] = useRecoilState(ERC721SAccessControlManaged);
  const [erc721senumerable] = useRecoilState(ERC721SEnumerable);
  const [erc721transparent] = useRecoilState(ERC721SUpgradeabilityTransparent)
  const [erc721uups] = useRecoilState(ERC721SUpgradeabilityUUPS)
  const [erc721security] = useRecoilState(ERC721SSecurityContact)
  const [erc721upgradability] = useRecoilState(ERC721SUpgradeability)
  const [erc721autoincrement] = useRecoilState(ERC721SAutoIncrementIds)
  const [erc721mintable] = useRecoilState(ERC721SMintable)
  const [erc721sBaseUrl] = useRecoilState(ERC721SBaseURI)
  
  const ERC721InitialCode = GenerateERC721SCode(erc721sburnable, erc721svotes, erc721spausable, erc721sUriStorage, erc721sroles, erc721sownable, erc721smanaged, erc721senumerable, erc721transparent, erc721uups, erc721security, erc721upgradability,erc721autoincrement, erc721mintable, erc721sBaseUrl );


  const [erc721cburnable] = useRecoilState(ERC721CBurnable);
  const [erc721cpausable] = useRecoilState(ERC721CPauseable);
  const [erc721croles] = useRecoilState(ERC721CAccessControlRoles);
  const [erc721cownable] = useRecoilState(ERC721CAccessControlOwnable);
  const [erc721cupgradable] = useRecoilState(ERC721CUpgradeable);
  const [erc721cmintable] = useRecoilState(ERC721CMintable);

  const ERC721InitialCairoCode = GenerateERC721CCode(erc721cburnable, erc721cpausable, erc721croles, erc721cownable, erc721cupgradable, erc721cmintable);


  //checking which page is active
  const [isWizard] = useRecoilState(wizard)
  const [isCairo] = useRecoilState(cairos)

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
          language="cairo"
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