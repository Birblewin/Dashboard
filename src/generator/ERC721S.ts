
import { ERC721SCode } from '@/code/ERC721S';
import { ERC721SLicense, ERC721SName, ERC721SSecurityContact } from '@/store/ERC721S';




interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC721SCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

export const License: string[] = getCodeContent("license");
export const Compatibility: string[] = getCodeContent("compatibility");
export const CodeVersion: string[] = getCodeContent("codeVersion");
export const StartUpgradeableImport: string[] = getCodeContent("upgradeableImports", "DefaultStart");
export const BurnableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Burnable");
export const PausableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Pausable");
export const EnumerableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Enumerable");
export const URIStorageUpgradeableImport: string[] = getCodeContent("upgradeableImports", "URIStorage");
export const VotesUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Votes");
export const OwnableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Ownable");
export const RolesUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Roles");
export const ManagedUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Managed");
export const TransparentUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Transparent");
export const UUPSUpgradeableImport: string[] = getCodeContent("upgradeableImports", "UUPS");


//.............................
export const SecurityContact: string[] = getCodeContent("SecurityContact");
export const ContractHeader: string[] = getCodeContent("ContractHeader");
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
export const DefaultConstructor: string[] = getCodeContent("Constructor", "Default");
export const AutoIncrementIds: string[] = getCodeContent("Constructor", "AutoIncrement");
export const VotesConstructor: string[] = getCodeContent("Constructor", "Votes");
export const OwnableConstructor1: string[] = getCodeContent("Constructor", "Ownable1");
export const OwnableConstructor2: string[] = getCodeContent("Constructor", "Ownable2");
export const RolesConstructor1: string[] = getCodeContent("Constructor", "Roles1");
export const RolesConstructor2: string[] = getCodeContent("Constructor", "Roles2");
export const ManagedConstructor1: string[] = getCodeContent("Constructor", "Managed1");
export const ManagedConstructor2: string[] = getCodeContent("Constructor", "Managed2");
export const UpgradableConstructor: string[] = getCodeContent("Constructor", "Upgradable");



//.............................................
export const MintableFunctions: string[] = getCodeContent("Functions", "Mintable");
export const PausableFunctions: string[] = getCodeContent("Functions", "Pausable");
export const UUPSFunctions: string[] = getCodeContent("Functions", "UUPS");
export const TransparentFunctions: string[] = getCodeContent("Functions", "Transparent");
// export const ManagedUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Managed");
// export const BurnableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Burnable");
// export const PermitUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Permit");
// export const VotesUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Votes");
// export const PausableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Pausable");
// export const FlashMintUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "flashMinting");
// export const RolesByte: string[] = getCodeContent("RolesByte");
// export const PermitConstructor: string[] = getCodeContent("Constructor", "Permit");
// export const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
// export const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
// export const ManagedConstructor: string[] = getCodeContent("Constructor", "Managed");
// export const UpgradeableConstructor: string[] = getCodeContent("upgradeableConstructor");
// export const MintableSection2: string[] = getCodeContent("Section2", "Mintable");
// export const PausableSection2: string[] = getCodeContent("Section2", "Pausable");
// export const UUPSSection2: string[] = getCodeContent("Section2", "UUPS");
// export const PausableSection3: string[] = getCodeContent("Section3", "Pausable");
// export const VotesSection3: string[] = getCodeContent("Section3", "Votes");
// export const Section1: string[] = getCodeContent("upgradeableFunctions", "Default");
// export const OwnableSection1: string[] = getCodeContent("upgradeableFunctions", "Ownable");
// export const RolesSection1: string[] = getCodeContent("upgradeableFunctions", "Roles");
// export const ManagedSection1: string[] = getCodeContent("upgradeableFunctions", "Managed");
// export const BurnableSection1: string[] = getCodeContent("upgradeableFunctions", "Burnable");
// export const PausableSection1: string[] = getCodeContent("upgradeableFunctions", "Pausable");
// export const PermitSection1: string[] = getCodeContent("upgradeableFunctions", "Permit");
// export const VotesSection1: string[] = getCodeContent("upgradeableFunctions", "Votes");
// export const FlashMintingSection1: string[] = getCodeContent("upgradeableFunctions", "flashMinting");


   
  
export function generateERC721SCode(erc721sburnable: boolean, erc721svotes: boolean, erc721spausable: boolean, erc721sUriStorage: boolean, erc721sroles: boolean, erc721sownable: boolean, erc721smanaged: boolean, erc721senumerable: boolean, erc721transparent: boolean, erc721uups:boolean, erc721security:any, erc721upgradability: boolean, erc721autoincrement: boolean, erc721mintable: boolean): string {
         
        const upgradeableFunctions = [
            erc721uups? UUPSFunctions : "",
            erc721transparent? TransparentFunctions : "",
        ]
        const functions = [
             erc721mintable? MintableFunctions : "" , 
             erc721spausable? PausableFunctions : "",

        ].join('\n').trim();   

        const upgradeableConstructor = [
              UpgradableConstructor
        ]
        const constructor = [
        `${erc721autoincrement ? AutoIncrementIds : ""} 
        constructor(${erc721smanaged?ManagedConstructor1:""}${erc721sownable?OwnableConstructor1:""}${erc721sroles?RolesConstructor1:""}) ERC721("${ERC721SName}", "${ERC721SLicense}") ${erc721svotes?VotesConstructor:""} ${erc721sownable?'\n\t\t'+OwnableConstructor2+'\n\t\t':''}${erc721smanaged?'\n\t\t'+ManagedConstructor2+'\n\t\t':''}{${erc721sroles?'\n\t\t'+RolesConstructor2+'\n\t\t':""}}`
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

    const includeStartUpgradeableImport = !erc721transparent && !erc721uups;
    const imports = [
        License,
        Compatibility,
        CodeVersion,
        erc721sburnable ? BurnableUpgradeableImport : "",
        erc721spausable ? PausableUpgradeableImport : "",
        erc721sUriStorage ? URIStorageUpgradeableImport : "",
        erc721senumerable ? EnumerableUpgradeableImport : "",
        erc721svotes ? VotesUpgradeableImport : "",
        erc721sownable ? OwnableUpgradeableImport : "",
        erc721sroles ? RolesUpgradeableImport : "",
        erc721smanaged ? ManagedUpgradeableImport : "",
        includeStartUpgradeableImport ? StartUpgradeableImport : "",
        erc721transparent ? TransparentUpgradeableImport : "",
        erc721uups ? UUPSUpgradeableImport : "",

        erc721security ? `
/// @custom:security-contact ${ERC721SSecurityContact}` : "",

        erc721upgradability? UpgradeableContract: contract,
        erc721upgradability? upgradeableConstructor: '\t\t'+constructor,
        erc721upgradability? '\t\t'+upgradeableFunctions: '\t\t'+functions,
        
        "}"

    ].filter(Boolean); // This removes any empty strings from the array

    const result = imports.join('\n').trim();

    return result;

  }
  

