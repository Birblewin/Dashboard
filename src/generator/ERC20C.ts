import { ERC20CCode } from "@/code/ERC20C";




interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC20CCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}


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
export const UpgradeableZeppelinImport: string[] = getCodeContent("ZeppelinImports", "Upgradeable");
export const BurnableStarknetImport: string[] = getCodeContent("StarknetImports", "Burnable");
export const UpgradeableStarknetImport: string[] = getCodeContent("StarknetImports", "Upgradeable");
export const AccessControlStarknetImport: string[] = getCodeContent("StarknetImports", "AccessControl");
export const SuperImports: string[] = getCodeContent("SuperImports", "Default");
export const PausableSuperImport: string[] = getCodeContent("SuperImports", "Pausable");
export const MintableSuperImport: string[] = getCodeContent("SuperImports", "Mintable");
export const UpgradeableSuperImport: string[] = getCodeContent("SuperImports", "Upgradeable");
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
export const RolesIMPL: string[] = getCodeContent("IMPLS", "Roles");
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
export const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
export const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
export const UpgradeableConstructor: string[] = getCodeContent("Constructor", "Upgradeable");
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


   
  
export function generateERC20CCode(erc20cburnable: boolean,erc20cmintable: boolean,  erc20cpausable: boolean,  erc20croles: boolean, erc20cownable: boolean,  erc20cupgradeable: boolean, erc20cpremint: string, erc20cname: string, erc20clicense: string, erc20csymbol: string): string {

  const License = `
  // SPDX-License-Identifier: ${erc20clicense}`;
  const ContractHeader = `mod ${erc20cname} {`;
  const PremintConstructor = `self.erc20._mint(recipient, ${erc20cpremint}000000000000000000);`;
  const ConstructorReturn = `self.erc20.initializer("${erc20cname}", "${erc20csymbol}");`


    const Variables = [
    erc20cpausable? "\n"+PausableVariable : "",
    !erc20cpausable && erc20cmintable? "\n":'',
    erc20cmintable? MintableVariable: "",
    !erc20cmintable && !erc20cpausable && erc20cupgradeable? "\n": '',
    erc20cupgradeable? UpgradeableVariable : "",
  ].filter(Boolean).join('\n');

  const  Zeppelin = [
    "\t"+StartZeppelinImport,
    erc20cpausable? "\t"+PausableZeppelinImport: "",
    erc20cownable ? "\t"+OwnableZeppelinImport: "",
    erc20croles? "\t"+RolesZeppelinImport: "",
    erc20cupgradeable? "\t"+UpgradeableZeppelinImport: "",
    erc20croles? "\t"+RolesZeppelinImport: "",
  ].filter(Boolean).join('\n'); 
  
  const  Starknet = [
    erc20cownable || erc20croles ? "\t"+AccessControlStarknetImport: "",
    erc20cburnable? "\t"+BurnableStarknetImport: "",
    erc20cupgradeable? "\t"+UpgradeableStarknetImport: ""
  ].filter(Boolean).join('\n'); 

  const  Superimport = [
    "\t"+SuperImports,
    erc20cpausable? PausableSuperImport: "",
    erc20cmintable && erc20cpausable? ", ": "",
    erc20cmintable ? MintableSuperImport: "",
    erc20cupgradeable && (erc20cmintable || erc20cpausable)? ", ": "",
    erc20cupgradeable? UpgradeableSuperImport: "",
    "}"
  ].filter(Boolean).join(''); 

  const  Components = [
    "\t"+Component,
    erc20cpausable? "\t"+PausableComponent: "",
    erc20cownable  ? "\t"+OwnableComponent: "",
    erc20croles ? "\t"+RolesComponent: "",
    erc20cupgradeable ? "\t"+UpgradeableComponent: ""
  ].filter(Boolean).join('\n'); 

  const  Embeds = [
    "\t"+Embed,
    erc20cpausable? "\t"+UnpausableEmbed: "",
    erc20cpausable? "\t"+PausableEmbed: "",
    erc20cownable  ? "\t"+OwnableEmbed: "",
    erc20croles ? "\t"+RolesEmbed: "",
    
  ].filter(Boolean).join('\n'); 

  const IMPLS = [
    "\t"+IMPL,
    erc20cpausable? "\t"+PausableIMPL : "",
    erc20cownable ? "\t"+OwnableIMPL: "",
    erc20croles ? "\t"+RolesIMPL: "",
    erc20cupgradeable? "\t"+UpgradeableIMPL : ""

  ].filter(Boolean).join('\n');

  console.log("ERC20CRoles", erc20croles);
  console.log("ERC20COwnable", erc20cownable);


  const Storages = [
    "\n"+"\t"+Storage,
    erc20cpausable? "\t"+"\t"+PausableStorage : "",
    erc20cownable? "\t"+"\t"+OwnableStorage: "",
    erc20croles ? "\t"+"\t"+RolesStorage: "",
    erc20cupgradeable? "\t"+"\t"+UpgradeableStorage : "",
    "\t"+"}"+"\n"
  ].filter(Boolean).join('\n');

  const Events = [
    "\t"+Event,
    erc20cpausable? "\t"+"\t"+PausableEvent : "",
    erc20cownable? "\t"+"\t"+OwnableEvent: "",
    erc20croles ? "\t"+"\t"+RolesEvent: "",
    erc20cupgradeable? "\t"+"\t"+UpgradeableEvent : "",
    "\t"+"}"
  ].filter(Boolean).join('\n');

  const  Constructors = [
    "\t"+Constructor,    
    erc20cownable ? "\t"+"\t"+OwnableConstructor: "",
    erc20croles? "\t"+"\t"+RolesConstructor: "",
    erc20cpremint? "\t"+"\t"+PremintConstructor: "",
    erc20cpausable && erc20croles? "\t"+"\t"+PausableConstructor: "",
    erc20cmintable && erc20croles ? "\t"+"\t"+MintableConstructor: "",
    erc20cupgradeable? "\t"+"\t"+UpgradeableConstructor: "",
    "\t"+"){"
  ].filter(Boolean).join('\n'); 

  const  ConstructorReturns = [
    "\t"+"\t"+ConstructorReturn,    
    erc20cownable ? "\t"+"\t"+OwnableConstructorReturns: "",
    erc20croles? "\t"+"\t"+RolesConstructorReturns: "",
    erc20cpausable && erc20croles? "\t"+"\t"+PausableConstructorReturns: "",
    erc20cmintable && erc20croles? "\t"+"\t"+MintableConstructorReturns: "",
    erc20cupgradeable && erc20croles? "\t"+"\t"+UpgradeableConstructorReturns: "",
    "\t"+"}"+"\n"
  ].filter(Boolean).join('\n'); 

  const ABIEmbeds = [
    erc20cownable? "\t"+OwnableABIEmbed: "",
    erc20croles? "\t"+RolesABIEmbed: ""
  ].filter(Boolean).join('\n');

  const Traits = [
    "\t"+Trait,
    erc20cpausable && erc20cownable ? "\t"+Pausable1Trait: "",
    erc20cpausable && erc20croles ? "\t"+Pausable2Trait: "",
    erc20cburnable? "\t"+BurnableTrait: "",
    erc20cmintable && erc20cownable ? "\t"+Mintable1Trait: "",
    erc20cmintable && erc20croles ? "\t"+Mintable2Trait: "",
    "\n"
  ].filter(Boolean).join('\n');

  const UpgradeableABIs = [
    erc20cownable? "\t"+OwnableUpgradeableABI: "",
    erc20cmintable? "\t"+OwnableUpgradeableABI: ""
  ].filter(Boolean).join('\n');


  const result =[
    License,
    Compatibility,
    Variables,
    "\n"+WizardTag,
    ContractHeader,
    Zeppelin,
    Starknet,
    (erc20cmintable || erc20cpausable || erc20cupgradeable) && erc20croles?  Superimport: "",
    "\n"+Components,
    "\n"+Embeds,
    "\n"+IMPLS,
    Storages,
    Events,
    Constructors,
    ConstructorReturns,
    erc20cpausable? ABIEmbeds: "",
    erc20cburnable|| erc20cmintable || erc20cpausable || erc20cupgradeable?  Traits: "",
    erc20cupgradeable? UpgradeableABIs : "",
    "}"
  ].filter(Boolean).join('\n').trim(); 

    return `${result}`;
  }
  

