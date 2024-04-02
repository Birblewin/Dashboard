import { CustomCLicense, CustomCName} from "@/store/CustomC";


const name = CustomCName;
const license = CustomCLicense;



const CustomCCode =[
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
            section: "Variables",  
            tag: "Pausable",
            name: "PausableVariables", 
            content: `const PAUSER_ROLE: felt252 = selector!("PAUSER_ROLE");`
        },
        
        { 
            snippet_id: 1, 
            wizard_id: 2,
            contractType_id: 1, 
            section: "Variables",  
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
            content: `#[starknet::contract]`
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
            tag: "Pausable",
            name: "PausableImport", 
            content: `use openzeppelin::security::pausable::PausableComponent;`
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
            tag: "Upgradeable",
            name: "UpgradeableVariables", 
            content: `UPGRADER_ROLE`
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
    impl OwnableMixinImpl = OwnableComponent::OwnableMixinImpl<ContractState>;`
        },
        { 
            snippet_id: 1, 
            wizard_id: 2,
            contractType_id: 1, 
            section: "Embeds",  
            tag: "Roles",
            name: "RolesComponent", 
            content: `#[abi(embed_v0)]
    impl AccessControlMixinImpl = AccessControlComponent::AccessControlMixinImpl<ContractState>;`
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
    struct Storage {`
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
    enum Event {`
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
            content: `fn constructor(
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
            tag: "Upgradeable",
            name: "RolesComponent", 
            content: `self.accesscontrol._grant_role(UPGRADER_ROLE, upgrader);`
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
    }
`
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
    }
`
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
    
export default CustomCCode;
