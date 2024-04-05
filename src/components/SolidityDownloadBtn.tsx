"use client"
  import React, { useState, useEffect, useRef } from "react";
  // IMPORTING COMPONENTS
import DownloadIcon from "@mui/icons-material/Download";
import { ButtonProps } from "@/types/props";
import { saveAs } from 'file-saver';
import JSZip from "jszip";
import type { GenericOptions } from "../packages/src/build-generic";
import type { Contractt } from "../packages/src/contract";
import SOLIDITY_VERSION from '../packages/src/solidity-version.json';
import {contracts} from '../packages/src/openzeppelin-contracts';
import { formatLinesWithSpaces, Lines, spaceBetween } from "../packages/src/utils/format-lines";

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
  ERC721SName,ERC721SLicense
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
  ERC1155Name,
  ERC1155License,
} from "@/store/ERC1155";
  // IMPORTING CODE GENERATORS
import {generateERC20SCode} from "../generator/ERC20S";
import { GenerateERC721SCode } from "@/generator/ERC721S";
import { GenerateERC1155Code} from "@/generator/ERC1155";
import governorCodeGenerator from "@/generator/Governor";
import { generateCustomSCode } from "@/generator/CustomS";

import type { KindedOptions, Kind, Contract, OptionsErrorMessages } from '@openzeppelin/wizard';
import { ContractBuilder, buildGeneric, printContract, sanitizeKind, OptionsError } from '@openzeppelin/wizard';
import { postConfig } from './post-config';

  // IMPORTING TYPES
import { GovernorFormDataType, WizardTabType } from "@/types/types";

function Download({handleClick}: ButtonProps) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
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
  const [erc1155sname] = useRecoilState(ERC1155Name)
  const [erc1155slicense] = useRecoilState(ERC1155License)

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
  const [erc721sname] = useRecoilState(ERC721SName);
  const [erc721slicense] = useRecoilState(ERC721SLicense)

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
  let Name = erc20sname;

  if (IsERC1155) {
    initialCode = ERC1155InitialCode;
    isUpgradeable = erc1155transparent;
    Name = erc1155sname;
  } else if (IsERC721) {
    initialCode = ERC721InitialCode;
    isUpgradeable = erc721transparent;
    Name = erc721sname;
  } else if (IsERC20) {
    initialCode = ERC20InitialCode;
    isUpgradeable = erc20stransparent;
    Name = erc20sname;
  } else if (IsGovernor) {
    initialCode = governorCodeGenerator(governorData);
    isUpgradeable = false;
    Name = "MyGovernor";
  } else if (IsCustom) {
    initialCode = CustomSInitialCode;
    isUpgradeable = customsupgradeability;
    Name = customsname;
  }

  //HARDHAT PACKAGE

  const hardhatConfig = (erc20supgradeable: boolean,erc721upgradability: boolean, erc1155upgradability: boolean ) => `\
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
${(erc20supgradeable || erc721upgradability || erc1155upgradability)? `import "@openzeppelin/hardhat-upgrades";` : ''}

const config: HardhatUserConfig = {
  solidity: {
    version: "${SOLIDITY_VERSION}",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

export default config;
`;

const tsConfig = `\
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
`;

const gitIgnore = `\
node_modules
.env
coverage
coverage.json
typechain
typechain-types

# Hardhat files
cache
artifacts
`;

const testt = (c: Contractt, opts?: GenericOptions) => {
  return formatLinesWithSpaces(
    2,
    ...spaceBetween(
      getImports(c),
      getTestCase(c),
    ),
  );

  function getTestCase(c: Contractt) {
    const args = getAddressArgs(c);
    return [
      `describe("${Name}", function () {`,
      [
        'it("Test contract", async function () {',
        spaceBetween(
          [
            `const ContractFactory = await ethers.getContractFactory("${Name}");`,
          ],
          getAddressVariables(args),
          [
            `const instance = await ${getDeploymentCall(c, args)};`,
            'await instance.waitForDeployment();'
          ],
          getExpects(),
        ),
        '});'
      ],
      '});',
    ];
  }

  function getImports(c: Contractt) {
    return [
      'import { expect } from "chai";',
      `import { ${getHardhatPlugins(c).join(', ')} } from "hardhat";`,
    ];
  }

  function getExpects(): Lines[] {
    if (opts !== undefined) {
      switch (opts.kind) {
        case 'ERC20':
        case 'ERC721':
          return [`expect(await instance.name()).to.equal("${opts.name}");`];

        case 'ERC1155':
          return [`expect(await instance.uri(0)).to.equal("${opts.uri}");`];

        case 'Governor':
        case 'Custom':
          break;

        default:
          throw new Error('Unknown ERC');
      }
    }
    return [];
  }

  function getAddressVariables(args: string[]): Lines[] {
    const vars = [];
    for (let i = 0; i < args.length; i++) {
      vars.push(`const ${args[i]} = (await ethers.getSigners())[${i}].address;`);
    }
    return vars;
  }
};

function getAddressArgss(c: Contractt): string[] {
  const args = [];
  for (const constructorArg of c.constructorArgs) {
    if (constructorArg.type === 'address') {
      args.push(constructorArg.name);
    }
  }
  return args;
}

function getDeploymentCall(c: Contractt, args: string[]): string {
  return (erc20supgradeable || erc721upgradability || erc1155upgradability) ? `upgrades.deployProxy(ContractFactory, [${args.join(', ')}])` : `ContractFactory.deploy(${args.join(', ')})`;
}

const scriptt = (c: Contractt) => {
  const args = getAddressArgss(c);
  return `\
import { ${getHardhatPlugins(c).join(', ')} } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("${Name}");

  ${args.length > 0 ? '// TODO: Set addresses for the contract arguments below' : ''}
  const instance = await ${getDeploymentCall(c, args)};
  await instance.waitForDeployment();

  console.log(\`${(erc20supgradeable || erc721upgradability || erc1155upgradability) ? 'Proxy' : 'Contract'} deployed to \${await instance.getAddress()}\`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
`};

const readmee = `\
# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a contract generated by [OpenZeppelin Wizard](https://wizard.openzeppelin.com/), a test for that contract, and a script that deploys that contract.

## Installing dependencies

\`\`\`
npm install
\`\`\`

## Testing the contract

\`\`\`
npm test
\`\`\`

## Deploying the contract

You can target any network from your Hardhat config using:

\`\`\`
npx hardhat run --network <network-name> scripts/deploy.ts
\`\`\`
`;

function getHardhatPlugins(c: Contractt) {
  let plugins = ['ethers'];
  if (erc20supgradeable || erc721upgradability || erc1155upgradability) {
    plugins.push('upgrades');
  }
  return plugins;
}

 async function zipHardhat(c: Contractt, opts?: GenericOptions) {

  const zip = new JSZip();

  const { default: packageJson } = (erc20supgradeable || erc721upgradability || erc1155upgradability) ? await import("../packages/src/environments/hardhat/upgradeable/package.json") : await import("../packages/src/environments/hardhat/package.json");
  packageJson.license = c.license;

  const { default: packageLock } = (erc20supgradeable || erc721upgradability || erc1155upgradability) ? await import("../packages/src/environments/hardhat/upgradeable/package-lock.json") : await import("../packages/src/environments/hardhat/package-lock.json");
  packageLock.packages[''].license = c.license;


  zip.file(`contracts/${Name}.sol`, initialCode);
  zip.file('test/test.ts', testt(c, opts));
  zip.file('scripts/deploy.ts', scriptt(c));
  zip.file('.gitignore', gitIgnore);
  zip.file('hardhat.config.ts', hardhatConfig(erc20supgradeable, erc721upgradability, erc1155upgradability));
  zip.file('package.json', JSON.stringify(packageJson, null, 2));
  zip.file(`package-lock.json`, JSON.stringify(packageLock, null, 2));
  zip.file('README.md', readmee);
  zip.file('tsconfig.json', tsConfig);

  return zip;
}

//FOUNDRY PACKAGE
  function getHeader(c: Contractt) {
    return [
      `// SPDX-License-Identifier: ${IsERC20? erc20slicense:""}${IsERC721? erc721slicense:""}${IsERC1155? erc1155slicense:""}`,
      `pragma solidity ^${SOLIDITY_VERSION};`
    ];
  }
  
  const test = (c: Contractt, opts?: GenericOptions) => {
    return formatLinesWithSpaces(
      2,
      ...spaceBetween(
        getHeader(c),
        getImports(c),
        getTestCase(c),
      ),
    );
  
    function getImports(c: Contractt) {
      const result = [
        'import {Test} from "forge-std/Test.sol";',
      ];
      if (erc20supgradeable || erc721upgradability || erc1155upgradability) {
        result.push('import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";');
      }
      result.push(`import {${Name}} from "src/${Name}.sol";`);
      return result;
    }
  
    function getTestCase(c: Contractt) {
      const args = getAddressArgs(c);
      return [
        `contract ${Name}Test is Test {`,
        spaceBetween(
          [
            `${Name} public instance;`,
          ],
          [
            'function setUp() public {',
            getAddressVariables(c, args),
            getDeploymentCode(c, args),
            '}',
          ],
          getContractSpecificTestFunction(),
        ),
        '}',
      ];
    }
  
    function getDeploymentCode(c: Contractt, args: string[]): Lines[] {
      if (erc20supgradeable || erc721upgradability || erc1155upgradability) {
        if (opts?.upgradeable === 'transparent') {
          return [
            `address proxy = Upgrades.deployTransparentProxy(`,
            [
              `"${Name}.sol",`,
              `initialOwner,`,
              `abi.encodeCall(${Name}.initialize, (${args.join(', ')}))`
            ],
            ');',
            `instance = ${Name}(proxy);`,
          ];
        } else {
          return [
            `address proxy = Upgrades.deployUUPSProxy(`,
            [
              `"${Name}.sol",`,
              `abi.encodeCall(${Name}.initialize, (${args.join(', ')}))`
            ],
            ');',
            `instance = ${Name}(proxy);`,
          ];
        }
      } else {
        return [
          `instance = new ${Name}(${args.join(', ')});`,
        ];
      }
    }
  
    function getAddressVariables(c: Contractt, args: string[]): Lines[] {
      const vars = [];
      let i = 1; // private key index starts from 1 since it must be non-zero
      if ((erc20supgradeable || erc721upgradability || erc1155upgradability) && opts?.upgradeable === 'transparent' && !args.includes('initialOwner')) {
        vars.push(`address initialOwner = vm.addr(${i++});`);
      }
      for (const arg of args) {
        vars.push(`address ${arg} = vm.addr(${i++});`);
      }
      return vars;
    }
  
    function getContractSpecificTestFunction(): Lines[] {
      if (opts !== undefined) {
        switch (opts.kind) {
          case 'ERC20':
          case 'ERC721':
            return [
              'function testName() public view {',
              [
                `assertEq(instance.name(), "${opts.name}");`
              ],
              '}',
            ];
  
          case 'ERC1155':
            return [
              'function testUri() public view {',
              [
                `assertEq(instance.uri(0), "${opts.uri}");`
              ],
              '}',
            ];
  
          case 'Governor':
          case 'Custom':
            return [
              'function testSomething() public {',
              [
                '// Add your test here',
              ],
              '}',
            ]
  
          default:
            throw new Error('Unknown ERC');
        }
      }
      return [];
    }
  };
  
  function getAddressArgs(c: Contractt): string[] {
    const args = [];
    for (const constructorArg of c.constructorArgs) {
      if (constructorArg.type === 'address') {
        args.push(constructorArg.name);
      }
    }
    return args;
  }
  
  const script = (c: Contractt, opts?: GenericOptions) => {
    return formatLinesWithSpaces(
      2,
      ...spaceBetween(
        getHeader(c),
        getImports(c),
        getScript(c),
      ),
    );
  
    function getImports(c: Contractt) {
      const result = [
        'import {Script} from "forge-std/Script.sol";',
        'import {console} from "forge-std/console.sol";',
      ];
      if (erc20supgradeable || erc721upgradability || erc1155upgradability) {
        result.push('import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";');
      }
      result.push(`import {${Name}} from "src/${Name}.sol";`);
      return result;
    }
  
    function getScript(c: Contractt) {
      const args = getAddressArgs(c);
      const deploymentLines = [
        'vm.startBroadcast();',
        ...getAddressVariables(c, args),
        ...getDeploymentCode(c, args),
        `console.log("${(erc20supgradeable || erc721upgradability || erc1155upgradability) ? 'Proxy' : 'Contract'} deployed to %s", address(instance));`,
        'vm.stopBroadcast();',
      ];
      return [
        `contract ${Name}Script is Script {`,
        spaceBetween(
          [
            'function setUp() public {}',
          ],
          [
            'function run() public {',
            args.length > 0 ? addTodoAndCommentOut(deploymentLines) : deploymentLines,
            '}',
          ],
        ),
        '}',
      ];
    }
  
    function getDeploymentCode(c: Contractt, args: string[]): Lines[] {
      if (erc20supgradeable || erc721upgradability || erc1155upgradability) {
        if (opts?.upgradeable === 'transparent') {
          return [
            `address proxy = Upgrades.deployTransparentProxy(`,
            [
              `"${Name}.sol",`,
              `initialOwner,`,
              `abi.encodeCall(${Name}.initialize, (${args.join(', ')}))`
            ],
            ');',
            `${Name} instance = ${Name}(proxy);`,
          ];
        } else {
          return [
            `address proxy = Upgrades.deployUUPSProxy(`,
            [
              `"${Name}.sol",`,
              `abi.encodeCall(${Name}.initialize, (${args.join(', ')}))`
            ],
            ');',
            `${Name} instance = ${Name}(proxy);`,
          ];
        }
      } else {
        return [
          `${Name} instance = new ${Name}(${args.join(', ')});`,
        ];
      }
    }
  
    function getAddressVariables(c: Contractt, args: string[]): Lines[] {
      const vars = [];
      if ((erc20supgradeable || erc721upgradability || erc1155upgradability) && opts?.upgradeable === 'transparent' && !args.includes('initialOwner')) {
        vars.push('address initialOwner = <Set initialOwner address here>;');
      }
      for (const arg of args) {
        vars.push(`address ${arg} = <Set ${arg} address here>;`);
      }
      return vars;
    }
  
    function addTodoAndCommentOut(lines: Lines[]) {
      return [
        '// TODO: Set addresses for the variables below, then uncomment the following section:',
        '/*',
        ...lines,
        '*/',
      ];
    }
  };
  
  const setupSh = (c: Contractt) => `\
  #!/usr/bin/env bash
  
  # Check if git is installed
  if ! which git &> /dev/null
  then
    echo "git command not found. Install git and try again."
    exit 1
  fi
  
  # Check if Foundry is installed
  if ! which forge &> /dev/null
  then
    echo "forge command not found. Install Foundry and try again. See https://book.getfoundry.sh/getting-started/installation"
    exit 1
  fi
  
  # Setup Foundry project
  if ! [ -f "foundry.toml" ]
  then
    echo "Initializing Foundry project..."
  
    # Backup Wizard template readme to avoid it being overwritten
    mv README.md README-oz.md
  
    # Initialize sample Foundry project
    forge init --force --no-commit --quiet
  
  ${(erc20supgradeable || erc721upgradability || erc1155upgradability) ? `\
    # Install OpenZeppelin Contracts and Upgrades
    forge install OpenZeppelin/openzeppelin-contracts-upgradeable@v0.8.0 --no-commit --quiet
    forge install OpenZeppelin/openzeppelin-foundry-upgrades --no-commit --quiet\
  ` : `\
    # Install OpenZeppelin Contracts
    forge install OpenZeppelin/openzeppelin-contracts@v0.8.0 --no-commit --quiet\
  `}
  
    # Remove unneeded Foundry template files
    rm src/Counter.sol
    rm script/Counter.s.sol
    rm test/Counter.t.sol
    rm README.md
  
    # Restore Wizard template readme
    mv README-oz.md README.md
  
    # Add remappings
    if [ -f "remappings.txt" ]
    then
      echo "" >> remappings.txt
    fi
  ${(erc20supgradeable || erc721upgradability || erc1155upgradability) ? `\
    echo "@openzeppelin/contracts/=lib/openzeppelin-contracts-upgradeable/lib/openzeppelin-contracts/contracts/" >> remappings.txt
    echo "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/" >> remappings.txt
  
    # Add settings in foundry.toml
    echo "" >> foundry.toml
    echo "ffi = true" >> foundry.toml
    echo "ast = true" >> foundry.toml
    echo "build_info = true" >> foundry.toml
    echo "extra_output = [\\"storageLayout\\"]" >> foundry.toml\
  ` : `\
    echo "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/" >> remappings.txt\
  `}
  
    # Perform initial git commit
    git add .
    git commit -m "openzeppelin: add wizard output" --quiet
  
    echo "Done."
  else
    echo "Foundry project already initialized."
  fi
  `;
  
  const readme = (c: Contractt) => `\
  # Sample Foundry Project
  
  This project demonstrates a basic Foundry use case. It comes with a contract generated by [OpenZeppelin Wizard](https://wizard.openzeppelin.com/), a test for that contract, and a script that deploys that contract.
  
  ## Installing Foundry
  
  See [Foundry installation guide](https://book.getfoundry.sh/getting-started/installation).
  
  ## Initializing the project
  
  \`\`\`
  bash setup.sh
  \`\`\`
  
  ## Testing the contract
  
  \`\`\`
  forge test${(erc20supgradeable || erc721upgradability || erc1155upgradability) ? ' --force' : ''}
  \`\`\`
  
  ## Deploying the contract
  
  You can simulate a deployment by running the script:
  
  \`\`\`
  forge script script/${Name}.s.sol${(erc20supgradeable || erc721upgradability || erc1155upgradability) ? ' --force' : ''}
  \`\`\`
  
  See [Solidity scripting guide](https://book.getfoundry.sh/tutorials/solidity-scripting) for more information.
  `;
  
async function zipFoundry(c: Contractt, opts?: GenericOptions) {
    const zip = new JSZip();
  
    zip.file(`src/${Name}.sol`, initialCode);
    zip.file(`test/${Name}.t.sol`, test(c, opts));
    zip.file(`script/${Name}.s.sol`, script(c, opts));
    zip.file('setup.sh', setupSh(c));
    zip.file('README.md', readme(c));
  
    return zip;
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
 
  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([initialCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${Name}.sol`;
    document.body.appendChild(element);
    element.click();
  };




let contract: Contract = new ContractBuilder('MyToken');

const downloadHardhatHandler = async () => {
  const zip = await zipHardhat(contract);
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'project.zip');
 };



const downloadFoundryHandler = async () => {
  const zip = await zipFoundry(contract);
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'project.zip');
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
          <div className="bg-[#0a0a23cc] p-2 rounded shadow">
            {(IsERC1155 || IsERC721 || IsERC20) ? (
              <>
               <div className="border-b  hover:bg-[#4D3C77] rounded p-2"
            onClick={() => handleDownloadClick()}>
              <h2 className="text-white font-bold flex gap-2 text-sm">
                <Image
                  alt="singleFile"
                  src={"/singleFile.svg"}
                  height={20}
                  width={20}
                />
                Single file
              </h2>
              <p className="text-white pl-6 text-sm my-2">
                Requires installation of npm package (@openzeppelin/contracts).{" "}
                <br />
                Simple to receive updates.
              </p>
            </div>
              <div className="border-b  hover:bg-[#4D3C77] rounded p-2"
             onClick={() =>downloadHardhatHandler()}
            >
              <h2 className="text-white font-bold flex gap-2 text-sm">
                <Image
                  alt="singleFile"
                  src={"/development.svg"}
                  height={20}
                  width={20}
                />
                Development Package (Hardhat)
              </h2>
              <p className="text-white pl-6 text-sm my-2">
                Sample Hardhat project to get started with development and
                testing.
              </p>
            </div>
            <div className=" hover:bg-[#4D3C77] rounded p-2"
             onClick={() =>downloadFoundryHandler()}
            >
              <h2 className="text-white font-bold flex gap-2 text-sm">
                <Image
                  alt="singleFile"
                  src={"/development.svg"}
                  height={20}
                  width={20}
                  className="text-white"
                />
                Development Package (Foundry)
              </h2>
              <p className="text-white pl-6 text-sm my-2">
                Sample Foundry project to get started with development and
                testing.
              </p>
            </div>
              </>
            ):(
              <>
               <div className="border-b  hover:bg-[#4D3C77] rounded p-2"
            onClick={() => handleDownloadClick()}>
              <h2 className="text-white font-bold flex gap-2 text-sm">
                <Image
                  alt="singleFile"
                  src={"/singleFile.svg"}
                  height={20}
                  width={20}
                />
                Single file
              </h2>
              <p className="text-white pl-6 text-sm my-2">
                Requires installation of npm package (@openzeppelin/contracts).{" "}
                <br />
                Simple to receive updates.
              </p>
            </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

}

export default Download;
