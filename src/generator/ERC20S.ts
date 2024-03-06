
import {ERC20SCode} from '../code/ERC20S';



interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC20SCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

export const License: string[] = getCodeContent("license");
export const Compatibility: string[] = getCodeContent("compatibility");
export const CodeVersion: string[] = getCodeContent("codeVersion");
export const StartUpgradeableImport: string[] = getCodeContent("upgradeableImports", "DefaultStart");
export const BurnableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Burnable");
export const PausableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Pausable");
export const FlashMintingUpgradeableImport: string[] = getCodeContent("upgradeableImports", "flashMinting");
export const PermitUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Permit");
export const VotesUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Votes");
export const OwnableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Ownable");
export const RolesUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Roles");
export const ManagedUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Managed");
export const EndUpgradeableImport: string[] = getCodeContent("upgradeableImports", "DefaultEnd");
export const UUPSUpgradeableImport: string[] = getCodeContent("upgradeableImports", "UUPS");
export const Import: string[] = getCodeContent("Imports", "Default");
export const BurnableImport: string[] = getCodeContent("Imports", "Burnable");
export const PausableImport: string[] = getCodeContent("Imports", "Pausable");
export const FlashMintingImport: string[] = getCodeContent("Imports", "flashMinting");
export const PermitImport: string[] = getCodeContent("Imports", "Permit");
export const VotesImport: string[] = getCodeContent("Imports", "Votes");
export const OwnableImport: string[] = getCodeContent("Imports", "Ownable");
export const RolesImport: string[] = getCodeContent("Imports", "Roles");
export const ManagedImport: string[] = getCodeContent("Imports", "Managed");
export const SecurityContact: string[] = getCodeContent("SecurityContact");
export const ContractHeader: string[] = getCodeContent("ContractHeader");
export const ContractName: string[] = getCodeContent("ContractNames", "Default");
export const OwnableContractName: string[] = getCodeContent("ContractNames", "Ownable");
export const RolesContractName: string[] = getCodeContent("ContractNames", "Roles");
export const ManagedContractName: string[] = getCodeContent("ContractNames", "Managed");
export const BurnableContractName: string[] = getCodeContent("ContractNames", "Burnable");
export const PausableContractName: string[] = getCodeContent("ContractNames", "Pausable");
export const VotesContractName: string[] = getCodeContent("ContractNames", "Votes");
export const PermitContractName: string[] = getCodeContent("ContractNames", "Permit");
export const FlashMintContractName: string[] = getCodeContent("ContractNames", "flashMinting");
export const UpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Default");
export const OwnableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Ownable");
export const RolesUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Roles");
export const ManagedUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Managed");
export const BurnableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Burnable");
export const PermitUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Permit");
export const VotesUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Votes");
export const PausableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Pausable");
export const FlashMintUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "flashMinting");
export const RolesByte: string[] = getCodeContent("RolesByte");
export const PermitConstructor: string[] = getCodeContent("Constructor", "Permit");
export const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
export const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
export const ManagedConstructor: string[] = getCodeContent("Constructor", "Managed");
export const UpgradeableConstructor: string[] = getCodeContent("upgradeableConstructor");
export const MintableSection2: string[] = getCodeContent("Section2", "Mintable");
export const PausableSection2: string[] = getCodeContent("Section2", "Pausable");
export const UUPSSection2: string[] = getCodeContent("Section2", "UUPS");
export const PausableSection3: string[] = getCodeContent("Section3", "Pausable");
export const VotesSection3: string[] = getCodeContent("Section3", "Votes");
export const Section1: string[] = getCodeContent("upgradeableFunctions", "Default");
export const OwnableSection1: string[] = getCodeContent("upgradeableFunctions", "Ownable");
export const RolesSection1: string[] = getCodeContent("upgradeableFunctions", "Roles");
export const ManagedSection1: string[] = getCodeContent("upgradeableFunctions", "Managed");
export const BurnableSection1: string[] = getCodeContent("upgradeableFunctions", "Burnable");
export const PausableSection1: string[] = getCodeContent("upgradeableFunctions", "Pausable");
export const PermitSection1: string[] = getCodeContent("upgradeableFunctions", "Permit");
export const VotesSection1: string[] = getCodeContent("upgradeableFunctions", "Votes");
export const FlashMintingSection1: string[] = getCodeContent("upgradeableFunctions", "flashMinting");


   
  
export function generateERC20SCode(erc20sburnable: boolean, erc20svotes: boolean, erc20spausable: boolean, erc20sflashMinting: boolean, erc20sroles: boolean, erc20sownable: boolean, erc20smanaged: boolean, erc20spremint: string, erc20supgradeable: boolean, erc20sUUPS: boolean ): string {
    const upgradeableImports = `
    ${StartUpgradeableImport}
    ${erc20sburnable ? BurnableUpgradeableImport : ""}
    ${erc20spausable ? PausableUpgradeableImport : ""}
    ${erc20sflashMinting ? FlashMintingUpgradeableImport : ""}
    ${erc20spremint ? PermitUpgradeableImport : ""}
    ${erc20svotes ? VotesUpgradeableImport : ""}
    ${erc20sownable ? OwnableUpgradeableImport : ""}
    ${erc20sroles ? RolesUpgradeableImport : ""}
    ${erc20smanaged ? ManagedUpgradeableImport : ""}
    ${EndUpgradeableImport}
    ${erc20sUUPS ? UUPSUpgradeableImport : ""}
  
  `
  const Imports = `
    
  ${erc20sburnable ? BurnableImport : ""}
  ${erc20spausable ? PausableImport : ""}
  ${erc20sflashMinting ? FlashMintingImport : ""}
  ${erc20spremint ? PermitImport : ""}
  ${erc20svotes ? VotesImport : ""}
  ${erc20sownable ? OwnableImport : ""}
  ${erc20sroles ? RolesImport : ""}
  ${erc20smanaged ? ManagedImport : ""}

    
  `
    return `
    ${License}
    ${Compatibility}
    ${CodeVersion}
    ${!erc20supgradeable ? Imports : ""}
    ${erc20supgradeable ? upgradeableImports : ""}
  
  
  `;
  }
  

