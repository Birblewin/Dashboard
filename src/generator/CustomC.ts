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


   
  
export function generateCustomCCode(customcupgradeable: boolean,customcpausable: boolean, customcroles: boolean, customcownable: boolean,  customcupgradeability: boolean, customcUUPS: boolean): string {
    const Variables = [
    customcpausable? PausableVariable : "",
    customcupgradeable? UpgradeableVariable : ""
    
  ].filter(Boolean).join('\n').trim();

  const  Zeppelin = [
    
    customcpausable? PausableZeppelinImport: "",
    customcownable ? OwnableZeppelinImport: "",
    customcroles? RolesZeppelinImport: "",
    customcupgradeable? UpgradeableZeppelinImport: ""
  ].filter(Boolean).join('\n').trim(); 
  
  const  Starknet = [
    
    customcownable || customcroles  ? AccessControlStarknetImport: "",
    customcupgradeable? UpgradeableStarknetImport: ""
  ].filter(Boolean).join('\n').trim(); 

  const  Superimport = [
    SuperImport,
    customcpausable? PausableSuperImport: "",
    
    customcupgradeable? UpgradeableSuperImport: ""
  ].filter(Boolean).join('\n').trim(); 

  const  Components = [
    Component,
    customcpausable? PausableComponent: "",
    customcownable  ? OwnableZeppelinImport: "",
    customcroles ? RolesZeppelinImport: "",
    customcupgradeable ? UpgradeableComponent: ""
  ].filter(Boolean).join('\n').trim(); 

  const  Embeds = [
    customcpausable? PausableEmbed: "",
    customcownable  ? OwnableEmbed: "",
    customcroles ? RolesEmbed: "",
    
  ].filter(Boolean).join('\n').trim(); 

  const IMPLS = [
    customcpausable? PausableIMPL : "",
    customcownable? OwnableIMPL: "",
    customcroles ? RolesIMPL: "",
    customcupgradeable? UpgradeableIMPL : ""

  ].filter(Boolean).join('\n').trim();


  const Storages = [
    Storage,
    customcpausable? PausableStorage : "",
    customcownable? OwnableStorage: "",
    customcroles ? RolesStorage: "",
    customcupgradeable? UpgradeableStorage : "",
    "}"
  ].filter(Boolean).join('\n').trim();

  const Events = [
    Event,
    customcpausable? PausableEvent : "",
    customcownable? OwnableEvent: "",
    customcroles ? RolesEvent: "",
    customcupgradeable? UpgradeableEvent : "",
    "}"
  ].filter(Boolean).join('\n').trim();

  const  Constructors = [
    Constructor,    
    customcownable ? OwnableConstructor: "",
    customcroles? RolesConstructor: "",
    customcpausable && customcroles? PausableConstructor: "",
    customcupgradeable? UpgradeableConstructor: "",
    "){"
  ].filter(Boolean).join('\n').trim(); 

  const  ConstructorReturns = [
    ConstructorReturn,    
    customcownable ? OwnableConstructorReturns: "",
    customcroles? RolesConstructorReturns: "",
    customcpausable && customcroles? PausableConstructorReturns: "",
    customcupgradeable && customcroles? UpgradeableConstructorReturns: "",
    "}"
  ].filter(Boolean).join('\n').trim(); 

  
  const Traits = [
    customcpausable && customcownable ? Pausable1Trait: "",
    customcpausable && customcroles ? Pausable2Trait: "",
  ].filter(Boolean).join('\n').trim();

  const UpgradeableABIs = [
    customcownable? OwnableUpgradeableABI: "",
    customcroles? RolesUpgradeableABI: ""
  ].filter(Boolean).join('\n').trim();


  const result =[
    License,
    Compatibility,
    Variables,
    WizardTag,
    ContractHeader,
    Zeppelin,
    Starknet,
    Superimport,
    Components,
    Embeds,
    IMPLS,
    Storages,
    Events,
    Constructors,
    ConstructorReturns,
    customcpausable ?  Traits: "",
    customcupgradeable? UpgradeableABIs : ""
   
  ].filter(Boolean).join('\n'); 

    return `
     ${result}
  `;
  }
  

