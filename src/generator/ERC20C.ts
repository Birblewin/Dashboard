import { ERC20CCode } from "@/code/ERC20C";




interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC20CCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

export const License: string[] = getCodeContent("license");
export const Compatibility: string[] = getCodeContent("compatibility");
export const PausableVariable: string[] = getCodeContent("Variables", "Pausable");
export const MintableVariable: string[] = getCodeContent("Variables", "Mintable");
export const UpgradeableVariable: string[] = getCodeContent("Variables", "Upgradeable");
export const WizardTag: string[] = getCodeContent("WizardTag");
export const StartZeppelinImport: string[] = getCodeContent("ZeppelinImports", "DefaultStart");
export const BurnableZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Burnable");
export const PausableZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Pausable");
export const OwnableZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Ownable");
export const RolesZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Roles");
export const ManagedZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Managed");
export const UpgradeableZeppelinImport: string[] = getCodeContent("ZeppelimImports", "Upgradeable");
export const BurnableStarknetImport: string[] = getCodeContent("StarknetImports", "Burnable");
export const UpgradeableStarknetImport: string[] = getCodeContent("StarknetImports", "Upgradeable");
export const AccessControlStarknetImport: string[] = getCodeContent("StarknetImports", "AccessControl");
export const SuperImport: string[] = getCodeContent("SuperImports", "Default");
export const PausableSuperImport: string[] = getCodeContent("SuperImports", "Pausable");
export const MintableSuperImport: string[] = getCodeContent("SuperImports", "Min\table");
export const UpgradeableSuperImport: string[] = getCodeContent("SuperImports", "Upgradeable");
export const ContractHeader: string[] = getCodeContent("ContractHeader");
export const Component: string[] = getCodeContent("Components", "Default");
export const PausableComponent: string[] = getCodeContent("Components", "Pausable");
export const OwnableComponent: string[] = getCodeContent("Components", "Ownable");
export const RolesComponent: string[] = getCodeContent("Components", "Roles");
export const UpgradeableComponent: string[] = getCodeContent("Components", "Upgradeable");
export const Embed: string[] = getCodeContent("Embeds", "Default");
export const UnpausableEmbed: string[] = getCodeContent("Embeds", "Default2");
export const PausableEmbed: string[] = getCodeContent("Embeds", "Pausable");
export const OwnableEmbed: string[] = getCodeContent("Embeds", "Ownable");
export const RolesEmbed: string[] = getCodeContent("Embeds", "Roles");
export const IMPL: string[] = getCodeContent("IMPLS", "Default");
export const PausableIMPL: string[] = getCodeContent("IMPLS", "Pausable");
export const OwnableIMPL: string[] = getCodeContent("IMPLS", "Ownable");
export const RolesIMPL: string[] = getCodeContent("Components", "Roles");
export const UpgradeableIMPL: string[] = getCodeContent("IMPLS", "Upgradeable");
export const Storage: string[] = getCodeContent("Storage", "Default");
export const PausableStorage: string[] = getCodeContent("Storage", "Pausable");
export const OwnableStorage: string[] = getCodeContent("Storage", "Ownable");
export const RolesStorage: string[] = getCodeContent("Storage", "Roles");
export const UpgradeableStorage: string[] = getCodeContent("Storage", "Upgradeable");
export const Event: string[] = getCodeContent("Events", "Default");
export const OwnableEvent: string[] = getCodeContent("Events", "Ownable");
export const RolesEvent: string[] = getCodeContent("Events", "Roles");
export const PausableEvent: string[] = getCodeContent("Events", "Pausable");
export const UpgradeableEvent: string[] = getCodeContent("Events", "Upgradeable");
export const Constructor: string[] = getCodeContent("Constructor", "Default");
export const PausableConstructor: string[] = getCodeContent("Constructor", "Pausable");
export const MintableConstructor: string[] = getCodeContent("Constructor", "Mintable");
export const PremintConstructor: string[] = getCodeContent("Constructor", "Premint");
export const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
export const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
export const UpgradeableConstructor: string[] = getCodeContent("Constructor", "Upgradeable");
export const ConstructorReturn: string[] = getCodeContent("ConstructorReturns", "Default");
export const OwnableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Ownable");
export const RolesConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Roles");
export const PausableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Pausable");
export const MintableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Mintable");
export const UpgradeableConstructorReturns: string[] = getCodeContent("ConstructorReturns", "Upgradeable");
export const OwnableABIEmbed: string[] = getCodeContent("ABIEmbed", "Ownable");
export const RolesABIEmbed: string[] = getCodeContent("ABIEmbed", "Roles");
export const Trait: string[] = getCodeContent("Traits", "Default");
export const Pausable1Trait: string[] = getCodeContent("Traits", "Pausable1");
export const Pausable2Trait: string[] = getCodeContent("Traits", "Pausable2");
export const BurnableTrait: string[] = getCodeContent("Traits", "Burnable");
export const Mintable1Trait: string[] = getCodeContent("Traits", "Mintable1");
export const Mintable2Trait: string[] = getCodeContent("Traits", "Mintable2");
export const OwnableUpgradeableABI: string[] = getCodeContent("UpgradeableABI", "Ownable");
export const RolesUpgradeableABI: string[] = getCodeContent("UpgradeableABI", "Roles");


   
  
export function generateERC20CCode(erc20cburnable: boolean,erc20cmintable: boolean,  erc20cpausable: boolean,  erc20croles: boolean, erc20cownable: boolean,  erc20cupgradeable: boolean, erc20cpremint: string): string {
    const Variables = [
    erc20cpausable? PausableVariable : "",
    erc20cmintable? MintableVariable: "",
    erc20cupgradeable? UpgradeableVariable : ""
    
  ].filter(Boolean).join('\n').trim();

  const  Zeppelin = [
    StartZeppelinImport,
    erc20cburnable? BurnableZeppelinImport: "",
    erc20cpausable? PausableZeppelinImport: "",
    erc20cownable ? OwnableZeppelinImport: "",
    erc20croles? RolesZeppelinImport: "",
    erc20cupgradeable? UpgradeableZeppelinImport: ""
  ].filter(Boolean).join('\n').trim(); 
  
  const  Starknet = [
    erc20cburnable? BurnableStarknetImport: "",
    erc20cownable || erc20cownable || erc20cpremint ? AccessControlStarknetImport: "",
    erc20croles? RolesZeppelinImport: "",
    erc20cupgradeable? UpgradeableStarknetImport: ""
  ].filter(Boolean).join('\n').trim(); 

  const  Superimport = [
    erc20cpausable? PausableSuperImport: "",
    erc20cmintable ? MintableSuperImport: "",
    erc20cupgradeable? UpgradeableSuperImport: ""
  ].filter(Boolean).join('\n').trim(); 

  const  Components = [
    Component,
    erc20cpausable? PausableComponent: "",
    erc20cownable  ? OwnableZeppelinImport: "",
    erc20croles ? RolesZeppelinImport: "",
    erc20cupgradeable ? UpgradeableComponent: ""
  ].filter(Boolean).join('\n').trim(); 

  const  Embeds = [
    Embed,
    !erc20cpausable? UnpausableEmbed: "",
    erc20cpausable? PausableEmbed: "",
    erc20cownable  ? OwnableEmbed: "",
    erc20croles ? RolesEmbed: "",
    
  ].filter(Boolean).join('\n').trim(); 

  const IMPLS = [
    IMPL,
    erc20cpausable? PausableIMPL : "",
    erc20cownable? OwnableIMPL: "",
    erc20croles ? RolesIMPL: "",
    erc20cupgradeable? UpgradeableIMPL : ""

  ].filter(Boolean).join('\n').trim();


  const Storages = [
    Storage,
    erc20cpausable? PausableStorage : "",
    erc20cownable? OwnableStorage: "",
    erc20croles ? RolesStorage: "",
    erc20cupgradeable? UpgradeableStorage : "",
    "}"
  ].filter(Boolean).join('\n').trim();

  const Events = [
    Event,
    erc20cpausable? PausableEvent : "",
    erc20cownable? OwnableEvent: "",
    erc20croles ? RolesEvent: "",
    erc20cupgradeable? UpgradeableEvent : "",
    "}"
  ].filter(Boolean).join('\n').trim();

  const  Constructors = [
    Constructor,    
    erc20cownable ? OwnableConstructor: "",
    erc20croles? RolesConstructor: "",
    erc20cpremint? PremintConstructor: "",
    erc20cpausable && erc20croles? PausableConstructor: "",
    erc20cmintable && erc20croles ? MintableConstructor: "",
    erc20cupgradeable? UpgradeableConstructor: "",
    "){"
  ].filter(Boolean).join('\n').trim(); 

  const  ConstructorReturns = [
    ConstructorReturn,    
    erc20cownable ? OwnableConstructorReturns: "",
    erc20croles? RolesConstructorReturns: "",
    erc20cpausable && erc20croles? PausableConstructorReturns: "",
    erc20cmintable && erc20croles? MintableConstructorReturns: "",
    erc20cupgradeable && erc20croles? UpgradeableConstructorReturns: "",
    "){"
  ].filter(Boolean).join('\n').trim(); 

  const ABIEmbeds = [
    erc20cownable? OwnableABIEmbed: "",
    erc20croles? RolesABIEmbed: ""
  ].filter(Boolean).join('\n').trim();

  const Traits = [
    Trait,
    erc20cpausable && erc20cownable ? Pausable1Trait: "",
    erc20cpausable && erc20croles ? Pausable2Trait: "",
    erc20cburnable? BurnableTrait: "",
    erc20cmintable && erc20cownable ? Mintable1Trait: "",
    erc20cmintable && erc20croles ? Mintable2Trait: "",
    "}"
  ].filter(Boolean).join('\n').trim();

  const UpgradeableABIs = [
    erc20cownable? OwnableUpgradeableABI: "",
    erc20cmintable? OwnableUpgradeableABI: ""
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
    erc20cpausable? ABIEmbeds: "",
    erc20cburnable|| erc20cmintable || erc20cpausable || erc20cpremint?  Traits: "",
    erc20cupgradeable? UpgradeableABIs : ""
   
  ].filter(Boolean).join('\n'); 

    return `
     ${result}
  `;
  }
  

