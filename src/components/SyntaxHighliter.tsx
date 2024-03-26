"use client";

// IMPORTING NECESSARY FILES
  // IMPORTING MODULES
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
  // IMPORTING ATOMS
import {
  ERC1155 as ERC1155Atom, 
  ERC20 as ERC20Atom, 
  ERC721 as ERC721Atom, 
  Custom as CustomAtom, 
  Governor as GovernorAtom
} from '../store/solidityBtns'

import { wizard, cairos } from "../store/headerBtns";
import { ERC721, ERC20, Custom } from "../store/cairoBtns";

import {
  ERC721SBurnable,
  ERC721SPauseable,
  ERC721SVotes,
  ERC721SAccessControlRoles,
  ERC721SAccessControlOwnable,
  ERC721SAccessControlManaged,
  ERC721SEnumerable,
  ERC721SURIStorage,
  ERC721SUpgradeabilityTransparent,
  ERC721SUpgradeabilityUUPS,
  ERC721SSecurityContact,
  ERC721SUpgradeability,
  ERC721SAutoIncrementIds,
  ERC721SMintable,
  ERC721SBaseURI,
} from "@/store/ERC721S";

import {
  ERC721CAccessControlOwnable,
  ERC721CAccessControlRoles,
  ERC721CBurnable,
  ERC721CMintable,
  ERC721CPauseable,
  ERC721CUpgradeable,
} from "@/store/ERC721C";

import {
  ERC20SBurnable,
  ERC20SPauseable,
  ERC20SVotes,
  ERC20SFlashMinting,
  ERC20SAccessControlRoles,
  ERC20SAccessControlOwnable,
  ERC20SAccessControlManaged,
  ERC20SPremint,
  ERC20SUpgradeability,
  ERC20SUpgradeabilityUUPS,
  ERC20SPermit,
  ERC20SMintable,
  ERC20SSecurityContact,
  ERC20SLicense,
  ERC20SName,
  ERC20SSymbol,
} from "@/store/ERC20S";

import { governorFormData } from "@/store/Governor";

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
  CustomSPauseable,
  CustomSAccessControlRoles,
  CustomSAccessControlOwnable,
  CustomSAccessControlManaged,
  CustomSUpgradeable,
  CustomSUpgradeabilityTransparent,
  CustomSUpgradeabilityUUPS,
  CustomSSecurityContact,
  CustomSName,
  CustomSLicense,
} from "@/store/CustomS";

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
  ERC1155BaseURI,
  ERC1155Mintable,
  ERC1155Burnable,
  ERC1155Pauseable,
  ERC1155SupplyTracking,
  ERC1155UpdateableURI,
  ERC1155AccessControlRoles,
  ERC1155AccessControlOwnable,
  ERC1155AccessControlManaged,
  ERC1155Upgradeability,
  ERC1155UpgradeabilityTransparent,
  ERC1155UpgradeabilityUUPS,
  ERC1155SecurityContact,
} from "@/store/ERC1155";
  // IMPORTING CODE GENERATORS
import {generateERC20SCode} from "../generator/ERC20S";
import { GenerateERC721SCode } from "@/generator/ERC721S";
import { GenerateERC721CCode } from "@/generator/ERC721C";
import { GenerateERC1155Code} from "@/generator/ERC1155";
import governorCodeGenerator from "@/generator/Governor";
import { generateCustomSCode } from "@/generator/CustomS";
import { generateCustomCCode } from "@/generator/CustomC";
import { generateERC20CCode } from "@/generator/ERC20C";
  // IMPORTING TYPES
import { GovernorFormDataType } from "@/types/types";
  // IMPORTING HIGHLIGHT-JS CODES
import hljs from '../highlightjs';
import "@/css/atom-one-dark.css";
  // IMPORTING COMPONENTS
import CodeHighlighter from "./ui/CodeHighlighter";

// A FUNCTION THAT GENERATES HYPERLINKS FOR SOLIDITY
function injectHyperlinksSolidity(code: string, version: string = "5.0.2"){
    // We are modifying HTML, so use HTML escaped chars. The pattern excludes paths that include /../ in the URL.
    const importRegex = /&quot;(@openzeppelin\/)(contracts-upgradeable\/|contracts\/)((?:(?!\.\.)[^/]+\/)*?[^/]*?)&quot;/g

    return code.replace(importRegex, `&quot;<a class="import-link" style="text-decoration: underline;" href="https://github.com/OpenZeppelin/openzeppelin-$2blob/v${version}/contracts/$3" target="_blank" rel="noopener noreferrer">$1$2$3</a>&quot;`);
}

// A FUNCTION THAT GENERATES HYPERLINKS FOR CAIRO
function injectHyperlinksCairo(code: string, version: string = "0.10.0") {
  const importRegex = /use<\/span> (openzeppelin)::([^\s]*);/g;
  let result = code;
  let match = importRegex.exec(code);

  while (match != null) {
    const [line, libraryPrefix, libraryPath] = match;

    if (
      line !== undefined &&
      libraryPrefix !== undefined &&
      libraryPath !== undefined
    ) {
      const githubPrefix = `https://github.com/OpenZeppelin/cairo-contracts/blob/v${version}/src/`;
      let libraryPathSegments = libraryPath.split("::");

      // Remove the component name
      if (
        libraryPathSegments.length > 0 &&
        libraryPathSegments[libraryPathSegments.length - 1] !== "interface"
      ) {
        libraryPathSegments.pop();
      }

      if (libraryPathSegments !== undefined && libraryPathSegments.length > 0) {
        const replacedImportLine = `use<\/span> <a class="import-link" href='${githubPrefix}${libraryPathSegments.join("/")}.cairo' target='_blank' rel='noopener noreferrer'>${libraryPrefix}::${libraryPath}</a>;`;
        result = result.replace(line, replacedImportLine);
      }
    }
    match = importRegex.exec(code);
  }
  return result;
}

// A FUNCTION THAT RETURNS THE CODE-EDITOR COMPONENT
const CodeEditor = () => {
  //erc20 logic with props snippets
  const [erc20sburnable] = useRecoilState(ERC20SBurnable);
  const [erc20spausable] = useRecoilState(ERC20SPauseable);
  const [erc20svotes] = useRecoilState(ERC20SVotes);
  const [erc20sflashMinting] = useRecoilState(ERC20SFlashMinting);
  const [erc20sroles] = useRecoilState(ERC20SAccessControlRoles);
  const [erc20sownable] = useRecoilState(ERC20SAccessControlOwnable);
  const [erc20smanaged] = useRecoilState(ERC20SAccessControlManaged);
  const [erc20spermit] = useRecoilState(ERC20SPermit);
  const [erc20supgradeable] = useRecoilState(ERC20SUpgradeability);
  const [erc20sUUPS] = useRecoilState(ERC20SUpgradeabilityUUPS);
  const [erc20smintable] = useRecoilState(ERC20SMintable);
  const [erc20ssecuritycontact] = useRecoilState(ERC20SSecurityContact);
  const [erc20slicense] = useRecoilState(ERC20SLicense);
  const [erc20sname] = useRecoilState(ERC20SName);
  const [erc20ssymbol] = useRecoilState(ERC20SSymbol);
  const [erc20spremint] = useRecoilState(ERC20SPremint);

  const ERC20InitialCode = generateERC20SCode(
    erc20sburnable,
    erc20smintable,
    erc20svotes,
    erc20spausable,
    erc20sflashMinting,
    erc20sroles,
    erc20sownable,
    erc20smanaged,
    erc20spermit,
    erc20supgradeable,
    erc20sUUPS,
    erc20ssecuritycontact,
    erc20slicense,
    erc20sname,
    erc20ssymbol,
    erc20spremint
  );

  //erc20C logic with props snippets
  const [erc20cburnable] = useRecoilState(ERC20CBurnable);
  const [erc20cpausable] = useRecoilState(ERC20CPauseable);
  const [erc20croles] = useRecoilState(ERC20CAccessControlRoles);
  const [erc20cownable] = useRecoilState(ERC20CAccessControlOwnable);
  const [erc20cupgradeable] = useRecoilState(ERC20CUpgradeable);
  const [erc20cmintable] = useRecoilState(ERC20CMintable);
  const [erc20cpremint] = useRecoilState(ERC20CPremint);
  const [erc20clicense] = useRecoilState(ERC20CLicense);
  const [erc20cname] = useRecoilState(ERC20CName);
  const [erc20csymbol] = useRecoilState(ERC20CSymbol);

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

  //customS logic with props snippets
  const [customspausable] = useRecoilState(CustomSPauseable);
  const [customsroles] = useRecoilState(CustomSAccessControlRoles);
  const [customsownable] = useRecoilState(CustomSAccessControlOwnable);
  const [customsmanaged] = useRecoilState(CustomSAccessControlManaged);
  const [customsupgradeable] = useRecoilState(CustomSUpgradeable);
  const [customsupgradeability] = useRecoilState(
    CustomSUpgradeabilityTransparent
  );
  const [customsUUPS] = useRecoilState(CustomSUpgradeabilityUUPS);
  const [customssecuritycontact] = useRecoilState(CustomSSecurityContact);
  const [customsname] = useRecoilState(CustomSName);
  const [customslicense] = useRecoilState(CustomSLicense);

  const CustomSInitialCode = generateCustomSCode(
    customsupgradeable,
    customspausable,
    customsroles,
    customsownable,
    customsmanaged,
    customsupgradeability,
    customsUUPS,
    customssecuritycontact,
    customsname,
    customslicense
  );

  //customC logic with props snippets
  const [customcpausable] = useRecoilState(CustomCPauseable);
  const [customcroles] = useRecoilState(CustomCAccessControlRoles);
  const [customcownable] = useRecoilState(CustomCAccessControlOwnable);
  const [customcupgradeable] = useRecoilState(CustomCUpgradeable);
  const [customcupgradeability] = useRecoilState(CustomCUpgradeability);
  const [customcUUPS] = useRecoilState(CustomCUpgradeabilityUUPS);
  const [customcname] = useRecoilState(CustomCName);
  const [customclicense] = useRecoilState(CustomCLicense);

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

  // EXTRACTING THE GOVERNOR FORM DATA
  const governorData = useRecoilValue<GovernorFormDataType>(governorFormData)

  //checking which page is active
  const [isWizard] = useRecoilState(wizard);
  const [isCairo] = useRecoilState(cairos);

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
    initialCode = governorCodeGenerator(governorData);
  } else if (IsCustom) {
    initialCode = CustomSInitialCode;
  }

  //cairo templates
  const [CairoERC721] = useRecoilState(ERC721);
  const [CairoERC20] = useRecoilState(ERC20);
  const [CairoCustom] = useRecoilState(Custom);

  let CairoInitialCode = ERC20CInitialCode;

  if (CairoERC721) {
    CairoInitialCode = ERC721InitialCairoCode;
  } else if (CairoERC20) {
    CairoInitialCode = ERC20CInitialCode;
  } else if (CairoCustom) {
    CairoInitialCode = CustomCInitialCode;
  }

  // CHECKING THE ALREADY CONVERTED CODE FOR LINKS 
  const injectedCode = isWizard 
    ? 
  injectHyperlinksSolidity(hljs.highlight('solidity', initialCode).value)
    :
    isCairo
      ?
    injectHyperlinksCairo(hljs.highlight("cairo", CairoInitialCode).value)
      :
    "No registered language detected"
  
  return (
    <div className="w-full h-full">
      <CodeHighlighter code={injectedCode}/>
    </div>
  );
};

export default CodeEditor;