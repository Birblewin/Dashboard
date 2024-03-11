
import { ERC721SLicense, ERC721SName } from "@/store/ERC721S";





export const ERC721SCode =[
    // { 
    //     snippet_id: 1, 
    //     wizard_id: 1,
    //     contractType_id: 1, 
    //     section: "license",  
    //     tag: "Default",
    //     name: "ERC721DefaultLicense", 
    //     content: `// SPDX-License-Identifier: ${ERC721SLicense}`
    // },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "compatibility",  
        tag: "Default",
        name: "ERC721Compatibility", 
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "codeVersion",  
        tag: "Default",
        name: "ERC721codeVersion", 
        content: `pragma solidity ^0.8.20;
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "DefaultStart",
        name: "ERC721DefaultUpgradeableImports", 
        content: `import "@openzeppelin/contracts/token/ERC721/ERC721.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Burnable",
        name: "ERC721BurnableUpgradeableImports", 
        content: `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Pausable",
        name: "ERC721PausableUpgradeableImports", 
        content: `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "URIStorage",
        name: "ERC721FlashMintingUpgradeableImports", 
        content: `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Enumerable",
        name: "ERC721PermitUpgradeableImports", 
        content: `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Votes",
        name: "ERC721VotesUpgradeableImports", 
        content:`import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Ownable",
        name: "ERC721OwnableUpgradeableImports", 
        content: `import "@openzeppelin/contracts/access/Ownable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Roles",
        name: "ERC721RolesUpgradeableImports", 
        content: `import "@openzeppelin/contracts/access/AccessControl.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Managed",
        name: "ERC721ManagedUpgradeableImports", 
        content: `import "@openzeppelin/contracts/access/manager/AccessManaged.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "UUPS",
        name: "ERC721UUPSUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Transparent",
        name: "TransparentUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";`
    },
    // { 
    //     snippet_id: 1, 
    //     wizard_id: 1,
    //     contractType_id: 1, 
    //     section: "SecurityContact",  
    //     tag: "Default",
    //     name: "ERC721SecurityContact", 
    //     content: `/// @custom:security-contact ${ERC721SSecurityContact}`
    // },
    // { 
    //     snippet_id: 1, 
    //     wizard_id: 1,
    //     contractType_id: 1, 
    //     section: "ContractHeader",  
    //     tag: "Default",
    //     name: "ERC721ContractHeader", 
    //     content: `contract ${ERC721SName} is `
    // },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "DefaultName",
        name: "name", 
        content: `ERC721`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Burnable",
        name: "ERC721BurnableContractNames", 
        content: `, ERC721Burnable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Pausable",
        name: "ERC721PausableContractNames", 
        content: `, ERC721Pausable`
    },
    // { 
    //     snippet_id: 1, 
    //     wizard_id: 1,
    //     contractType_id: 1, 
    //     section: "ContractNames",  
    //     tag: "flashMinting",
    //     name: "ERC721FlashMintingContractNames", 
    //     content: `,ERC721FlashMint `
    // },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "URIStorage",
        name: "ERC721URIStorageContractNames", 
        content: `, ERC721URIStorage`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Enumerable",
        name: "ERC721EnumerableContractNames", 
        content: `, ERC721Enumerable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Votes",
        name: "ERC721VotesContractNames", 
        content: `, EIP712, ERC721Votes`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Ownable",
        name: "ERC721OwnableContractNames", 
        content: `, Ownable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Roles",
        name: "ERC721RolesContractNames", 
        content: `, AccessControl`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Managed",
        name: "ERC721ManagedContractNames", 
        content: `, AccessManaged`
    },
        // { 
    //     snippet_id: 1, 
    //     wizard_id: 1,
    //     contractType_id: 1, 
    //     section: "upgradeableContractNames",  
    //     tag: "Default",
    //     name: "ERC721DefaultContractNames", 
    //     content: `Initializable, ERC721Upgradeable `
    // },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Upgradability",
        name: "ERC721UpgradabilityContractNames", 
        content: `Initializable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Transparent",
        name: "ERC721TransparentContractNames", 
        content: `, ERC721Upgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "UUPS",
        name: "ERC721UUPSContractNames", 
        content: `, ERC721Upgradeable, UUPSUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Burnable",
        name: "ERC721BurnableContractNames", 
        content: `, ERC721BurnableUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Pausable",
        name: "ERC721PausableContractNames", 
        content: `, ERC721PausableUpgradeable `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "URIStorage",
        name: "ERC721URIStorageContractNames", 
        content: `, ERC721URIStorageUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Votes",
        name: "ERC721VotesContractNames", 
        content: `, ERC721VotesUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Ownable",
        name: "ERC721OwnableContractNames", 
        content: `, OwnableUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Roles",
        name: "ERC721RolesContractNames", 
        content: `, AccessControlUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Managed",
        name: "ERC721ManagedContractNames", 
        content: `, AccessManagedUpgradeable`
    },
    // { 
    //     snippet_id: 1, 
    //     wizard_id: 1,
    //     contractType_id: 1, 
    //     section: "RolesByte",  
    //     name: "ERC721RolesByte", 
    //     content: `bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");`
    // },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "AutoIncrement",
        name: "Auto Increment", 
        content: `uint256 private _nextTokenId;`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Default",
        name: "ERC721DefaultConstructor", 
        content: `      constructor() ERC721("${ERC721SName}", "${ERC721SLicense}") {}`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Votes",
        name: "ERC721VotesConstructor", 
        content: `EIP712("${ERC721SName}", "1")`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Ownable1",
        name: "ERC721Ownable1Constructor", 
        content: `address initialOwner`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Ownable2",
        name: "ERC721Ownable2Constructor", 
        content: `Ownable(initialOwner)`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Roles1",
        name: "ERC721Roles1Constructor", 
        content: `address defaultAdmin`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Roles2",
        name: "ERC721Roles2Constructor", 
        content: `_grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "MintableRoles2",
        name: "ERC721MintableRoles2Constructor", 
        content: `_grantRole(MINTER_ROLE, minter);`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "PausableRoles2",
        name: "ERC721PausableRoles2Constructor", 
        content: `_grantRole(PAUSER_ROLE, pauser);`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Managed1",
        name: "ERC721Managed1Constructor", 
        content: `address initialAuthority`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Managed2",
        name: "ERC721Managed2Constructor", 
        content: `AccessManaged(initialAuthority)`
     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Upgradable",
        name: "ERC721UpgradableConstructor", 
        content: `/// @custom:oz-upgrades-unsafe-allow constructor
        constructor() {
            _disableInitializers();
        }`
     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Constructor",  
//         tag: "Ownable",
//         name: "ERC721OwnableConstructor", 
//         content: `constructor(address initialOwner)
//         ERC721("${ERC721SName}", "${ERC721SLicense}")
//         ${PermitConstructor.content}
//         Ownable(initialOwner)
//     {}
// `
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Constructor",  
//         tag: "Roles",
//         name: "ERC721RolesConstructor", 
//         content: `constructor(address defaultAdmin)
//         ERC721("${ERC721SName}", "${ERC721SLicense}")
//          ${PermitConstructor.content}
//     {
//         _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
//     }
// `
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Constructor",  
//         tag: "Managed",
//         name: "ERC721ManagedConstructor", 
//         content: `constructor(address initialAuthority)
//         ERC721("${ERC721SName}", "${ERC721SLicense}")
//          ${PermitConstructor.content}
//         AccessManaged(initialAuthority)
//  {}
// `
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "upgradeableConstructor",  
//         tag: "Default",
//         name: "ERC721upgradeableConstructor", 
//         content: `constructor() {
//             _disableInitializers();
//         }
//     `
//     },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "AutoIncrementMintable",
        name: "ERC721AutoIncrementMintableFunctions", 
        content: `uint256 tokenId = _nextTokenId++;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "URIStorageMintable",
        name: "ERC721URIStorageMintableFunctions", 
        content: `_setTokenURI(tokenId, uri);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "Pausable",
        name: "ERC721PausableFunctions", 
        content: `
        function pause() public onlyOwner {
            _pause();
        }
    
        function unpause() public onlyOwner {
            _unpause();
        }`
    },

    //..............
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Burnable",
        name: "ERC721BurnableupgradeableFunctions", 
        content: `__ERC721Burnable_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Pausable",
        name: "ERC721PausableupgradeableFunctions", 
        content: `__ERC721Pausable_init()`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Enumerable",
        name: "ERC721EnumerableupgradeableFunctions", 
        content: ` __ERC721Enumerable_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "URIStorage",
        name: "ERC721URIStorageupgradeableFunctions", 
        content: `__ERC721URIStorage_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Votes",
        name: "ERC721VotesupgradeableFunctions", 
        content: `__EIP712_init(${ERC721SName}, "1");
            __ERC721Votes_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Ownable",
        name: "ERC721OwnableupgradeableFunctions", 
        content: `__Ownable_init(initialOwner);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Roles",
        name: "ERC721RolesupgradeableFunctions", 
        content: `__AccessControl_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "RolesRole",
        name: "ERC721RolesRoleupgradeableFunctions", 
        content: `_grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "MintableRoles",
        name: "ERC721MintableRolesupgradeableFunctions", 
        content: `_grantRole(MINTER_ROLE, minter);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "PausableRoles",
        name: "ERC721PausableRolesupgradeableFunctions", 
        content: `_grantRole(PAUSER_ROLE, pauser);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Managed",
        name: "ERC721ManagedupgradeableFunctions", 
        content: `__AccessManaged_init(initialAuthority);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "UUPS",
        name: "ERC721UUPSupgradeableFunctions", 
        content: `__UUPSUpgradeable_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "OwnableUUPS",
        name: "ERC721UUPSupgradeableFunctions", 
        content: `onlyOwner`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "RolesUUPS",
        name: "ERC721RolesUUPSupgradeableFunctions", 
        content: `onlyRole(UPGRADER_ROLE)`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "ManagedUUPS",
        name: "ERC721ManagedUUPSupgradeableFunctions", 
        content: `restricted`
    },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Section2",  
//         tag: "Mintable",
//         name: "ERC721MintableSection2", 
//         content: `function mint(address to, uint256 amount) public onlyOwner {
//             _mint(to, amount);
//         }`
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Section2",  
//         tag: "UUPS",
//         name: "ERC721UUPSSection2", 
//         content: `function _authorizeUpgrade(address newImplementation)
//         internal
//         onlyRole(UPGRADER_ROLE)
//         override
//     {}`
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Section2",  
//         tag: "Pausable",
//         name: "ERC721PausableSection2", 
//         content: `function pause() public onlyOwner {
//             _pause();
//         }
    
//         function unpause() public onlyOwner {
//             _unpause();`
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Section3",  
//         tag: "Pausable",
//         name: "ERC721PausableSection3", 
//         content: `function nonces(address owner)
//         public
//         view
//         override(ERC721PermitUpgradeable, NoncesUpgradeable)
//         returns (uint256)
//     {
//         return super.nonces(owner);
//     }
// `
//     },
//     { 
//         snippet_id: 1, 
//         wizard_id: 1,
//         contractType_id: 1, 
//         section: "Section3",  
//         tag: "Votes",
//         name: "ERC721VotesSection3", 
//         content: `// The following functions are overrides required by Solidity.

//         function _update(address from, address to, uint256 value)
//             internal
//             override(ERC721Upgradeable, ERC721PausableUpgradeable)
//         {
//             super._update(from, to, value);
//         }`
//     }
];
  
  const Wizards =[
    {wizard_id: 1, wizard_name: "Cairo"},
    {wizard_id: 2, wizard_name: "Solidity"}
  ];

  const ContractType =[
    {contractType_id: 1, contractType: "ERC721"},
    {contractType_id: 2, contractType: "ERC721"}
  ];

const VariableName= [
    {Variable_id: 1, variable_Section: {name} }
]
