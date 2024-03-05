"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { BurnableImport, BurnableUpgradeableImport, CodeVersion, Compatibility, EndUpgradeableImport, FlashMintingImport, FlashMintingUpgradeableImport,  Import, License, ManagedImport, ManagedUpgradeableImport, OwnableImport, OwnableUpgradeableImport, PausableImport, PausableUpgradeableImport, PermitImport, PermitUpgradeableImport, RolesImport, RolesUpgradeableImport, StartUpgradeableImport, UUPSUpgradeableImport, VotesImport, VotesUpgradeableImport } from "@/formats/ERC20S";
import { ERC20SAccessControlManaged, ERC20SAccessControlOwnable, ERC20SAccessControlRoles, ERC20SBurnable, ERC20SFlashMinting, ERC20SPauseable, ERC20SPremint, ERC20SUpgradeability, ERC20SUpgradeabilityUUPS, ERC20SVotes } from "@/store/ERC20S";
import { useRecoilState } from "recoil";

const burnable = `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";`


const initialCode = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
${burnable}

contract MyToken is ERC20, ERC20Permit {
    constructor() ERC20("MyToken", "MTK") ERC20Permit("MyToken") {}
}

}
`;
const CodeEditor: React.FC = () => {
  const [burnable] = useRecoilState(ERC20SBurnable);
  const [pausable] = useRecoilState(ERC20SPauseable);
  const [votes] = useRecoilState(ERC20SVotes);
  const [flashMinting] = useRecoilState(ERC20SFlashMinting);
  const [roles] = useRecoilState(ERC20SAccessControlRoles);
  const [ownable] = useRecoilState(ERC20SAccessControlOwnable);
  const [managed] = useRecoilState(ERC20SAccessControlManaged);
  const [premint] = useRecoilState(ERC20SPremint);
  const [upgradeable] = useRecoilState(ERC20SUpgradeability);
  const [UUPS] = useRecoilState(ERC20SUpgradeabilityUUPS);

  const upgradeableImports = `
  ${StartUpgradeableImport}
  ${burnable ? BurnableUpgradeableImport : ""}
  ${pausable ? PausableUpgradeableImport : ""}
  ${flashMinting ? FlashMintingUpgradeableImport : ""}
  ${premint ? PermitUpgradeableImport : ""}
  ${votes ? VotesUpgradeableImport : ""}
  ${ownable ? OwnableUpgradeableImport : ""}
  ${roles ? RolesUpgradeableImport : ""}
  ${managed ? ManagedUpgradeableImport : ""}
  ${EndUpgradeableImport}
  ${UUPS ? UUPSUpgradeableImport : ""}
`
const Imports = `
  
  ${burnable ? BurnableImport : ""}
  ${pausable ? PausableImport : ""}
  ${flashMinting ? FlashMintingImport : ""}
  ${premint ? PermitImport : ""}
  ${votes ? VotesImport : ""}
  ${ownable ? OwnableImport : ""}
  ${roles ? RolesImport : ""}
  ${managed ? ManagedImport : ""}
  
`


 const FormattedERC20SCode = `
  ${License}
  ${Compatibility}
  ${CodeVersion}
  ${!upgradeable ? Imports : ""}
  ${upgradeable ? upgradeableImports : ""}
  



`

  return (
    <div className="w-full h-full">
      
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        className="w-full h-full font-bold"
      >
        {FormattedERC20SCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;