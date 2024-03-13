
import { ERC721SCode } from '@/code/ERC721S';
import { ERC721SBaseURI, ERC721SLicense, ERC721SName, ERC721SSecurityContact, ERC721SSymbol, ERC721SURIStorage } from '@/store/ERC721S';
import { useRecoilState } from 'recoil';




interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC721SCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

//export const License: string[] = getCodeContent("license");
export const Compatibility: string[] = getCodeContent("compatibility");
export const CodeVersion: string[] = getCodeContent("codeVersion");
export const DefaultImport: string[] = getCodeContent("Imports", "DefaultStart");
export const BurnableImport: string[] = getCodeContent("Imports", "Burnable");
export const PausableImport: string[] = getCodeContent("Imports", "Pausable");
export const EnumerableImport: string[] = getCodeContent("Imports", "Enumerable");
export const URIStorageImport: string[] = getCodeContent("Imports", "URIStorage");
export const VotesImport: string[] = getCodeContent("Imports", "Votes");
export const OwnableImport: string[] = getCodeContent("Imports", "Ownable");
export const RolesImport: string[] = getCodeContent("Imports", "Roles");
export const ManagedImport: string[] = getCodeContent("Imports", "Managed");



//...........
export const DefaultUpgradableImport: string[] = getCodeContent("UpgradableImports", "Default");
export const BurnableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Burnable");
export const PausableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Pausable");
export const EnumerableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Enumerable");
export const URIStorageUpgradableImport: string[] = getCodeContent("UpgradableImports", "URIStorage");
export const VotesUpgradableImport: string[] = getCodeContent("UpgradableImports", "Votes");
export const OwnableUpgradableImport: string[] = getCodeContent("UpgradableImports", "Ownable");
export const RolesUpgradableImport: string[] = getCodeContent("UpgradableImports", "Roles");
export const ManagedUpgradableImport: string[] = getCodeContent("UpgradableImports", "Managed");

export const UUPSUpgradableImport: string[] = getCodeContent("UpgradableImports", "UUPS");



//.............................
export const SecurityContact: string[] = getCodeContent("SecurityContact");
//export const ContractHeader: string[] = getCodeContent("ContractHeader");
export const ContractName: string[] = getCodeContent("ContractNames", "Default");
export const ContractNameDefault: string[] = getCodeContent("ContractNames", "DefaultName");
export const OwnableContractName: string[] = getCodeContent("ContractNames", "Ownable");
export const RolesContractName: string[] = getCodeContent("ContractNames", "Roles");
export const ManagedContractName: string[] = getCodeContent("ContractNames", "Managed");
export const BurnableContractName: string[] = getCodeContent("ContractNames", "Burnable");
export const PausableContractName: string[] = getCodeContent("ContractNames", "Pausable");
export const VotesContractName: string[] = getCodeContent("ContractNames", "Votes");
export const URIStorageContractName: string[] = getCodeContent("ContractNames", "URIStorage");
export const EnumerableContractName: string[] = getCodeContent("ContractNames", "Enumerable");



//...................................
export const UpgradabilityContractName: string[] = getCodeContent("upgradeableContractNames", "Upgradability");

export const UpgradableBurnable: string[] = getCodeContent("upgradeableContractNames", "Burnable");
export const UpgradablePausable: string[] = getCodeContent("upgradeableContractNames", "Pausable");
export const UpgradableVotes: string[] = getCodeContent("upgradeableContractNames", "Votes");
export const UpgradableURIStorage: string[] = getCodeContent("upgradeableContractNames", "URIStorage");
export const UpgradableEnumerable: string[] = getCodeContent("upgradeableContractNames", "Enumerable");
export const UpgradableOwnable: string[] = getCodeContent("upgradeableContractNames", "Ownable");
export const UpgradableRoles: string[] = getCodeContent("upgradeableContractNames", "Roles");
export const UpgradableManaged: string[] = getCodeContent("upgradeableContractNames", "Managed");
export const UpgradableUUPS: string[] = getCodeContent("upgradeableContractNames", "UUPS");
export const UpgradableTransparent: string[] = getCodeContent("upgradeableContractNames", "Transparent");


//.............................................
//export const DefaultConstructor: string[] = getCodeContent("Constructor", "Default");
export const AutoIncrementIds: string[] = getCodeContent("Constructor", "AutoIncrement");
export const MintableConstructor: string[] = getCodeContent("Constructor", "MintableInit");
//export const VotesConstructor: string[] = getCodeContent("Constructor", "Votes");
export const OwnableConstructor1: string[] = getCodeContent("Constructor", "Ownable1");
export const OwnableConstructor2: string[] = getCodeContent("Constructor", "Ownable2");
export const MintableRoles2: string[] = getCodeContent("Constructor", "MintableRoles2");
export const PausableRoles2: string[] = getCodeContent("Constructor", "PausableRoles2");
export const RolesConstructor1: string[] = getCodeContent("Constructor", "Roles1");
export const RolesConstructor2: string[] = getCodeContent("Constructor", "Roles2");
export const ManagedConstructor1: string[] = getCodeContent("Constructor", "Managed1");
export const ManagedConstructor2: string[] = getCodeContent("Constructor", "Managed2");
export const UpgradableConstructor: string[] = getCodeContent("Constructor", "Upgradable");



//.............................................
export const MintableFunctions: string[] = getCodeContent("Functions", "Mintable");
export const PausableFunctions: string[] = getCodeContent("Functions", "Pausable");


export const InitializeMintableFunctions: string[] = getCodeContent("upgradeableFunctions", "Burnable");
export const InitializePausableFunctions: string[] = getCodeContent("upgradeableFunctions", "Pausable");
export const InitializeEnumerableFunctions: string[] = getCodeContent("upgradeableFunctions", "Enumerable");
export const InitializeURIStorageFunctions: string[] = getCodeContent("upgradeableFunctions", "URIStorage");
//export const InitializeVotesFunctions: string[] = getCodeContent("upgradeableFunctions", "Votes");
export const InitializeOwnableFunctions: string[] = getCodeContent("upgradeableFunctions", "Ownable");
export const InitializeRolesFunctions: string[] = getCodeContent("upgradeableFunctions", "Roles");
export const InitializeRolesFunctions2: string[] = getCodeContent("upgradeableFunctions", "RolesRole");
export const InitializeManagedFunctions: string[] = getCodeContent("upgradeableFunctions", "Managed");
export const InitializeUUPSFunctions: string[] = getCodeContent("upgradeableFunctions", "UUPS");
export const MintableRoles: string[] = getCodeContent("upgradeableFunctions", "MintableRoles");
export const PausableRoles: string[] = getCodeContent("upgradeableFunctions", "PausableRoles");
export const RolesUUPS: string[] = getCodeContent("upgradeableFunctions", "RolesUUPS");
export const OwnableUUPS: string[] = getCodeContent("upgradeableFunctions", "OwnableUUPS");
export const ManagedUUPS: string[] = getCodeContent("upgradeableFunctions", "ManagedUUPS");
export const AutoIncrementFunc: string[] = getCodeContent("Functions", "AutoIncrementMintable");
export const URIStorageMint: string[] = getCodeContent("Functions", "URIStorageMintable");




   
  
export function GenerateERC721SCode(erc721sburnable: boolean, erc721svotes: boolean, erc721spausable: boolean, erc721sUriStorage: boolean, erc721sroles: boolean, erc721sownable: boolean, erc721smanaged: boolean, erc721senumerable: boolean, erc721transparent: boolean, erc721uups:boolean, erc721security:any, erc721upgradability: boolean, erc721autoincrement: boolean, erc721mintable: boolean, erc721sBaseUrl:any): string {

        const shouldRenderStarter = erc721spausable || erc721svotes || erc721sUriStorage || erc721senumerable;
        const shouldRenderUpdateFunction = erc721spausable || erc721svotes || erc721senumerable;
        const shouldRenderIncreaseBalanceFunction = erc721senumerable || erc721svotes;
        const shouldRenderSupportsInterface = erc721senumerable || erc721sUriStorage;

        //Recoil states for ERC721S
        const [name, setName] = useRecoilState(ERC721SName);
        const [license, setLicense] = useRecoilState(ERC721SLicense);
        const [securityContact, setSecurityContact] = useRecoilState(ERC721SSecurityContact);
        const [symbol, setSymbol] = useRecoilState(ERC721SSymbol);
        const [baseUrl, setBaseUrl] = useRecoilState(ERC721SBaseURI);
        const [contractName, setContractName] = useRecoilState(ERC721SName);

        const ContractHeader = [
            `contract ${contractName} is `
        ]
        const License = [
            `// SPDX-License-Identifier: ${license}`
        ]
        const UUPSFunctions = [
            `function _authorizeUpgrade(address newImplementation)
            internal
            ${erc721sownable? OwnableUUPS : ""}${erc721sroles? RolesUUPS : ""}${erc721smanaged? ManagedUUPS : ""}
            override
        {}`
        ]

        const VotesConstructor = [
            `EIP712("${name}", "1")`
        ]

        const InitializeVotesFunctions = [
            `__EIP712_init(${name}, "1");
            __ERC721Votes_init();`
        ]

        const Roles = [
            erc721mintable? MintableRoles : "" ,
            erc721spausable? '\t'+PausableRoles : "",
        ].join('\n\t\t').trim();
        const initializedStrings = [
            erc721senumerable? '\t'+InitializeEnumerableFunctions:"",
            erc721sUriStorage? InitializeURIStorageFunctions:"",
            erc721spausable? InitializePausableFunctions:"",
            erc721smanaged? InitializeManagedFunctions:"",
            erc721sroles? InitializeRolesFunctions:"",
            erc721svotes? InitializeVotesFunctions:"",
            erc721sownable? InitializeOwnableFunctions:"",
            erc721uups? InitializeUUPSFunctions:"",
            erc721sroles? InitializeRolesFunctions2:"",
            erc721sownable? Roles:"",  
        ].join('\n\t\t\t').trim();
        const TransparentFunction = [
            `  function initialize(address defaultAdmin, address pauser, address minter)
            initializer public
        {
            __ERC721_init(${name}, ${symbol});
            ${initializedStrings}
        }`
        ]
        const upgradableUpdateFunction = [
            `function _update(address to, uint256 tokenId, address auth)
            internal
            override(ERC721Upgradeable${erc721senumerable? UpgradableEnumerable : ""}${erc721spausable? UpgradablePausable : ""} ${erc721svotes? UpgradableVotes : ""})
            returns (address)
        {
            return super._update(to, tokenId, auth);
        }`
        ].join('').trim(); 

        const upgradableIncreaseBalanceFunction = [
            `function _increaseBalance(address account, uint128 value)
            internal
            override(ERC721Upgradeable${erc721senumerable? UpgradableEnumerable : ""}${erc721svotes? UpgradableVotes : ""})
        {
            super._increaseBalance(account, value);
        }`
        ].join('').trim(); 

        const upgradableTokenURIFunction = [
            ` function tokenURI(uint256 tokenId)
            public
            view
            override(ERC721Upgradeable${erc721sUriStorage? UpgradableURIStorage : ""})
            returns (string memory)
        {
            return super.tokenURI(tokenId);
        }`
        ].join('').trim(); 

        const upgradableSupportsInterface = [
            `function supportsInterface(bytes4 interfaceId)
            public
            view
            override(ERC721Upgradeable${erc721senumerable? UpgradableEnumerable : ""}${erc721sUriStorage? UpgradableURIStorage : ""})
            returns (bool)
        {
            return super.supportsInterface(interfaceId);
        }`
        ].join('').trim(); 

        const starter = [
            `// The following functions are overrides required by Solidity.`
        ].join('').trim(); 
        const updateFunction = [
            `function _update(address to, uint256 tokenId, address auth)
            internal
            override(ERC721${erc721senumerable? EnumerableContractName : ""} ${erc721spausable? PausableContractName : ""} ${erc721svotes? ', ERC721Votes' : ""})
            returns (address)
        {
            return super._update(to, tokenId, auth);
        }`
        ].join('').trim(); 

        const increaseBalanceFunction = [
            `function _increaseBalance(address account, uint128 value)
            internal
            override(ERC721${erc721senumerable? EnumerableContractName : ""} ${erc721svotes? ', ERC721Votes' : ""})
        {
            super._increaseBalance(account, value);
        }`
        ].join('').trim();

        const tokenURIFunction = [
            `function tokenURI(uint256 tokenId)
            public
            view
            override(ERC721${erc721sUriStorage? URIStorageContractName : ""})
            returns (string memory)
        {
            return super.tokenURI(tokenId);
        }`
        ].join('').trim();

        const SupportsInterface = [
            `function supportsInterface(bytes4 interfaceId)
            public
            view
            override(ERC721${erc721senumerable? EnumerableContractName : ""}${erc721sUriStorage? URIStorageContractName : ""})
            returns (bool)
        {
            return super.supportsInterface(interfaceId);
        }`
        ].join('').trim();
        
        const MintableFunctions = [
            `function safeMint(address to, string memory uri) public onlyOwner {
                ${erc721autoincrement? AutoIncrementFunc : ""}
                _safeMint(to, tokenId);
                ${erc721sUriStorage? URIStorageMint : ""}
            }`
        ]
        
        const upgradeableFunctions = [
            erc721upgradability? TransparentFunction : "",
            erc721mintable? MintableFunctions : "" , 
            erc721spausable? PausableFunctions : "",
            erc721sBaseUrl ? '\n\t\t'+(`function _baseURI() internal pure override returns (string memory) {
                return "${baseUrl}";
            }`) : "",
            erc721uups? '\n\n\t\t'+UUPSFunctions : "",
            shouldRenderStarter? '\n\t\t'+starter : "",
            shouldRenderUpdateFunction? '\n\t\t'+upgradableUpdateFunction : "",
            shouldRenderIncreaseBalanceFunction? '\n\t\t'+upgradableIncreaseBalanceFunction : "",
            shouldRenderSupportsInterface? '\n\t\t'+upgradableSupportsInterface : "",
            erc721sUriStorage? '\n\t\t'+upgradableTokenURIFunction : "",   
        ].join('').trim();


        const functions = [
             erc721mintable ? MintableFunctions : "" , 
             erc721spausable ? PausableFunctions : "",
             erc721sBaseUrl ? '\n\t\t'+(`function _baseURI() internal pure override returns (string memory) {
                return "${baseUrl}";
            }`) : "",
             shouldRenderStarter ? '\n\t\t' + starter : "",
             shouldRenderUpdateFunction ? '\n\t\t' + updateFunction : "",
             shouldRenderIncreaseBalanceFunction ? '\n\t\t' + increaseBalanceFunction : "",
             shouldRenderSupportsInterface ? '\n\t\t' + SupportsInterface : "",
             erc721sUriStorage ? '\n\t\t' + tokenURIFunction : "",
        ].join('\n').trim();   

        const upgradeableConstructor = [
              UpgradableConstructor
        ]
        const Roles2 = [
            erc721mintable? MintableRoles2 : "" ,
            erc721spausable? PausableRoles2 : ""
        ].join('\n\t\t').trim();
        const constructor = [
        `${erc721autoincrement ? AutoIncrementIds : ""}
        ${erc721mintable? MintableConstructor : ""} 
        constructor(${erc721smanaged?ManagedConstructor1:""}${erc721sownable?OwnableConstructor1:""}${erc721sroles?RolesConstructor1:""}) ERC721("${name}", "${symbol}") ${erc721svotes?VotesConstructor:""} ${erc721sownable?'\n\t\t'+OwnableConstructor2+'\n\t\t':''}${erc721smanaged?'\n\t\t'+ManagedConstructor2+'\n\t\t':''}{${erc721sroles?'\n\t\t'+RolesConstructor2+'\n\t\t':""}${erc721sroles?Roles2:""}}`
        ].join('\n').trim();

       const UpgradeableContract = [
            ContractHeader,
            UpgradabilityContractName,
            erc721sownable? UpgradableOwnable : "",
            erc721sroles? UpgradableRoles : "",
            erc721smanaged? UpgradableManaged : "",
            erc721sburnable? UpgradableBurnable : "",
            erc721spausable? UpgradablePausable : "",
            erc721svotes? UpgradableVotes : "",
            erc721sUriStorage? UpgradableURIStorage : "",
            erc721senumerable? UpgradableEnumerable : "",
            erc721uups? UpgradableUUPS : "",
            erc721transparent? UpgradableTransparent : "",
            " {"
       ].join('').trim();
  
       const contract = [
            ContractHeader,
            ContractNameDefault,
            erc721sownable? OwnableContractName : "",
            erc721sroles? RolesContractName : "",
            erc721smanaged? ManagedContractName : "",
            erc721sburnable? BurnableContractName : "",
            erc721spausable? PausableContractName : "",
            erc721svotes? VotesContractName : "",
            erc721sUriStorage? URIStorageContractName : "",
            erc721senumerable? EnumerableContractName : "",
            " {"
        ].join('').trim();
        const defaultImports = [
            DefaultImport,
            erc721sburnable ? '\n'+BurnableImport : "",
            erc721spausable ? '\n'+PausableImport : "",
            erc721sUriStorage ? '\n'+URIStorageImport : "",
            erc721senumerable ? '\n'+EnumerableImport : "",
            erc721svotes ? '\n'+VotesImport : "",
            erc721sownable ? '\n'+OwnableImport : "",
            erc721sroles ? '\n'+RolesImport : "",
            erc721smanaged ? '\n'+ManagedImport : "",
        ].join('').trim();
        const upgradableImports = [
            DefaultUpgradableImport,
            erc721sburnable ? '\n'+BurnableUpgradableImport : "",
            erc721spausable ? '\n'+PausableUpgradableImport : "",
            erc721sUriStorage ? '\n'+URIStorageUpgradableImport : "",
            erc721senumerable ? '\n'+EnumerableUpgradableImport : "",
            erc721svotes ? '\n'+VotesUpgradableImport : "",
            erc721sownable ? '\n'+OwnableUpgradableImport : "",
            erc721sroles ? '\n'+RolesUpgradableImport : "",
            erc721smanaged ? '\n'+ManagedUpgradableImport : "",
            erc721uups ? '\n'+UUPSUpgradableImport : "",
        ].join('').trim();

   
    const imports = [
        License,
        Compatibility,
        CodeVersion,
        erc721upgradability? upgradableImports+'\n': defaultImports+'\n',
        erc721security ? 
        `/// @custom:security-contact ${securityContact}` : "",

        erc721upgradability? UpgradeableContract: contract,
        erc721upgradability? upgradeableConstructor: '\t\t'+constructor,
        erc721upgradability? '\t\t'+upgradeableFunctions: '\t\t'+functions,
        
        "}"

    ].filter(Boolean); // This removes any empty strings from the array

    const result = imports.join('\n').trim();

    return result;

  }
  

