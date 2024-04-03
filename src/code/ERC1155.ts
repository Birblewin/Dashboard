

export const ERC1155Code = [
    // Defaults 
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "compatibility",
        tag: "Default",
        name: "ERC1155Compatibility",
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "codeVersion",
        tag: "Default",
        name: "ERC1155codeVersion",
        content: `pragma solidity ^0.8.20;
        `
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "DefaultStart",
        name: "ERC1155DefaultImports",
        content: `import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "Burnable",
        name: "ERC1155BurnableImports",
        content: `import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "Pausable",
        name: "ERC1155PausableImports",
        content:
            `import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "SupplyTracking",
        name: "ERC1155FlashMintingImports",
        content: `import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "Ownable",
        name: "ERC1155OwnableImports",
        content: `import "@openzeppelin/contracts/access/Ownable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "Roles",
        name: "ERC1155RolesImports",
        content: `import "@openzeppelin/contracts/access/AccessControl.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Imports",
        tag: "Managed",
        name: "ERC1155ManagedImports",
        content: `import "@openzeppelin/contracts/access/manager/AccessManaged.sol";`
    },

    //.........................

    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "Default",
        name: "ERC1155DefaultUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "Burnable",
        name: "ERC1155BurnableUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155BurnableUpgradeable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "Pausable",
        name: "ERC1155PausableUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155PausableUpgradeable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "SupplyTracking",
        name: "ERC1155SupplyTrackingUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155URIStorageUpgradeable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "Ownable",
        name: "ERC1155OwnableUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "Roles",
        name: "ERC1155RolesUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "Managed",
        name: "ERC1155ManagedUpgradableImports",
        content: `import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "UpgradableImports",
        tag: "UUPS",
        name: "ERC1155UUPSUpgradeableImports",
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";`
    },

    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "DefaultName",
        name: "name",
        content: `ERC1155`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "Burnable",
        name: "ERC1155BurnableContractNames",
        content: `, ERC1155Burnable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "Pausable",
        name: "ERC1155PausableContractNames",
        content: `, ERC1155Pausable`
    },

    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "SupplyTracking",
        name: "ERC1155URIStorageContractNames",
        content: `, ERC1155Supply`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "Ownable",
        name: "ERC1155OwnableContractNames",
        content: `, Ownable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "Roles",
        name: "ERC1155RolesContractNames",
        content: `, AccessControl`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "ContractNames",
        tag: "Managed",
        name: "ERC1155ManagedContractNames",
        content: `, AccessManaged`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Upgradability",
        name: "ERC1155UpgradabilityContractNames",
        content: `Initializable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Transparent",
        name: "ERC1155TransparentContractNames",
        content: `, ERC1155Upgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "UUPS",
        name: "ERC1155UUPSContractNames",
        content: `, ERC1155Upgradeable, UUPSUpgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Burnable",
        name: "ERC1155BurnableContractNames",
        content: `, ERC1155BurnableUpgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Pausable",
        name: "ERC1155PausableContractNames",
        content: `, ERC1155PausableUpgradeable `
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "SupplyTracking",
        name: "ERC1155SupplyTrackingContractNames",
        content: `, ERC1155SupplyUpgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "UpdatableURI",
        name: "ERC1155UpdatableURIContractNames",
        content: `, ERC1155UpdatableURIUpgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Ownable",
        name: "ERC1155OwnableContractNames",
        content: `, OwnableUpgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Roles",
        name: "ERC1155RolesContractNames",
        content: `, AccessControlUpgradeable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableContractNames",
        tag: "Managed",
        name: "ERC1155ManagedContractNames",
        content: `, AccessManagedUpgradeable`
    },




    // Constructors
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Default",
        name: "ERC1155DefaultConstructor",
        content: `constructor() ERC1155("", "") {}`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "MintableInit",
        name: "ERC1155DefaultConstructor",
        content: `bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "UupsInit",
        name: "ERC1155DefaultConstructor",
        content: `bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Ownable1",
        name: "ERC1155Ownable1Constructor",
        content: `address initialOwner`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Ownable2",
        name: "ERC1155Ownable2Constructor",
        content: `Ownable(initialOwner)`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Roles1",
        name: "ERC1155Roles1Constructor",
        content: `address defaultAdmin`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Roles2",
        name: "ERC1155Roles2Constructor",
        content: `_grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "MintableRoles2",
        name: "ERC1155MintableRoles2Constructor",
        content: `_grantRole(MINTER_ROLE, minter);`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "PausableRoles2",
        name: "ERC1155PausableRoles2Constructor",
        content: `_grantRole(PAUSER_ROLE, pauser);`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Managed1",
        name: "ERC1155Managed1Constructor",
        content: `address initialAuthority`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Bytes",
        tag: "MintableBytes",
        name: "ERC1155Managed1Constructor",
        content: `\n\tbytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Bytes",
        tag: "PausableBytes",
        name: "ERC1155Managed1Constructor",
        content: `\n\tbytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Bytes",
        tag: "UpdatableBytes",
        name: "ERC1155Managed1Constructor",
        content: `bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Managed2",
        name: "ERC1155Managed2Constructor",
        content: `\n\t\t\t\t AccessManaged(initialAuthority)
        `
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Upgradable",
        name: "ERC1155UpgradableConstructor",
        content: `\t/// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Constructor",
        tag: "Ownable",
        name: "ERC1155OwnableConstructor",
        content: `constructor(address initialOwner)
        ERC1155("", "")
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
        name: "ERC1155RolesConstructor",
        content: `constructor(address defaultAdmin)
        ERC1155("", "")
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
        name: "ERC1155ManagedConstructor",
        content: `constructor(address initialAuthority)
        ERC1155("", "")
        AccessManaged(initialAuthority)
 {}
`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableConstructor",
        tag: "Constructor",
        name: "Upgradable",
        content: `constructor() {
            _disableInitializers();
        }
    `
    },
    //// Functions values For mintable Acces Control
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Functions",
        tag: "Ownable",
        name: "ERC1155OwnableMintableFunctions",
        content: `onlyOwner`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Functions",
        tag: "Roles1",
        name: "ERC1155RolesMintableFunctions",
        content: `onlyRole(MINTER_ROLE)`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Functions",
        tag: "Managed",
        name: "ERC1155ManagedMintableFunctions",
        content: `restricted`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Functions",
        tag: "Upgradable",
        name: "ERC1155ManagedMintableFunctions",
        content: `Upgradable`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Functions",
        tag: "UpdatableURI",
        name: "ERC1155UpdatableURIFunctions",
        content: `onlyRole(URI_SETTER_ROLE)`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Functions",
        tag: "AccessRoles2",
        name: "ERC1155UpdatableURIFunctions",
        content: `onlyRole(PAUSER_ROLE)`
    },

    //..............
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "Burnable",
        name: "ERC1155BurnableupgradeableFunctions",
        content: `__ERC1155Burnable_init();`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "Pausable",
        name: "ERC1155PausableupgradeableFunctions",
        content: `__ERC1155Pausable_init();`
    },

    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "Ownable",
        name: "ERC1155OwnableupgradeableFunctions",
        content: `\n\t\t __Ownable_init(initialOwner);`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "Roles",
        name: "ERC1155RolesupgradeableFunctions",
        content: ` __AccessControl_init();`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "RolesRole",
        name: "ERC1155RolesRoleupgradeableFunctions",
        content: `\n\t\t _grantRole(MINTER_ROLE, minter);
         _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);`
    },

    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "PausableRoles",
        name: "ERC1155PausableRolesupgradeableFunctions",
        content: `_grantRole(PAUSER_ROLE, pauser);`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "Managed",
        name: "ERC1155ManagedupgradeableFunctions",
        content: `\n\t\t\ __AccessManaged_init(initialAuthority);`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "UUPS",
        name: "ERC1155UUPSupgradeableFunctions",
        content: ` __UUPSUpgradeable_init();`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "OwnableUUPS",
        name: "ERC1155UUPSupgradeableFunctions",
        content: `onlyOwner`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "RolesUUPS",
        name: "ERC1155RolesUUPSupgradeableFunctions",
        content: `onlyRole(UPGRADER_ROLE)`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "upgradeableFunctions",
        tag: "ManagedUUPS",
        name: "ERC1155ManagedUUPSupgradeableFunctions",
        content: `restricted`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Sections",
        tag: "Mintable",
        name: "ERC1155MintableSection2",
        content: `function mint(address to, uint256 amount) public onlyOwner {
            _mint(to, amount);
        }`
    },
    {
        snippet_id: 1,
        wizard_id: 1,
        contractType_id: 1,
        section: "Section2",
        tag: "UUPS",
        name: "ERC1155UUPSSection2",
        content: `function _authorizeUpgrade(address newImplementation)
            internal
            \t\t\onlyRole(UPGRADER_ROLE)
            override
    {}`
    },
];
