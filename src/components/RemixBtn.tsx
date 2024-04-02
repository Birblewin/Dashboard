"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Image from "next/image";
  // IMPORTING PROPS
import { RenderButtonProps } from "@/types/props";

import { useRecoilState, useRecoilValue } from "recoil";
  // IMPORTING ATOMS
import {
  ERC1155 as ERC1155Atom, 
  ERC20 as ERC20Atom, 
  ERC721 as ERC721Atom, 
  Custom as CustomAtom, 
  Governor as GovernorAtom
} from '../store/solidityBtns'

import wizardTab from "@/store/wizard";
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
  ERC20SUpgradeabilityTransparent,
} from "@/store/ERC20S";

import { governorFormData } from "@/store/Governor";


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
import { GenerateERC1155Code} from "@/generator/ERC1155";
import governorCodeGenerator from "@/generator/Governor";
import { generateCustomSCode } from "@/generator/CustomS";

  // IMPORTING TYPES
import { GovernorFormDataType, WizardTabType } from "@/types/types";
  
import Tool from "./Tool";

function RenderBtn({handleClick}: RenderButtonProps) {
  //checking which page is active
  const currentWizard = useRecoilValue<WizardTabType>(wizardTab)

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
  const [erc20stransparent] = useRecoilState(ERC20SUpgradeabilityTransparent)

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
    erc20stransparent,
    erc20sUUPS,
    erc20supgradeable,
    erc20ssecuritycontact,
    erc20slicense,
    erc20sname,
    erc20ssymbol,
    erc20spremint
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

  const ERC1155InitialCode = GenerateERC1155Code(
    erc1155burnable,
    erc1155supplyTracking,
    erc1155pausable,
    erc1155updatableURI,
    erc1155roles,
    erc1155ownable,
    erc1155managed,
    erc1155transparent,
    erc1155UUPS,
    erc1155security,
    erc1155upgradability,
    erc1155mintable,
    erc1155baseUrl
  );

  const [erc721sburnable] = useRecoilState(ERC721SBurnable);
  const [erc721spausable] = useRecoilState(ERC721SPauseable);
  const [erc721svotes] = useRecoilState(ERC721SVotes);
  const [erc721sUriStorage] = useRecoilState(ERC721SURIStorage);
  const [erc721sroles] = useRecoilState(ERC721SAccessControlRoles);
  const [erc721sownable] = useRecoilState(ERC721SAccessControlOwnable);
  const [erc721smanaged] = useRecoilState(ERC721SAccessControlManaged);
  const [erc721senumerable] = useRecoilState(ERC721SEnumerable);
  const [erc721transparent] = useRecoilState(ERC721SUpgradeabilityTransparent);
  const [erc721uups] = useRecoilState(ERC721SUpgradeabilityUUPS);
  const [erc721security] = useRecoilState(ERC721SSecurityContact);
  const [erc721upgradability] = useRecoilState(ERC721SUpgradeability);
  const [erc721autoincrement] = useRecoilState(ERC721SAutoIncrementIds);
  const [erc721mintable] = useRecoilState(ERC721SMintable);
  const [erc721sBaseUrl] = useRecoilState(ERC721SBaseURI);

  const ERC721InitialCode = GenerateERC721SCode(
    erc721sburnable,
    erc721svotes,
    erc721spausable,
    erc721sUriStorage,
    erc721sroles,
    erc721sownable,
    erc721smanaged,
    erc721senumerable,
    erc721transparent,
    erc721uups,
    erc721security,
    erc721upgradability,
    erc721autoincrement,
    erc721mintable,
    erc721sBaseUrl
  );

  

  // EXTRACTING THE GOVERNOR FORM DATA
  const governorData = useRecoilValue<GovernorFormDataType>(governorFormData);

  const [IsERC1155] = useRecoilState(ERC1155Atom);
  const [IsERC721] = useRecoilState(ERC721Atom);
  const [IsERC20] = useRecoilState(ERC20Atom);
  const [IsGovernor] = useRecoilState(GovernorAtom);
  const [IsCustom] = useRecoilState(CustomAtom);

  let initialCode = ERC20InitialCode;
  let isUpgradeable = erc20stransparent;

  if (IsERC1155) {
    initialCode = ERC1155InitialCode;
    isUpgradeable = erc1155transparent;
  } else if (IsERC721) {
    initialCode = ERC721InitialCode;
    isUpgradeable = erc721transparent;
  } else if (IsERC20) {
    initialCode = ERC20InitialCode;
    isUpgradeable = erc20stransparent;
  } else if (IsGovernor) {
    initialCode = governorCodeGenerator(governorData);
    isUpgradeable = false;
  } else if (IsCustom) {
    initialCode = CustomSInitialCode;
    isUpgradeable = customsupgradeability;
  }

  
  const openCodeInRemix = (code: string, upgradeable = false): void => {
    // Construct the Remix URL with the provided code
    const remixURL = new URL('https://remix.ethereum.org');
    console.log("Passed code", code);
    remixURL.searchParams.set('code', btoa(code).replace(/=*$/, ''));
  
    // Set the deployProxy parameter if code is upgradeable
    if (upgradeable) {
      remixURL.searchParams.set('deployProxy', upgradeable.toString());
    }
  
    // Open the Remix URL in a new tab
    window.open(remixURL.toString(), '_blank');
  };

  const handleOpenInRemix = () => {
    openCodeInRemix(initialCode, isUpgradeable);
  };


  return (
    <>
      <button disabled={isUpgradeable} className={`font-bold hover:border-[#4D3C77] hover:bg-[#4D3C77] border p-2 rounded flex gap-1 items-center ${isUpgradeable? "text-grey-100": "text-white"}`}  onClick={handleOpenInRemix}>
        {isUpgradeable && <Tool tooltipText="Transparent upgradeable contracts are not supported on Remix. Try using Remix with UUPS upgradability or use Hardhat or Truffle with" link="https://docs.openzeppelin.com/upgrades-plugins/1.x/" linktext="OpenZeppelin Upgrades"/>}
        {!isUpgradeable &&<Image src={"/render.svg"} alt="render" width={20} height={20} style={{ filter: 'invert(100%)' }} />}
        Open in Remix
      </button>
    </>
  );
}

export default RenderBtn;