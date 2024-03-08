import {  ERC20CLicense, ERC20CName, ERC20CPremint, ERC20CSymbol} from "@/store/ERC20C";
import { getRecoil } from "recoil-nexus";

const name = ERC20CName;
const license = ERC20CLicense;
const premint = ERC20CPremint;
const symbol = ERC20CSymbol;



export const ERC20CCode =[
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "license",  
        tag: "Default",
        name: "ERC20DefaultLicense", 
        content:`// SPDX-License-Identifier: ${license}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "compatibility",  
        tag: "Default",
        name: "ERC20Compatibility", 
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "RolesVariables",  
        tag: "Pausable",
        name: "PausableVariables", 
        content: `const PAUSER_ROLE: felt252 = selector!("PAUSER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "RolesVariables",  
        tag: "Minatable",
        name: "MinatbleVariables", 
        content: `const MINTER_ROLE: felt252 = selector!("MINTER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "RolesVariables",  
        tag: "Upgradeable",
        name: "UpgradeableVariables", 
        content: `const UPGRADER_ROLE: felt252 = selector!("UPGRADER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "WizardTag",  
        tag: "Default",
        name: "WizardTag", 
        content: `#[starknet::contract]
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ContractHeader",  
        tag: "Default",
        name: "ContractHeader", 
        content: `mod ${name} {`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ZeppelinImports",  
        tag: "Default",
        name: "DefaultImport", 
        content: `use openzeppelin::token::erc20::ERC20Component;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ZeppelinImports",  
        tag: "Burnable",
        name: "BurnableImport", 
        content: `use starknet::get_caller_address; `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ZeppelinImports",  
        tag: "Pausable",
        name: "PausableImport", 
        content: `use openzeppelin::token::erc20::interface;
        use openzeppelin::security::pausable::PausableComponent;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ZeppelinImports",  
        tag: "Ownable",
        name: "OwnableImports", 
        content: `use openzeppelin::access::ownable::OwnableComponent;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ZeppelinImports",  
        tag: "Roles",
        name: "RolesImport", 
        content: `use openzeppelin::access::accesscontrol::AccessControlComponent;
        use openzeppelin::introspection::src5::SRC5Component;
        use openzeppelin::access::accesscontrol::DEFAULT_ADMIN_ROLE;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ZeppelinImports",  
        tag: "Upgradeable",
        name: "UpgradeableImport", 
        content: `use openzeppelin::upgrades::UpgradeableComponent;
        use openzeppelin::upgrades::interface::IUpgradeable;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "StarknetImports",  
        tag: "Burnable",
        name: "BurnableImport", 
        content: `use starknet::get_caller_address;       `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "StarknetImports",  
        tag: "AccessControl",
        name: "AccessControlImport", 
        content: `use starknet::ContractAddress;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "StarknetImports",  
        tag: "Upgradeable",
        name: "UpgradeableImport", 
        content: `use starknet::ClassHash;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "SuperImports",  
        tag: "Default",
        name: "UpgradeableVariables", 
        content: `use super::{`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "SuperImports",  
        tag: "Pausable",
        name: "UpgradeableVariables", 
        content: `PAUSER_ROLE `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "SuperImports",  
        tag: "Mintable",
        name: "UpgradeableVariables", 
        content: `MINTER_ROLE `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "SuperImports",  
        tag: "Upgradeable",
        name: "UpgradeableVariables", 
        content: `UPGRADER_ROLE`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Components",  
        tag: "Default",
        name: "UpgradeableVariables", 
        content: `component!(path: ERC20Component, storage: erc20, event: ERC20Event);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Components",  
        tag: "Pausable",
        name: "UpgradeableVariables", 
        content: `component!(path: PausableComponent, storage: pausable, event: PausableEvent);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Components",  
        tag: "Ownable",
        name: "UpgradeableVariables", 
        content: `component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Components",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `component!(path: AccessControlComponent, storage: accesscontrol, event: AccessControlEvent);
        component!(path: SRC5Component, storage: src5, event: SRC5Event);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Components",  
        tag: "Upgradeable",
        name: "RolesComponent", 
        content: `component!(path: UpgradeableComponent, storage: upgradeable, event: UpgradeableEvent);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Embeds",  
        tag: "Default",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl ERC20MetadataImpl =ERC20Component::ERC20MetadataImpl<ContractState>;
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Embeds",  
        tag: "Default2",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl ERC20Impl = ERC20Component::ERC20Impl<ContractState>;
        #[abi(embed_v0)]
        impl ERC20CamelOnlyImpl = ERC20Component::ERC20CamelOnlyImpl<ContractState>;
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Embeds",  
        tag: "Pausable",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl PausableImpl = PausableComponent::PausableImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Embeds",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
        #[abi(embed_v0)]
        impl OwnableCamelOnlyImpl = OwnableComponent::OwnableCamelOnlyImpl<ContractState>;
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Embeds",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl AccessControlImpl = AccessControlComponent::AccessControlImpl<ContractState>;
        #[abi(embed_v0)]
        impl AccessControlCamelImpl = AccessControlComponent::AccessControlCamelImpl<ContractState>;
        #[abi(embed_v0)]
        impl SRC5Impl = SRC5Component::SRC5Impl<ContractState>;
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "IMPLS",  
        tag: "Default",
        name: "RolesComponent", 
        content: `impl ERC20InternalImpl = ERC20Component::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "IMPLS",  
        tag: "Pausable",
        name: "RolesComponent", 
        content: `impl PausableInternalImpl = PausableComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "IMPLS",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "IMPLS",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `impl AccessControlInternalImpl = AccessControlComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "IMPLS",  
        tag: "Upgradeable",
        name: "RolesComponent", 
        content: `impl UpgradeableInternalImpl = UpgradeableComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Default",
        name: "RolesComponent", 
        content: `#[storage]
        struct Storage {
            #[substorage(v0)]
            erc20: ERC20Component::Storage,
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Pausable",
        name: "RolesComponent", 
        content: `#[substorage(v0)]
        pausable: PausableComponent::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `#[substorage(v0)]
        ownable: OwnableComponent::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `#[substorage(v0)]
        accesscontrol: AccessControlComponent::Storage,
        #[substorage(v0)]
        src5: SRC5Component::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Upgradeable",
        name: "RolesComponent", 
        content: `#[substorage(v0)]
        upgradeable: UpgradeableComponent::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Events",  
        tag: "Default",
        name: "RolesComponent", 
        content: `    #[event]
        #[derive(Drop, starknet::Event)]
        enum Event {
            #[flat]
            ERC20Event: ERC20Component::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Events",  
        tag: "Pausable",
        name: "RolesComponent", 
        content: `#[flat]
        PausableEvent: PausableComponent::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Events",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `#[flat]
        OwnableEvent: OwnableComponent::Event,
        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Events",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `#[flat]
        AccessControlEvent: AccessControlComponent::Event,
        
        #[flat]
        SRC5Event: SRC5Component::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Events",  
        tag: "Upgradeable",
        name: "RolesComponent", 
        content: `#[flat]
        UpgradeableEvent: UpgradeableComponent::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Default",
        name: "RolesComponent", 
        content: ` fn constructor(
            ref self: ContractState`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Pausable",
        name: "RolesComponent", 
        content: `pauser: ContractAddress,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Mintable",
        name: "RolesComponent", 
        content: `minter: ContractAddress,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Premint",
        name: "RolesComponent", 
        content: `self.erc20._mint(recipient, ${premint}000000000000000000);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `owner: ContractAddress`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `default_admin: ContractAddress`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Upgradeable",
        name: "RolesComponent", 
        content: `upgrader: ContractAddress,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ConstructorReturns",  
        tag: "Default",
        name: "RolesComponent", 
        content: `self.erc20.initializer(${name}, ${symbol});`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ConstructorReturns",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `self.ownable.initializer(owner);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ConstructorReturns",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `self.accesscontrol.initializer();

        self.accesscontrol._grant_role(DEFAULT_ADMIN_ROLE, default_admin);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ConstructorReturns",  
        tag: "Pausable",
        name: "RolesComponent", 
        content: `self.accesscontrol._grant_role(PAUSER_ROLE, pauser);        `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ConstructorReturns",  
        tag: "Mintable",
        name: "RolesComponent", 
        content: `self.accesscontrol._grant_role(MINTER_ROLE, minter);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ConstructorReturns",  
        tag: "Upgradeable",
        name: "RolesComponent", 
        content: `self.accesscontrol._grant_role(UPGRADER_ROLE, upgrader);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ABIEmbed",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl ERC20Impl of interface::IERC20<ContractState> {
            fn total_supply(self: @ContractState) -> u256 {
                self.erc20.total_supply()
            }
    
            fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
                self.erc20.balance_of(account)
            }
    
            fn allowance(self: @ContractState, owner: ContractAddress, spender: ContractAddress) -> u256 {
                self.erc20.allowance(owner, spender)
            }
    
            fn transfer(ref self: ContractState, recipient: ContractAddress, amount: u256) -> bool {
                self.pausable.assert_not_paused();
                self.erc20.transfer(recipient, amount)
            }
    
            fn transfer_from(
                ref self: ContractState,
                sender: ContractAddress,
                recipient: ContractAddress,
                amount: u256,
            ) -> bool {
                self.pausable.assert_not_paused();
                self.erc20.transfer_from(sender, recipient, amount)
            }
    
            fn approve(ref self: ContractState, spender: ContractAddress, amount: u256) -> bool {
                self.pausable.assert_not_paused();
                self.erc20.approve(spender, amount)
            }
        }
    
        #[abi(embed_v0)]
        impl ERC20CamelOnlyImpl of interface::IERC20CamelOnly<ContractState> {
            fn totalSupply(self: @ContractState) -> u256 {
                self.total_supply()
            }
    
            fn balanceOf(self: @ContractState, account: ContractAddress) -> u256 {
                self.balance_of(account)
            }
    
            fn transferFrom(
                ref self: ContractState,
                sender: ContractAddress,
                recipient: ContractAddress,
                amount: u256,
            ) -> bool {
                self.pausable.assert_not_paused();
                self.transfer_from(sender, recipient, amount)
            }
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "ABIEmbed",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl ERC20Impl of interface::IERC20<ContractState> {
            fn total_supply(self: @ContractState) -> u256 {
                self.erc20.total_supply()
            }
    
            fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
                self.erc20.balance_of(account)
            }
    
            fn allowance(self: @ContractState, owner: ContractAddress, spender: ContractAddress) -> u256 {
                self.erc20.allowance(owner, spender)
            }
    
            fn transfer(ref self: ContractState, recipient: ContractAddress, amount: u256) -> bool {
                self.pausable.assert_not_paused();
                self.erc20.transfer(recipient, amount)
            }
    
            fn transfer_from(
                ref self: ContractState,
                sender: ContractAddress,
                recipient: ContractAddress,
                amount: u256,
            ) -> bool {
                self.pausable.assert_not_paused();
                self.erc20.transfer_from(sender, recipient, amount)
            }
    
            fn approve(ref self: ContractState, spender: ContractAddress, amount: u256) -> bool {
                self.pausable.assert_not_paused();
                self.erc20.approve(spender, amount)
            }
        }
    
        #[abi(embed_v0)]
        impl ERC20CamelOnlyImpl of interface::IERC20CamelOnly<ContractState> {
            fn totalSupply(self: @ContractState) -> u256 {
                self.total_supply()
            }
    
            fn balanceOf(self: @ContractState, account: ContractAddress) -> u256 {
                self.balance_of(account)
            }
    
            fn transferFrom(
                ref self: ContractState,
                sender: ContractAddress,
                recipient: ContractAddress,
                amount: u256,
            ) -> bool {
                self.pausable.assert_not_paused();
                self.transfer_from(sender, recipient, amount)
            }
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Traits",  
        tag: "Default",
        name: "RolesComponent", 
        content: `#[generate_trait]
        #[abi(per_item)]
        impl ExternalImpl of ExternalTrait `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Traits",  
        tag: "Pausable1",
        name: "RolesComponent", 
        content: `#[external(v0)]
        fn pause(ref self: ContractState) {
            self.ownable.assert_only_owner();
            self.pausable._pause();
        }

        #[external(v0)]
        fn unpause(ref self: ContractState) {
            self.ownable.assert_only_owner();
            self.pausable._unpause();
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Traits",  
        tag: "Pausable2",
        name: "RolesComponent", 
        content: `#[external(v0)]
        fn pause(ref self: ContractState) {
            self.accesscontrol.assert_only_role(PAUSER_ROLE);
            self.pausable._pause();
        }

        #[external(v0)]
        fn unpause(ref self: ContractState) {
            self.accesscontrol.assert_only_role(PAUSER_ROLE);
            self.pausable._unpause();
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Traits",  
        tag: "Burnable",
        name: "RolesComponent", 
        content: `#[external(v0)]
        fn burn(ref self: ContractState, value: u256) {
            self.pausable.assert_not_paused();
            let caller = get_caller_address();
            self.erc20._burn(caller, value);
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Traits",  
        tag: "Mintable1",
        name: "RolesComponent", 
        content: `#[external(v0)]
        fn mint(ref self: ContractState, recipient: ContractAddress, amount: u256) {
            self.ownable.assert_only_owner();
            self.pausable.assert_not_paused();
            self.erc20._mint(recipient, amount);
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "Traits",  
        tag: "Mintable2",
        name: "RolesComponent", 
        content: `#[external(v0)]
        fn mint(ref self: ContractState, recipient: ContractAddress, amount: u256) {
            self.accesscontrol.assert_only_role(MINTER_ROLE);
            self.pausable.assert_not_paused();
            self.erc20._mint(recipient, amount);
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "UpgradeableABI",  
        tag: "Ownable",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl UpgradeableImpl of IUpgradeable<ContractState> {
            fn upgrade(ref self: ContractState, new_class_hash: ClassHash) {
                self.ownable.assert_only_owner();
                self.upgradeable._upgrade(new_class_hash);
            }
        }
    `
    },
    { 
        snippet_id: 1, 
        wizard_id: 2,
        contractType_id: 1, 
        section: "UpgradeableABI",  
        tag: "Roles",
        name: "RolesComponent", 
        content: `#[abi(embed_v0)]
        impl UpgradeableImpl of IUpgradeable<ContractState> {
            fn upgrade(ref self: ContractState, new_class_hash: ClassHash) {
                self.accesscontrol.assert_only_role(UPGRADER_ROLE);
                self.upgradeable._upgrade(new_class_hash);
            }
        }
    `
    }
]
