import { ERC20SSecurityContact, ERC20SLicense, ERC20SName} from "@/store/ERC20S";

const name = ERC20SName;
const license = ERC20SLicense;
const contact = ERC20SSecurityContact;

const PermitConstructor =
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Permit",
        name: "ERC20PermitConstructor", 
        content: `ERC20Permit("${license}")`
    };


export const ERC20SCode =[
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "license",  
        tag: "Default",
        name: "ERC20DefaultLicense", 
        content:`// SPDX-License-Identifier: `
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
        tag: "DefaultS",
        name: "ERC20DefaultUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Burnable",
        name: "ERC20BurnableUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Pausable",
        name: "ERC20PausableUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "flashMinting",
        name: "ERC20FlashMintingUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20FlashMintUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Permit",
        name: "ERC20PermitUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Votes",
        name: "ERC20VotesUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Ownable",
        name: "ERC20OwnableUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Roles",
        name: "ERC20RolesUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "Managed",
        name: "ERC20ManagedUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableImports",  
        tag: "DefaultEnd",
        name: "ERC20DefaultEndUpgradeableImports", 
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";`
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
        tag: "Default",
        name: "ERC20DefaultImports", 
        content: `import "@openzeppelin/contracts/token/ERC20/ERC20.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Burnable",
        name: "ERC20BurnableImports", 
        content: `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Pausable",
        name: "ERC20PausableImports", 
        content: `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "flashMinting",
        name: "ERC20FlashMintingImports", 
        content: `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Permit",
        name: "ERC20PermitImports", 
        content: `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Votes",
        name: "ERC20VotesImports", 
        content: `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";`
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
        content: `import "@openzeppelin/contracts/access/AccessControl.sol";`
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
        content: `contract ${name} is `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Default",
        name: "ERC20DefaultContractNames", 
        content: `ERC20`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Burnable",
        name: "ERC20BurnableContractNames", 
        content: `ERC20Burnable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Pausable",
        name: "ERC20PausableContractNames", 
        content: `ERC20Pausable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "flashMinting",
        name: "ERC20FlashMintingContractNames", 
        content: `ERC20FlashMint`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Permit",
        name: "ERC20PermitContractNames", 
        content: `ERC20Permit`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ContractNames",  
        tag: "Votes",
        name: "ERC20VotesContractNames", 
        content: `ERC20Votes`
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
        content: ` Initializable, ERC20Upgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Burnable",
        name: "ERC20BurnableContractNames", 
        content: `ERC20BurnableUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Pausable",
        name: "ERC20PausableContractNames", 
        content: `ERC20PausableUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "flashMinting",
        name: "ERC20FlashMintingContractNames", 
        content: `ERC20FlashMintUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "UUPS",
        name: "ERC20FlashMintingContractNames", 
        content: `UUPSUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Permit",
        name: "ERC20PermitContractNames", 
        content: `ERC20PermitUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Votes",
        name: "ERC20VotesContractNames", 
        content: `ERC20VotesUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Ownable",
        name: "ERC20OwnableContractNames", 
        content: `OwnableUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Roles",
        name: "ERC20RolesContractNames", 
        content: `AccessControlUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableContractNames",  
        tag: "Managed",
        name: "ERC20ManagedContractNames", 
        content: `AccessManagedUpgradeable`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "RolesByte",  
        name: "ERC20RolesByte", 
        content: `bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Default",
        name: "ERC20DefaultConstructor", 
        content: `constructor() ERC20("${name}", "${license}")${PermitConstructor.content}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Ownable",
        name: "ERC20OwnableConstructor", 
        content: `constructor(address initialOwner)
        ERC20("${name}", "${license}")
        ${PermitConstructor.content}
        Ownable(initialOwner)
    {}
`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Roles",
        name: "ERC20RolesConstructor", 
        content: `constructor(address defaultAdmin)
        ERC20("${name}", "${license}")
         ${PermitConstructor.content}
    {
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
        content: `constructor(address initialAuthority)
        ERC20("${name}", "${license}")
         ${PermitConstructor.content}
        AccessManaged(initialAuthority)
 {}
`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableConstructor",  
        tag: "Default",
        name: "ERC20upgradeableConstructor", 
        content: `constructor() {
        _disableInitializers();
    }
    `
    },

    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctionsHeader",  
        tag: "Roles",
        name: "ERC20DefaultupgradeableFunctions", 
        content: `function initialize(address defaultAdmin `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctionsHeader",  
        tag: "Managed",
        name: "ERC20DefaultupgradeableFunctions", 
        content: `function initialize(address initialAuthority`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctionsHeader",  
        tag: "Ownable",
        name: "ERC20DefaultupgradeableFunctions", 
        content: `function initialize(address initialOwner`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctionsHeader",  
        tag: "Pausable",
        name: "ERC20DefaultupgradeableFunctions", 
        content: `,  address pauser`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctionsHeader",  
        tag: "Mintable",
        name: "ERC20DefaultupgradeableFunctions", 
        content: `,  address minter`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Default",
        name: "ERC20DefaultupgradeableFunctions", 
        content: `       initializer public
    {
    __ERC20_init("${name}", "${license}");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Burnable",
        name: "ERC20BurnableupgradeableFunctions", 
        content: `    __ERC20Burnable_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Pausable",
        name: "ERC20PausableupgradeableFunctions", 
        content: `    __ERC20Pausable_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "flashMinting",
        name: "ERC20FlashMintingupgradeableFunctions", 
        content: `    __ERC20FlashMint_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Permit",
        name: "ERC20PermitupgradeableFunctions", 
        content: `    __ERC20Permit_init("${name}");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Votes",
        name: "ERC20VotesupgradeableFunctions", 
        content: `    __ERC20Votes_init();`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Ownable",
        name: "ERC20OwnableupgradeableFunctions", 
        content: `    __Ownable_init(initialOwner);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Roles",
        name: "ERC20RolesupgradeableFunctions", 
        content: `    __AccessControl_init();

        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "upgradeableFunctions",  
        tag: "Managed",
        name: "ERC20ManagedupgradeableFunctions", 
        content: `    __AccessManaged_init(initialAuthority);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "MintableOwnable",
        name: "ERC20MintableSection2", 
        content: `function mint(address to, uint256 amount) public onlyOwner {
         _mint(to, amount);
    }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "MintableRoles",
        name: "ERC20MintableSection2", 
        content: `function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
         _mint(to, amount);
    }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "MintableManaged",
        name: "ERC20MintableSection2", 
        content: `function mint(address to, uint256 amount) public restricted {
         _mint(to, amount);
    }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "UUPSOwnable",
        name: "ERC20UUPSSection2", 
        content: `function _authorizeUpgrade(address newImplementation)
                internal
                onlyOwner
                override
        {}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "UUPSRoles",
        name: "ERC20UUPSSection2", 
        content: `function _authorizeUpgrade(address newImplementation)
                internal
                onlyRole(UPGRADER_ROLE)
                override
        {}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "UUPSManaged",
        name: "ERC20UUPSSection2", 
        content: `function _authorizeUpgrade(address newImplementation)
                internal
                restricted
                override
        {}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "PausableOwnable",
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
        section: "Section2",  
        tag: "PausableManaged",
        name: "Section2", 
        content: `function pause() public restricted {
        _pause();
    }
    
    function unpause() public restricted {
        _unpause();
    }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section2",  
        tag: "PausableRoles",
        name: "Section2", 
        content: `function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }
    
    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section3",  
        tag: "VotesUpgradeable",
        name: "ERC20PausableSection3", 
        content: `function nonces(address owner)
                public
                view
                override(ERC20PermitUpgradeable, NoncesUpgradeable)
                returns (uint256)
        {
        return super.nonces(owner);
    }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Section3",  
        tag: "Votes",
        name: "ERC20VotesSection3", 
        content: `function nonces(address owner)
                public
                view
                override(ERC20Permit, Nonces)
                returns (uint256)
        {
        return super.nonces(owner);
    }`
    }
];
