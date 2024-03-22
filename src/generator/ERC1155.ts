
import { ERC1155Code } from '@/code/ERC1155';
import { ERC1155BaseURI, ERC1155License, ERC1155Name, ERC1155SecurityContact, ERC1155SupplyTracking} from '@/store/ERC1155';
import { useRecoilState } from 'recoil';




interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC1155Code.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

//export const License: string[] = getCodeContent("license");
export const Compatibility: string[] = getCodeContent("compatibility");
export const CodeVersion: string[] = getCodeContent("codeVersion");
export const DefaultImport: string[] = getCodeContent("Imports", "DefaultStart");
export const BurnableImport: string[] = getCodeContent("Imports", "Burnable");
export const PausableImport: string[] = getCodeContent("Imports", "Pausable");
export const SupplyTrackingImport: string[] = getCodeContent("Imports", "SupplyTracking");
export const OwnableImport: string[] = getCodeContent("Imports", "Ownable");
export const RolesImport: string[] = getCodeContent("Imports", "Roles");
export const ManagedImport: string[] = getCodeContent("Imports", "Managed");

export const DefaultUpgradableImport: string[] = getCodeContent("UpgradableImports", "Default");
export const BurnableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Burnable");
export const PausableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Pausable");
export const SupplyTrackingUpgradableImport: string[] = getCodeContent("UpgradableImports", "SupplyTracking");
export const UpdatableURIUpgradableImport: string[] = getCodeContent("UpgradableImports", "UpdatableURI");
export const OwnableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Ownable");
export const RolesUpgradableImport: string[] = getCodeContent("UpgradableImports", "Roles");
export const ManagedUpgradableImport: string[] = getCodeContent("UpgradableImports", "Managed");

export const UUPSUpgradableImport: string[] = getCodeContent("UpgradableImports", "UUPS");

export const SecurityContact: string[] = getCodeContent("SecurityContact");
export const ContractName: string[] = getCodeContent("ContractNames", "Default");
export const ContractNameDefault: string[] = getCodeContent("ContractNames", "DefaultName");
export const OwnableContractName: string[] = getCodeContent("ContractNames", "Ownable");
export const RolesContractName: string[] = getCodeContent("ContractNames", "Roles");
export const ManagedContractName: string[] = getCodeContent("ContractNames", "Managed");
export const BurnableContractName: string[] = getCodeContent("ContractNames", "Burnable");
export const PausableContractName: string[] = getCodeContent("ContractNames", "Pausable");
export const SupplyTrackingContractName: string[] = getCodeContent("ContractNames", "SupplyTracking");
export const UpdatableURIContractName: string[] = getCodeContent("ContractNames", "UpdatableURI");

export const UpgradabilityContractName: string[] = getCodeContent("upgradeableContractNames", "Upgradability");

export const UpgradableBurnable: string[] = getCodeContent("upgradeableContractNames", "Burnable");
export const UpgradablePausable: string[] = getCodeContent("upgradeableContractNames", "Pausable");
export const UpgradableSupplyTracking: string[] = getCodeContent("upgradeableContractNames", "SupplyTracking");
export const UpgradableUpdatableURI: string[] = getCodeContent("upgradeableContractNames", "UpdatableURI");
export const UpgradableOwnable: string[] = getCodeContent("upgradeableContractNames", "Ownable");
export const UpgradableRoles: string[] = getCodeContent("upgradeableContractNames", "Roles");
export const UpgradableManaged: string[] = getCodeContent("upgradeableContractNames", "Managed");
export const UpgradableUUPS: string[] = getCodeContent("upgradeableContractNames", "UUPS");
export const UpgradableTransparent: string[] = getCodeContent("upgradeableContractNames", "Transparent");

export const DefaultConstructor: string[] = getCodeContent("Constructor", "Default");
export const MintableConstructor: string[] = getCodeContent("Constructor", "MintableInit");
export const UupsConstructor2: string[] = getCodeContent("Constructor", "UupsInit");
export const OwnableConstructor1: string[] = getCodeContent("Constructor", "Ownable1");
export const OwnableConstructor2: string[] = getCodeContent("Constructor", "Ownable2");
export const MintableRoles2: string[] = getCodeContent("Constructor", "MintableRoles2");
export const PausableRoles2: string[] = getCodeContent("Constructor", "PausableRoles2");
export const RolesConstructor1: string[] = getCodeContent("Constructor", "Roles1");
export const RolesConstructor2: string[] = getCodeContent("Constructor", "Roles2");
export const ManagedConstructor1: string[] = getCodeContent("Constructor", "Managed1");
export const ManagedConstructor2: string[] = getCodeContent("Constructor", "Managed2");
export const UpgradableConstructor: string[] = getCodeContent("Constructor", "Upgradable");

export const MintableFunctions: string[] = getCodeContent("Functions", "Mintable");
export const PausableFunctions: string[] = getCodeContent("Functions", "Pausable");
export const Ownable: string[] = getCodeContent("Functions", "Ownable");
export const Roles1: string[] = getCodeContent("Functions", "Roles1");
export const AccesRoles2: string[] = getCodeContent("Functions", "AccessRoles2");
export const Managed: string[] = getCodeContent("Functions", "Managed");
export const InterfaceUpgrade: string[] = getCodeContent("Functions", "Upgradable");
export const UpdatableURIRoleFunction: string[] = getCodeContent("Functions", "UpdatableURI");

export const InitializeMintableFunctions: string[] = getCodeContent("upgradeableFunctions", "Mintable");
export const InitializePausableFunctions: string[] = getCodeContent("upgradeableFunctions", "Pausable");
export const InitializeSupplyTrackingFunctions: string[] = getCodeContent("upgradeableFunctions", "UpgradableSupplyTracking");
export const InitializeUpdatableURIFunctions: string[] = getCodeContent("upgradeableFunctions", "UpdatableURI");
export const InitializeOwnableFunctions: string[] = getCodeContent("upgradeableFunctions", "Ownable");
export const InitializeBurnableFunctions: string[] = getCodeContent("upgradeableFunctions", "Burnable");
export const InitializeRolesFunctions: string[] = getCodeContent("upgradeableFunctions", "Roles");
export const InitializeRolesFunctions2: string[] = getCodeContent("upgradeableFunctions", "RolesRole");
export const InitializeManagedFunctions: string[] = getCodeContent("upgradeableFunctions", "Managed");
export const InitializeUUPSFunctions: string[] = getCodeContent("upgradeableFunctions", "UUPS");
export const MintableRoles: string[] = getCodeContent("upgradeableFunctions", "MintableRoles");
export const PausableRoles: string[] = getCodeContent("upgradeableFunctions", "PausableRoles");
export const RolesUUPS: string[] = getCodeContent("upgradeableFunctions", "RolesUUPS");
export const OwnableUUPS: string[] = getCodeContent("upgradeableFunctions", "OwnableUUPS");
export const ManagedUUPS: string[] = getCodeContent("upgradeableFunctions", "ManagedUUPS");
export const URIStorageMint: string[] = getCodeContent("Functions", "URIStorageMintable");



  
export function GenerateERC1155Code(erc1155burnable: boolean, erc1155supplyTracking: boolean, erc1155pausable: boolean, erc1155updatableURI: boolean, erc1155roles: boolean, erc1155ownable: boolean, erc1155managed: boolean, erc1155transparent: boolean, erc1155uups:boolean, erc1155ecurity:any, erc1155upgradability: boolean, erc1155mintable: boolean, erc1155BaseUrl:any): string {

        const shouldRenderStarter = erc1155pausable || erc1155supplyTracking || erc1155updatableURI;
        const shouldRenderUpdateFunction = erc1155pausable || erc1155supplyTracking;
        const shouldRenderIncreaseBalanceFunction = erc1155updatableURI || erc1155supplyTracking;

        //Recoil states for ERC1155
        const [name, setName] = useRecoilState(ERC1155Name);
        const [license, setLicense] = useRecoilState(ERC1155License);
        const [securityContact, setSecurityContact] = useRecoilState(ERC1155SecurityContact);
        const [baseUrl, setBaseUrl] = useRecoilState(ERC1155BaseURI);
        const [contractName, setContractName] = useRecoilState(ERC1155Name);

        const ContractHeader = [
            `contract ${contractName} is `
        ]
        const License = [
            `// SPDX-License-Identifier: ${license}`
        ]
        const UUPSFunctions = [
            `function _authorizeUpgrade(address newImplementation)
        \t\t\   internal
         ${erc1155ownable? OwnableUUPS : ""}${erc1155roles? RolesUUPS : ""}${erc1155managed? ManagedUUPS : ""}
         override
        {}`
        ]

        
        const Roles = [
            erc1155mintable? MintableRoles : "" ,
            erc1155pausable? '\t'+PausableRoles : "",
        ].join('\n\t\t').trim();
        const initializedStrings = [
            erc1155supplyTracking? InitializeSupplyTrackingFunctions:"",
            erc1155updatableURI?  InitializeUpdatableURIFunctions:"",
            erc1155pausable? InitializePausableFunctions:"",
            erc1155burnable? InitializeBurnableFunctions:"",
            erc1155managed? InitializeManagedFunctions:"",
            erc1155roles? '\n\t\t'+InitializeRolesFunctions:"",
            erc1155ownable? InitializeOwnableFunctions:"",
            erc1155uups? '\n\t\t'+InitializeUUPSFunctions:"",
            erc1155roles? '\n\t\t'+InitializeRolesFunctions2:"",
            erc1155ownable? Roles:"",  
        ].join('').trim();
        const TransparentFunction = [
            `  function initialize() initializer public {
        \t\t\ __ERC1155_init("${baseUrl}");
         \t\t\ ${initializedStrings}
        }`
        ]

        const starter = [
            `// The following functions are overrides required by Solidity.`
        ].join('').trim(); 
    

    // The Update Function for(SupplyTracking and Pausable) 
        const updateFunction = [
      `function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
                internal
                override(ERC1155${erc1155supplyTracking? SupplyTrackingContractName : ""} ${erc1155pausable? PausableContractName : ""})
         {
                super._update(from, to, ids, values);
        }`
        ].join('').trim(); 

        const upgradableUpdateFunction = [
            `function _update(address to, uint256 tokenId, address auth)
                    internal
                    override(ERC1155Upgradeable${erc1155supplyTracking? UpgradableSupplyTracking : ""}${erc1155pausable? UpgradablePausable : ""})
            {
                  super._update(from, to, ids, values);
            }`
         ].join('').trim(); 

        
        const MintableFunctions = [
        `function mint(address account, uint256 id, uint256 amount, bytes memory data)
            \t public
        ${erc1155ownable? Ownable : ""}${erc1155roles? Roles1 : ""}${erc1155managed? Managed : ""}
         {
           \t\t_mint(account, id, amount, data);
          }
    
         function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
            \t public
        ${erc1155ownable? Ownable : ""}${erc1155roles? Roles1 : ""}${erc1155managed? Managed : ""}
           {
            \t_mintBatch(to, ids, amounts, data);
           }
    `
        ]
       
        const SetURIFunctions= [
        `\n\t\t function setURI(string memory newuri) public ${erc1155ownable ? Ownable : ""} ${erc1155roles ? UpdatableURIRoleFunction : ""}${erc1155managed ? Managed : ""}{
             \t\t_setURI(newuri);
           }`
        ]

        const SupportInterfaceFunctions = [
        `\n\t\t\tfunction supportsInterface(bytes4 interfaceId)
                  public
                  view
                  override(ERC1155, AccessControl)
                  returns (bool)
            {
             \t\   return super.supportsInterface(interfaceId);
            }`
        ]

        const UpgradableSupportInterfaceFunctions = [
           `function supportsInterface(bytes4 interfaceId)
                public
                view
                override(ERC1155${InterfaceUpgrade}, AccessControl${InterfaceUpgrade})
                returns (bool)
        {
            return super.supportsInterface(interfaceId);
        }`
        ]
        const PausableFunctions = [

        `function pause() public ${erc1155ownable? Ownable : ""}${erc1155roles? AccesRoles2 : ""}${erc1155managed? Managed : ""} {
                _pause();
            }
        
         function unpause() public ${erc1155ownable? Ownable : ""}${erc1155roles? AccesRoles2 : ""}${erc1155managed? Managed : ""}{
                _unpause();
            }`
        ].join('\n').trim();

        
        const upgradeableFunctions = [
            erc1155upgradability? TransparentFunction : "",
            erc1155mintable? '\n\t\t '+MintableFunctions : "" , 
            erc1155pausable? '\n\t\t '+PausableFunctions : "",
            erc1155uups? '\n\t\t'+UUPSFunctions : "",
            erc1155roles? '\n\n\t\t'+UpgradableSupportInterfaceFunctions : "",
            shouldRenderStarter? '\n\t\t'+starter : "",
            shouldRenderUpdateFunction? '\n\t\t'+upgradableUpdateFunction : "",
        ].join('').trim();


        const functions = [
             erc1155mintable ? MintableFunctions : "" , 
             erc1155pausable ? '\t\t'+PausableFunctions : "",
             erc1155updatableURI ? SetURIFunctions : "",
             erc1155roles ? SupportInterfaceFunctions : "",
             shouldRenderStarter ? '\n\t\t' + starter : "",
             shouldRenderUpdateFunction ? '\n\t\t  ' + updateFunction : "",
        ].join('').trim();   

        const upgradeableConstructor = [
              UpgradableConstructor
        ]
        const Roles2 = [
            erc1155mintable? MintableRoles2 : "" ,
            erc1155pausable? PausableRoles2 : ""
        ].join('\n\t\t').trim();
        const constructor = [
        `
         ${erc1155uups? UupsConstructor2 : ""}
        constructor(${erc1155managed?ManagedConstructor1:""}${erc1155ownable?OwnableConstructor1:""}${erc1155roles?RolesConstructor1:""}) ERC1155("${baseUrl}") ${erc1155ownable?'  '+OwnableConstructor2+'\n\t\t\t\t':''}${erc1155managed? ManagedConstructor2+'\n\t\t\t\t':''}{${erc1155roles?'\n\t\t\t\t'+RolesConstructor2+'\n\t\t\t\t':""}${erc1155roles?Roles2:""}}`
        ].join('').trim();

       const UpgradeableContract = [
            ContractHeader,
            UpgradabilityContractName,
            erc1155ownable? UpgradableOwnable : "",
            erc1155roles? UpgradableRoles : "",
            erc1155managed? UpgradableManaged : "",
            erc1155burnable? UpgradableBurnable : "",
            erc1155pausable? UpgradablePausable : "",
            erc1155supplyTracking? UpgradableSupplyTracking : "",
            erc1155updatableURI? UpgradableUpdatableURI : "",
            erc1155uups? UpgradableUUPS : "",
            erc1155transparent? UpgradableTransparent : "",
            " {"
       ].join('').trim();
  
       const contract = [
            ContractHeader,
            ContractNameDefault,
            erc1155ownable? OwnableContractName : "",
            erc1155roles? RolesContractName : "",
            erc1155managed? ManagedContractName : "",
            erc1155burnable? BurnableContractName : "",
            erc1155pausable? PausableContractName : "",
            erc1155supplyTracking? SupplyTrackingContractName : "",
            erc1155updatableURI? UpdatableURIContractName : "",
            " {"
        ].join('').trim();
        const defaultImports = [
            DefaultImport,
            erc1155burnable ? '\n'+BurnableImport : "",
            erc1155pausable ? '\n'+PausableImport : "",
            erc1155supplyTracking ? '\n'+SupplyTrackingImport : "",
            erc1155ownable ? '\n'+OwnableImport : "",
            erc1155roles ? '\n'+RolesImport : "",
            erc1155managed ? '\n'+ManagedImport : "",
        ].join('').trim();
        const upgradableImports = [
            DefaultUpgradableImport,
            erc1155burnable ? '\n'+BurnableUpgradableImport : "",
            erc1155pausable ? '\n'+PausableUpgradableImport : "",
            erc1155supplyTracking ? '\n'+SupplyTrackingUpgradableImport : "",
            erc1155updatableURI ? '\n'+UpdatableURIUpgradableImport : "",
            erc1155ownable ? '\n'+OwnableUpgradableImport : "",
            erc1155roles ? '\n'+RolesUpgradableImport : "",
            erc1155managed ? '\n'+ManagedUpgradableImport : "",
            erc1155uups ? '\n'+UUPSUpgradableImport : "",
        ].join('').trim();

   
    const imports = [
        License,
        Compatibility,
        CodeVersion,
        erc1155upgradability? upgradableImports+'\n': defaultImports+'\n',
        erc1155ecurity ? 
        `/// @custom:security-contact ${securityContact}` : "",

        erc1155upgradability? UpgradeableContract: contract,
        erc1155upgradability? upgradeableConstructor: '\t\t'+constructor,
        erc1155upgradability? '\t\t'+upgradeableFunctions: '\t\t'+functions,
        
        "}"

    ].filter(Boolean); // This removes any empty strings from the array

    const result = imports.join('\n').trim();

    return result;

  }
  
