import { CustomSSecurityContact, CustomSLicense, CustomSName} from "@/store/CustomS";
import { getRecoil } from "recoil-nexus";

const name = CustomSName;
const license = CustomSLicense;
const contact = CustomSSecurityContact;



const CustomSCode =[
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "license",  
        tag: "Default",
        name: "ERC20DefaultLicense", 
        content:`// SPDX-License-Identifier: ${license}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "compatibility",  
        tag: "Default",
        name: "ERC20Compatibility", 
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "codeVersion",  
        tag: "Default",
        name: "ERC20codeVersion", 
        content: `pragma solidity ^0.8.20;
        `
    },
    
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Pausable",
        name: "CustomSPausableUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Ownable",
        name: "CustomSOwnableUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Roles",
        name: "CustomSRolesUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Managed",
        name: "CustomSManagedUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "DefaultEnd",
        name: "CustomSDefaultEndUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "UUPS",
        name: "CustomSUUPSUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "UUPS",
        name: "ERC20UUPSUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";`
    },
    
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Pausable",
        name: "ERC20PausableImports", 
        content: `import "@openzeppelin/contracts/utils/Pausable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Ownable",
        name: "ERC20OwnableImports", 
        content: `import "@openzeppelin/contracts/access/Ownable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Roles",
        name: "ERC20RolesImports", 
        content: `import "@openzeppelin/contracts/access/AccessControl.sol"`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Managed",
        name: "ERC20ManagedImports", 
        content: `import "@openzeppelin/contracts/access/manager/AccessManaged.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "SecurityContact",  
        tag: "Default",
        name: "ERC20SecurityContact", 
        content: `/// @custom:security-contact ${contact}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractHeader",  
        tag: "Default",
        name: "ERC20ContractHeader", 
        content: `contract ${name}  `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractStart",  
        tag: "Default",
        name: "ERC20DefaultContractNames", 
        content: `is`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "UpgradeableContractStart",  
        tag: "Default",
        name: "ERC20DefaultContractNames", 
        content: `is Initializable`
    },
   
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Pausable",
        name: "ERC20PausableContractNames", 
        content: `Pausable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Ownable",
        name: "ERC20OwnableContractNames", 
        content: `Ownable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Roles",
        name: "ERC20RolesContractNames", 
        content: `AccessControl`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Managed",
        name: "ERC20ManagedContractNames", 
        content: `AccessManaged`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Default",
        name: "ERC20DefaultContractNames", 
        content: `Initializable`
    },
    
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Pausable",
        name: "ERC20PausableContractNames", 
        content: `PausableUpgradeable`
    },
    
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Ownable",
        name: "OwnableContractNames", 
        content: `OwnableUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Roles",
        name: "RolesContractNames", 
        content: `AccessControlUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Managed",
        name: "ManagedContractNames", 
        content: `AccessManagedUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "RolesByte",  
        tag: "Pausable",
        name: "RolesByte", 
        content: `bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "RolesByte",  
        tag: "UUPS",
        name: "RolesByte", 
        content: `bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");`
    },
    
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Ownable",
        name: "ERC20OwnableConstructor", 
        content: `constructor(address initialOwner) Ownable(initialOwner) {}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Roles",
        name: `constructor(address defaultAdmin) {
            _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Managed",
        name: "ERC20ManagedConstructor", 
        content: `constructor(address defaultAdmin) {
            _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableConstructor",  
        tag: "Default",
        name: "ERC20upgradeableConstructor", 
        content: `/// @custom:oz-upgrades-unsafe-allow constructor
        constructor() {
            _disableInitializers();
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Transparent",
        name: "ERC20BurnableupgradeableFunctions", 
        content: `function initialize(address initialOwner) initializer public {
            __Pausable_init();
            __Ownable_init(initialOwner);
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "UUPS",
        name: "ERC20PausableupgradeableFunctions", 
        content: `function initialize(address initialOwner) initializer public {
        __Pausable_init();
        __Ownable_init(initialOwner);
        __UUPSUpgradeable_init();
    }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "Pausable",
        name: "Section2", 
        content: `function pause() public onlyOwner {
        _pause();
    }
    
    function unpause() public onlyOwner {
        _unpause();
    }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section3",  
        tag: "UUPS",
        name: "ERC20UUPSSection2", 
        content: `function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
`
    }
];


export default CustomSCode;


