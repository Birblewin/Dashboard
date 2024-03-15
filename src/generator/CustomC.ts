import CustomCCode from "@/code/CustomC";





interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return CustomCCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

 const License: string[] = getCodeContent("license");
 const Compatibility: string[] = getCodeContent("compatibility");
const PausableVariable: string[] = getCodeContent("Variables", "Pausable");
const UpgradeableVariable: string[] = getCodeContent("Variables", "Upgradeable");
const WizardTag: string[] = getCodeContent("WizardTag");
const PausableZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Pausable");
const OwnableZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Ownable");
const RolesZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Roles");
const UpgradeableZeppelinImport: string[] = getCodeContent("ZeppelimImports", "Upgradeable");
const UpgradeableStarknetImport: string[] = getCodeContent("StarknetImports", "Upgradeable");
const AccessControlStarknetImport: string[] = getCodeContent("StarknetImports", "AccessControl");
const SuperImport: string[] = getCodeContent("SuperImports", "Default");
 const PausableSuperImport: string[] = getCodeContent("SuperImports", "Pausable");
 const UpgradeableSuperImport: string[] = getCodeContent("SuperImports", "Upgradeable");
 const ContractHeader: string[] = getCodeContent("ContractHeader");
 const Component: string[] = getCodeContent("Components", "Default");
 const PausableComponent: string[] = getCodeContent("Components", "Pausable");
 const UpgradeableComponent: string[] = getCodeContent("Components", "Upgradeable");
 const PausableEmbed: string[] = getCodeContent("Embeds", "Pausable");
 const OwnableEmbed: string[] = getCodeContent("Embeds", "Ownable");
 const RolesEmbed: string[] = getCodeContent("Embeds", "Roles");
 const PausableIMPL: string[] = getCodeContent("IMPLS", "Pausable");
 const OwnableIMPL: string[] = getCodeContent("IMPLS", "Ownable");
 const RolesIMPL: string[] = getCodeContent("Components", "Roles");
 const UpgradeableIMPL: string[] = getCodeContent("IMPLS", "Upgradeable");
 const Storage: string[] = getCodeContent("Storage", "Default");
 const PausableStorage: string[] = getCodeContent("Storage", "Pausable");
 const OwnableStorage: string[] = getCodeContent("Storage", "Ownable");
 const RolesStorage: string[] = getCodeContent("Storage", "Roles");
 const UpgradeableStorage: string[] = getCodeContent("Storage", "Upgradeable");
 const Event: string[] = getCodeContent("Events", "Default");
 const OwnableEvent: string[] = getCodeContent("Events", "Ownable");
 const RolesEvent: string[] = getCodeContent("Events", "Roles");
 const PausableEvent: string[] = getCodeContent("Events", "Pausable");
 const UpgradeableEvent: string[] = getCodeContent("Events", "Upgradeable");
 const Constructor: string[] = getCodeContent("Constructor", "Default");
 const PausableConstructor: string[] = getCodeContent("Constructor", "Pausable");
 const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
 const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
 const UpgradeableConstructor: string[] = getCodeContent("Constructor", "Upgradeable");
 const ConstructorReturn: string[] = getCodeContent("ConstructorReturns", "Default");
 const OwnableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Ownable");
 const RolesConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Roles");
 const PausableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Pausable");
 const UpgradeableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Upgradeable");
 const Pausable1Trait: string[] = getCodeContent("Traits", "Pausable1");
 const Pausable2Trait: string[] = getCodeContent("Traits", "Pausable2");
 const OwnableUpgradeableABI: string[] = getCodeContent("UpgradeableABI", "Ownable");
 const RolesUpgradeableABI: string[] = getCodeContent("UpgradeableABI", "Roles");


   
  
export function generateCustomCCode(customcupgradeable: boolean,customcpausable: boolean, customcroles: boolean, customcownable: boolean,  customcupgradeability: boolean, customcUUPS: boolean, customcname : string, customclicense: string): string {
  const License = `
  // SPDX-License-Identifier: ${customclicense}`;
  const ContractHeader = `mod ${customcname} {`;
      
  const Variables = [
    customcpausable? PausableVariable : "",
    customcupgradeable? UpgradeableVariable : "",
    "\n"
  ].filter(Boolean).join('\n');

  const  Zeppelin = [
    
    customcpausable? "\t"+PausableZeppelinImport: "",
    customcownable ? "\t"+OwnableZeppelinImport: "",
    customcroles? "\t"+RolesZeppelinImport: "",
    customcupgradeable? "\t"+UpgradeableZeppelinImport: ""
  ].filter(Boolean).join('\n'); 
  
  const  Starknet = [
    
    customcownable || customcroles  ? "\t"+AccessControlStarknetImport: "",
    customcupgradeable? "\t"+UpgradeableStarknetImport: ""
  ].filter(Boolean).join('\n'); 

  const  Superimport = [
    SuperImport,
    customcpausable? PausableSuperImport: "",
    customcupgradeable? ", ": "",
    customcupgradeable? UpgradeableSuperImport: "",
    "}"
  ].filter(Boolean).join(''); 

  const  Components = [
    "\t"+Component,
    customcpausable? "\t"+PausableComponent: "",
    customcownable  ? "\t"+OwnableZeppelinImport: "",
    customcroles ? "\t"+RolesZeppelinImport: "",
    customcupgradeable ? "\t"+UpgradeableComponent: ""
  ].filter(Boolean).join('\n'); 

  const  Embeds = [
    customcpausable? "\t"+PausableEmbed: "",
    customcownable  ? "\t"+OwnableEmbed: "",
    customcroles ? "\t"+RolesEmbed: "",
    
  ].filter(Boolean).join('\n'); 

  const IMPLS = [
    customcpausable? "\t"+PausableIMPL : "",
    customcownable? "\t"+OwnableIMPL: "",
    customcroles ? "\t"+RolesIMPL: "",
    customcupgradeable? "\t"+UpgradeableIMPL : ""

  ].filter(Boolean).join('\n');


  const Storages = [
    "\n"+"\t"+Storage,
    customcpausable? "\t"+"\t"+PausableStorage : "",
    customcownable? "\t"+"\t"+OwnableStorage: "",
    customcroles ? "\t"+"\t"+RolesStorage: "",
    customcupgradeable? "\t"+"\t"+UpgradeableStorage : "",
    "\t"+"}"+"\n"
  ].filter(Boolean).join('\n');

  const Events = [
    Event,
    customcpausable? "\t"+"\t"+PausableEvent : "",
    customcownable? "\t"+"\t"+OwnableEvent: "",
    customcroles ? "\t"+"\t"+RolesEvent: "",
    customcupgradeable? "\t"+"\t"+UpgradeableEvent : "",
    "\t"+"}"+"\n"
  ].filter(Boolean).join('\n');

  const  Constructors = [
    "\t"+Constructor,    
    customcownable ? "\t"+"\t"+OwnableConstructor: "",
    customcroles? "\t"+"\t"+RolesConstructor: "",
    customcpausable && customcroles? "\t"+"\t"+PausableConstructor: "",
    customcupgradeable? "\t"+"\t"+UpgradeableConstructor: "",
    "\t"+"\t"+"){"
  ].filter(Boolean).join('\n'); 

  const  ConstructorReturns = [
    "\t"+ConstructorReturn,    
    customcownable ? "\t"+"\t"+OwnableConstructorReturns: "",
    customcroles? "\t"+"\t"+RolesConstructorReturns: "",
    customcpausable && customcroles? "\t"+"\t"+PausableConstructorReturns: "",
    customcupgradeable && customcroles? "\t"+"\t"+UpgradeableConstructorReturns: "",
    "\t"+"}"+"\n"
  ].filter(Boolean).join('\n'); 

  
  const Traits = [
    customcpausable && customcownable ? "\t"+Pausable1Trait: "",
    customcpausable && customcroles ? "\t"+Pausable2Trait: "",
  ].filter(Boolean).join('\n');

  const UpgradeableABIs = [
    customcownable? "\t"+OwnableUpgradeableABI: "",
    customcroles? "\t"+RolesUpgradeableABI: ""
  ].filter(Boolean).join('\n');


  const result =[
    License,
    Compatibility,
    Variables,
    WizardTag,
    ContractHeader,
    Zeppelin,
    Starknet,
    "\t"+Superimport,
    Components,
    Embeds,
    IMPLS,
    Storages,
    Events,
    Constructors,
    ConstructorReturns,
    customcpausable ?  Traits: "",
    customcupgradeable? UpgradeableABIs : "",
    "}"
  ].filter(Boolean).join('\n'); 

    return `
     ${result}
  `;
  }
  

