import { CustomSCode } from "@/code/CustomS";





interface CodeSection {
    section: string;
    tag?: string;
}
const getCodeContent = (section: string, tag?: string): string[] => {
  return CustomSCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

export const License: string[] = getCodeContent("license");
export const Compatibility: string[] = getCodeContent("compatibility");
export const CodeVersion: string[] = getCodeContent("codeVersion");
export const PausableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Pausable");
export const OwnableUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Ownable");
export const RolesUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Roles");
export const ManagedUpgradeableImport: string[] = getCodeContent("upgradeableImports", "Managed");
export const EndUpgradeableImport: string[] = getCodeContent("upgradeableImports", "DefaultEnd");
export const UUPSUpgradeableImport: string[] = getCodeContent("upgradeableImports", "UUPS");
export const PausableImport: string[] = getCodeContent("Imports", "Pausable");
export const OwnableImport: string[] = getCodeContent("Imports", "Ownable");
export const RolesImport: string[] = getCodeContent("Imports", "Roles");
export const ManagedImport: string[] = getCodeContent("Imports", "Managed");
export const SecurityContact: string[] = getCodeContent("SecurityContact");
export const ContractHeader: string[] = getCodeContent("ContractHeader");
export const UpgradeableContractStart :  string[] = getCodeContent("UpgradeableContractStart");
export const ContractStart :  string[] = getCodeContent("ContractStart");
export const ContractName: string[] = getCodeContent("ContractNames", "Default");
export const OwnableContractName: string[] = getCodeContent("ContractNames", "Ownable");
export const RolesContractName: string[] = getCodeContent("ContractNames", "Roles");
export const ManagedContractName: string[] = getCodeContent("ContractNames", "Managed");
export const PausableContractName: string[] = getCodeContent("ContractNames", "Pausable");
export const OwnableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Ownable");
export const RolesUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Roles");
export const ManagedUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Managed");
export const PausableUpgradeableContractName: string[] = getCodeContent("upgradeableContractNames", "Pausable");
export const UUPSContractName: string[] = getCodeContent("upgradeableContractNames", "UUPS");
export const PausableRolesByte: string[] = getCodeContent("RolesByte", "Pausable");
export const UUPSRolesByte: string[] = getCodeContent("RolesByte", "UUPS");
export const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
export const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
export const ManagedConstructor: string[] = getCodeContent("Constructor", "Managed");
export const UpgradeableConstructor: string[] = getCodeContent("upgradeableConstructor");
export const PausableSection2: string[] = getCodeContent("Section2", "Pausable");
export const UUPSSection3: string[] = getCodeContent("Section3", "Pausable");
export const VotesSection3: string[] = getCodeContent("Section3", "Votes");
export const TransparentSection1: string[] = getCodeContent("upgradeableFunctions", "Transparent");
export const UUPSSection1: string[] = getCodeContent("upgradeableFunctions", "UUPS");


   
  
export function generateCustomSCode(customsupgradeable: boolean,customspausable: boolean, customsroles : boolean, customsownable : boolean, customsmanaged : boolean, customsupgradeability : boolean, customsUUPS : boolean, customssecuritycontact : string): string {
    const upgradeableImports = [
    customspausable? PausableUpgradeableImport: "",
    customsownable? OwnableUpgradeableImport: "",
    customsroles? RolesUpgradeableImport: "",
    customsmanaged? ManagedUpgradeableImport: "",
    EndUpgradeableImport,
    customsUUPS? UUPSUpgradeableImport: ""
    
  ].filter(Boolean).join('\n').trim();

  const Imports = [
    customspausable? PausableImport: "",
    customsownable? OwnableImport: "",
    customsroles? RolesImport: "",
    customsmanaged? ManagedImport: "",
    
 
  ].filter(Boolean).join('\n').trim(); 

  const upgradeableContractnames = [
    customsmanaged || customsownable || customsroles || customspausable ? UpgradeableContractStart: "",
    customsownable? OwnableUpgradeableContractName : "",
    customsroles ?RolesUpgradeableContractName : "",
    customsmanaged ?ManagedUpgradeableContractName : "",
    customspausable ?PausableUpgradeableContractName : "",
    
  ].filter(Boolean).join(',').trim();

  const contractnames = [
    customsmanaged || customsownable || customsroles || customspausable ? ContractStart: "",
    customsownable? OwnableContractName : "",
    customsroles ?RolesContractName : "",
    customsmanaged ?ManagedContractName : "",
    customspausable ?PausableContractName : "",
    
  ].filter(Boolean).join(',').trim();



  const contract = [
    ContractHeader,
    !customsupgradeable? ContractName : "",
    customsupgradeable ?  upgradeableContractnames: "",
    !customsupgradeable ? contractnames : "",
    customsupgradeable ?  upgradeableContractnames : "",
    " {"
  ].filter(Boolean).join("").trim();



  

  const result =[
    License,
    Compatibility,
    CodeVersion,
    customsupgradeability? Imports: "",
    !customsupgradeability? upgradeableImports: "",
    "  ",
    contract,
    customspausable && customsroles ? PausableRolesByte: "",
    customsUUPS && customsroles ? UUPSRolesByte: "",
    customsupgradeability ? TransparentSection1 : "",
    customsUUPS? UUPSSection1 : "",
    customspausable? PausableSection2 : "",
    customsupgradeability ? UUPSSection3 : "",
   "}"
  ].filter(Boolean).join('\n').trim();

    return `
     ${result}
  `;
  }
  

