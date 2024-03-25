import { ERC721CCode } from "@/code/ERC721C";
import {ERC721CBaseURI, ERC721CLicense, ERC721CName,ERC721CSymbol,  } from "@/store/ERC721C";
import { useRecoilState } from "recoil";

interface CodeSection {
    section: string;
    tag?: string;
}

const getCodeContent = (section: string, tag?: string): string[] => {
    return ERC721CCode.filter((code: CodeSection) => code.section === section && (!tag || code.tag === tag)).map(filteredCode => filteredCode.content);
}

export const PausableConst: string[] = getCodeContent("Const", "Pausable");
export const MintableConst: string[] = getCodeContent("Const", "Mintable");
export const UpgradableConst: string[] = getCodeContent("Const", "Upgradeable");


export const OwnableImport: string[] = getCodeContent("Imports", "Ownable");
export const RolesImport: string[] = getCodeContent("Imports", "Roles");
export const BurnableImport: string[] = getCodeContent("Imports", "Burnable");
export const PausableImport: string[] = getCodeContent("Imports", "Pausable");
export const UpgradableImport: string[] = getCodeContent("Imports", "Upgradeable");


export const OwnableComponent: string[] = getCodeContent("Component", "Ownable");
export const RolesComponent: string[] = getCodeContent("Component", "Roles");
export const PausableComponent: string[] = getCodeContent("Component", "Pausable");
export const UpgradableComponent: string[] = getCodeContent("Component", "Upgradeable");


export const OwnableEmbedBefore: string[] = getCodeContent("EmbedBefore", "Ownable");
export const RolesEmbedBefore: string[] = getCodeContent("EmbedBefore", "Roles");
export const PausableEmbedBefore: string[] = getCodeContent("EmbedBefore", "Pausable");


export const OwnableEmbedAfter: string[] = getCodeContent("EmbedAfter", "Ownable");
export const RolesEmbedAfter: string[] = getCodeContent("EmbedAfter", "Roles");
export const PausableEmbedAfter: string[] = getCodeContent("EmbedAfter", "Pausable");
export const UpgradableEmbedAfter: string[] = getCodeContent("EmbedAfter", "Upgradeable");


export const OwnableStorage: string[] = getCodeContent("Storage", "Ownable");
export const RolesStorage: string[] = getCodeContent("Storage", "Roles");
export const PausableStorage: string[] = getCodeContent("Storage", "Pausable");
export const UpgradableStorage: string[] = getCodeContent("Storage", "Upgradeable");


export const OwnableEvents: string[] = getCodeContent("Events", "Ownable");
export const RolesEvents: string[] = getCodeContent("Events", "Roles");
export const PausableEvents: string[] = getCodeContent("Events", "Pausable");
export const UpgradableEvents: string[] = getCodeContent("Events", "Upgradeable");


export const UpgradableFunctions: string[] = getCodeContent("Functions", "Upgradeable");
export const PausableFunctions: string[] = getCodeContent("Functions", "Pausable");
export const Pausable2Functions: string[] = getCodeContent("Functions", "Pausable2");
export const MintableFunctions: string[] = getCodeContent("Functions", "Mintable");
export const BurnableFunctions: string[] = getCodeContent("Functions", "Burnable");



export const OwnableConstructor: string[] = getCodeContent("Constructor", "Ownable");
export const RolesConstructor: string[] = getCodeContent("Constructor", "Roles");
export const PausableConstructor: string[] = getCodeContent("Constructor", "Pausable");
export const UpgradableConstructor: string[] = getCodeContent("Constructor", "Upgradeable");
export const MintableConstructor: string[] = getCodeContent("Constructor", "Mintable");


export const OwnableConstructorInit: string[] = getCodeContent("ConstructorInit", "Ownable");
export const RolesConstructorInit: string[] = getCodeContent("ConstructorInit", "Roles");
export const PausableConstructorInit: string[] = getCodeContent("ConstructorInit", "Pausable");
export const UpgradableConstructorInit: string[] = getCodeContent("ConstructorInit", "Upgradeable");
export const MintableConstructorInit: string[] = getCodeContent("ConstructorInit", "Mintable");


export function GenerateERC721CCode(erc721cburnable: boolean, erc721cpausable: boolean, erc721croles: boolean, erc721cownable: boolean, erc721cupgradable: boolean, erc721cmintable: boolean): string {

    const [license, setLicense] = useRecoilState(ERC721CLicense);
    const [name, setName] = useRecoilState(ERC721CName);
    const [symbol, setSymbol] = useRecoilState(ERC721CSymbol);
    const [BaseURI, setBaseURI] = useRecoilState(ERC721CBaseURI);

    const RolesImport2 = [
        `use super::{${erc721cpausable?"PAUSER_ROLE":""}, ${erc721cmintable?"MINTER_ROLE":""}, ${erc721cupgradable?"UPGRADER_ROLE":""}};`
    ]
    const Imports = [
        erc721cownable? "\n"+OwnableImport:"",
        erc721croles? "\n"+RolesImport:"",
        erc721cburnable? "\n\t"+BurnableImport:"",
        erc721cpausable? "\n"+PausableImport:"",
        erc721cupgradable? "\n"+UpgradableImport:"",
        erc721croles? "\n\t"+RolesImport2:""
    ].join("").trim();
    const Components = [
        erc721cownable? "\n"+OwnableComponent:"",
        erc721croles? "\n"+RolesComponent:"",
        erc721cpausable? "\n\t"+PausableComponent:"",
        erc721cupgradable? "\n\t"+UpgradableComponent:""
    ].join("").trim();

    const BeforeEmbed = [
        erc721cownable? "\n"+OwnableEmbedBefore:"",
        erc721croles? "\n"+RolesEmbedBefore:"",
        erc721cpausable? "\n\t"+PausableEmbedBefore:"",
    ].join("").trim();
    const AfterEmbed = [
        erc721cownable? "\n"+OwnableEmbedAfter:"",
        erc721croles? "\n"+RolesEmbedAfter:"",
        erc721cpausable? "\n\t"+PausableEmbedAfter:"",
        erc721cupgradable? "\n\t"+UpgradableEmbedAfter:""
    ].join("").trim();
    const storage = [
        erc721cownable? "\n\t"+OwnableStorage:"",
        erc721croles? "\n\t"+RolesStorage:"",
        erc721cpausable? "\n\t"+PausableStorage:"",
        erc721cupgradable? "\n\t"+UpgradableStorage:""
    ].join("").trim();
    const events = [
        erc721cownable? "\n\t"+OwnableEvents:"",
        erc721croles? "\n\t"+RolesEvents:"",
        erc721cpausable? "\n\t"+PausableEvents:"",
        erc721cupgradable? "\n\t"+UpgradableEvents:""
    ].join("").trim();
    const Functions = [
        `#[generate_trait]`,
        erc721cmintable? "\n\t"+MintableFunctions:"",
        erc721cburnable? "\n\t"+BurnableFunctions:"",
        erc721cpausable? "\n\t"+Pausable2Functions:"",
        erc721cupgradable? "\n\t"+UpgradableFunctions:"",
    ].join("").trim();
    const Methods = [
        erc721cpausable? "\n\t"+PausableFunctions:"",
    ].join("").trim();
    const Roles = [
        erc721cpausable? "\n\t"+PausableConstructor+',':"",
        erc721cupgradable? "\n\t"+UpgradableConstructor+',':"",
        erc721cmintable? "\n\t"+MintableConstructor:"",
    ].join("").trim();

    const Const = [
        erc721cpausable? PausableConst:'',
        erc721cupgradable? UpgradableConst:'',
        erc721cmintable? MintableConst:''
    ].join("\n").trim();
    const pausable = [
    `#[abi(embed_v0)]
    impl ERC721Impl = ERC721Component::ERC721Impl<ContractState>;
    #[abi(embed_v0)]
    impl ERC721CamelOnly = ERC721Component::ERC721CamelOnlyImpl<ContractState>;
    #[abi(embed_v0)]`
    ]
    
    const RolesInit = [
        erc721cpausable? "\n\t"+PausableConstructorInit:'',
        erc721cupgradable? "\n\t\t"+UpgradableConstructorInit:'',
        erc721cmintable? "\n\t\t"+MintableConstructorInit:'',
    ].join("").trim();
    const snippet = [
`// SPDX-License-Identifier: ${license}
// Compatible with OpenZeppelin Contracts for Cairo ^0.10.0
   ${erc721croles? '\n'+Const+'\n':""}
#[starknet::contract]
mod MyToken {
    use openzeppelin::token::erc721::ERC721Component;
    use openzeppelin::introspection::src5::SRC5Component;
    ${Imports}

    component!(path: ERC721Component, storage: erc721, event: ERC721Event);
    component!(path: SRC5Component, storage: src5, event: SRC5Event);
    ${Components}

    #[abi(embed_v0)]
    impl ERC721MetadataImpl = ERC721Component::ERC721MetadataImpl<ContractState>;
    #[abi(embed_v0)]
    impl ERC721MetadataCamelOnly = ERC721Component::ERC721MetadataCamelOnlyImpl<ContractState>;
    ${!erc721cpausable? pausable:""}
    impl SRC5Impl = SRC5Component::SRC5Impl<ContractState>;
    ${BeforeEmbed}

    impl ERC721InternalImpl = ERC721Component::InternalImpl<ContractState>;
    ${AfterEmbed}

    #[storage]
    struct Storage {
        #[substorage(v0)]
        erc721: ERC721Component::Storage,
        #[substorage(v0)]
        src5: SRC5Component::Storage,
        ${storage}
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ERC721Event: ERC721Component::Event,
        #[flat]
        SRC5Event: SRC5Component::Event,
        ${events}
    }

    #[constructor]
    fn constructor(ref self: ContractState${erc721cownable? OwnableConstructor:""}${erc721croles?RolesConstructor+',':""}${erc721croles?'\n\t'+Roles:""}) {
        self.erc721.initializer("${name}", "${symbol}", "${BaseURI}");
        ${erc721cownable? OwnableConstructorInit:''}${erc721croles? RolesConstructorInit:""}
        ${erc721croles? RolesInit:""}
    }
    ${Methods}
    ${Functions}
}
`
    ]
    return snippet.join("\n")
}