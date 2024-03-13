import { CustomSCode } from "@/code/CustomS";





interface CodeSection {
    section: string;
    tag?: string;
}
const getCodeContent = (section: string, tag?: string): string[] => {
  return CustomSCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}


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
export const UUPSSection3: string[] = getCodeContent("Section3", "UUPS");
export const VotesSection3: string[] = getCodeContent("Section3", "Votes");
export const TransparentSection1: string[] = getCodeContent("upgradeableFunctions", "Transparent");
export const UUPSSection1: string[] = getCodeContent("upgradeableFunctions", "UUPS");


   
  
export function generateCustomSCode(customsupgradeable: boolean,customspausable: boolean, customsroles : boolean, customsownable : boolean, customsmanaged : boolean, customsupgradeability : boolean, customsUUPS : boolean, customssecuritycontact : string, customsname: string, customslicense: string): string {

  const License = `
  // SPDX-License-Identifier: ${customslicense}`;
  const SecurityContact = `/// @custom:security-contact ${customssecuritycontact}`;
  const ContractHeader = `contract ${customsname}`;
      


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
    UpgradeableContractStart,
    customsownable? ",": "",
    customsownable? OwnableUpgradeableContractName : "",
    customsroles? ",": "",
    customsroles ?RolesUpgradeableContractName : "",
    customsmanaged? ",": "",
    customsmanaged ?ManagedUpgradeableContractName : "",
    customspausable? ",": "",
    customspausable ?PausableUpgradeableContractName : "",
    
  ].filter(Boolean).join('').trim();

  const contractnames = [
    ContractStart ,
    customsownable? " ": "",
    customsownable? OwnableContractName : "",
    customsroles && customsownable? ",": " ",
    customsroles ?RolesContractName : "",
    customsmanaged && (customsroles || customsownable)? ",": "",
    customsmanaged ?ManagedContractName : "",
    customspausable? ",": "",
    customspausable ?PausableContractName : "",
    
  ].filter(Boolean).join('');



  const contract = [
    ContractHeader,
    !customsupgradeability? ContractName : "",
    customsupgradeability ?  upgradeableContractnames: "",
    !customsupgradeability ? contractnames : "",
    customsupgradeability ?  upgradeableContractnames : "",
    " {"
  ].filter(Boolean).join("").trim();



  

  const result =[
    License,
    Compatibility,
    CodeVersion,
    !customsupgradeability? Imports: "",
    customsupgradeability? upgradeableImports: "",
    "  ",
    customssecuritycontact? SecurityContact : "",
    contract,
    customspausable && customsroles ? "\t" + PausableRolesByte: "",
    customsUUPS && customsroles ? "\t"+UUPSRolesByte: "",
    customsupgradeability ? "\t"+TransparentSection1 : "",
    customsUUPS? "\t"+UUPSSection1 : "",
    customspausable? "\t"+PausableSection2 : "",
    customsupgradeability ? "\t"+UUPSSection3 : "",
   "}"
  ].filter(Boolean).join('\n');

    return `
     ${result}
  `;
  }
  

