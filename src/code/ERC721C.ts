export const ERC721CCode = [
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Const",  
        tag: "Pausable",
        name: "ERC721CConstPausable", 
        content: `const PAUSER_ROLE: felt252 = selector!("PAUSER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Const",  
        tag: "Mintable",
        name: "ERC721CConstMintable", 
        content: `const MINTER_ROLE: felt252 = selector!("MINTER_ROLE");`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Const",  
        tag: "Upgradeable",
        name: "ERC721CConstUpgradeable", 
        content: `const UPGRADER_ROLE: felt252 = selector!("UPGRADER_ROLE");`
    },
    //........................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Ownable",
        name: "ERC721CImportsOwnable", 
        content: `use openzeppelin::access::ownable::OwnableComponent;
    use starknet::ContractAddress;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Roles",
        name: "ERC721CImportsRoles", 
        content: `use openzeppelin::access::accesscontrol::AccessControlComponent;
    use openzeppelin::access::accesscontrol::DEFAULT_ADMIN_ROLE;
    use starknet::ContractAddress;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Burnable",
        name: "ERC721CImportsBurnable", 
        content: `use starknet::get_caller_address;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Pausable",
        name: "ERC721CImportsPausable", 
        content: `    use openzeppelin::token::erc721::interface;
    use openzeppelin::security::pausable::PausableComponent;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Imports",  
        tag: "Upgradeable",
        name: "ERC721CImportsUpgradeable", 
        content: `    use openzeppelin::upgrades::UpgradeableComponent;
    use openzeppelin::upgrades::interface::IUpgradeable;
    use starknet::ClassHash;`
    },
    //.......................................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Component",  
        tag: "Ownable",
        name: "ERC721CComponentOwnable", 
        content: `component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Component",  
        tag: "Roles",
        name: "ERC721CComponentRoles",
        content: `component!(path: AccessControlComponent, storage: accesscontrol, event: AccessControlEvent);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Component",  
        tag: "Pausable",
        name: "ERC721CComponentPausable", 
        content: `component!(path: PausableComponent, storage: pausable, event: PausableEvent);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Component",  
        tag: "Upgradeable",
        name: "ERC721CComponentUpgradeable", 
        content: `component!(path: UpgradeableComponent, storage: upgradeable, event: UpgradeableEvent);`
    },
    // .......................................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedBefore",  
        tag: "Ownable",
        name: "ERC721CEmbedBeforeOwnable", 
        content: `#[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    #[abi(embed_v0)]
    impl OwnableCamelOnlyImpl = OwnableComponent::OwnableCamelOnlyImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedBefore",  
        tag: "Roles",
        name: "ERC721CEmbedBeforeRoles", 
        content: `#[abi(embed_v0)]
    impl AccessControlImpl = AccessControlComponent::AccessControlImpl<ContractState>;
    #[abi(embed_v0)]
    impl AccessControlCamelImpl = AccessControlComponent::AccessControlCamelImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedBefore",  
        tag: "Pausable",
        name: "ERC721CEmbedBeforePausable",
        content: `#[abi(embed_v0)]
    impl PausableImpl = PausableComponent::PausableImpl<ContractState>;`
    },
    //...............................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedAfter",  
        tag: "Ownable",
        name: "ERC721CEmbedAfterOwnable",
        content: `impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedAfter",  
        tag: "Roles",
        name: "ERC721CEmbedAfterRoles",
        content: `impl AccessControlInternalImpl = AccessControlComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedAfter",  
        tag: "Upgradeable",
        name: "ERC721CEmbedAfterUpgradable",
        content: `impl UpgradeableInternalImpl = UpgradeableComponent::InternalImpl<ContractState>;`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "EmbedAfter",  
        tag: "Pausable",
        name: "ERC721CEmbedAfterPausable",
        content: `impl PausableInternalImpl = PausableComponent::InternalImpl<ContractState>;`
    },
    //...............................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Pausable",
        name: "ERC721CStoragePausable",
        content: `    #[substorage(v0)]
        pausable: PausableComponent::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Ownable",
        name: "ERC721CStorageOwnable",
        content: `#[substorage(v0)]
        ownable: OwnableComponent::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Roles",
        name: "ERC721CStorageRoles",
        content: `#[substorage(v0)]
        accesscontrol: AccessControlComponent::Storage,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Storage",  
        tag: "Upgradeable",
        name: "ERC721CStorageUpgradeable",
        content: `    #[substorage(v0)]
        upgradeable: UpgradeableComponent::Storage,`
    },
    //.......................................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Events",  
        tag: "Pausable",
        name: "ERC721CEventsPausable",
        content: `    #[flat]
        PausableEvent: PausableComponent::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Events",  
        tag: "Ownable",
        name: "ERC721CEventsOwnable",
        content: `#[flat]
        OwnableEvent: OwnableComponent::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Events",  
        tag: "Roles",
        name: "ERC721CEventsRoles",
        content: `#[flat]
        AccessControlEvent: AccessControlComponent::Event,`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Events",  
        tag: "Upgradeable",
        name: "ERC721CEventsUpgradeable",
        content: `    #[flat]
        UpgradeableEvent: UpgradeableComponent::Event,`
    },
    //.......................................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Roles",
        name: "ERC721CConstructorRoles",
        content: `default_admin: ContractAddress`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Ownable",
        name: "ERC721CConstructorOwnable",
        content: `owner: ContractAddress`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Upgradeable",
        name: "ERC721CConstructorUpgradable",
        content: `upgrader: ContractAddress`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Pausable",
        name: "ERC721CConstructorPausable",
        content: `pauser: ContractAddress`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Constructor",  
        tag: "Mintable",
        name: "ERC721CConstructorMintable",
        content: `minter: ContractAddress`
    },
    //.......................................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ConstructorInit",  
        tag: "Ownable",
        name: "ERC721CConstructorInitOwnable",
        content: `self.ownable.initializer(owner);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ConstructorInit",  
        tag: "Roles",
        name: "ERC721CConstructorInitRoles",
        content: `self.accesscontrol.initializer();

        self.accesscontrol._grant_role(DEFAULT_ADMIN_ROLE, default_admin);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ConstructorInit",  
        tag: "Mintable",
        name: "ERC721CConstructorInitMintable",
        content: `self.accesscontrol._grant_role(MINTER_ROLE, minter);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ConstructorInit",  
        tag: "Pausable",
        name: "ERC721CConstructorInitPausable",
        content: `self.accesscontrol._grant_role(PAUSER_ROLE, pauser);`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "ConstructorInit",  
        tag: "Upgradeable",
        name: "ERC721CConstructorInitUpgradeable",
        content: `self.accesscontrol._grant_role(UPGRADER_ROLE, upgrader);`
    },
    //.......................................................
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "Upgradeable",
        name: "ERC721CFunctionsUpgradeable",//...........func
        content: `#[abi(embed_v0)]
        impl UpgradeableImpl of IUpgradeable<ContractState> {
            fn upgrade(ref self: ContractState, new_class_hash: ClassHash) {
                self.ownable.assert_only_owner();
                self.upgradeable._upgrade(new_class_hash);
            }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "Burnable",
        name: "ERC721CFunctionsBurnable",//........func
        content: `#[abi(per_item)]
        impl ExternalImpl of ExternalTrait {
            #[external(v0)]
            fn burn(ref self: ContractState, token_id: u256) {
                let caller = get_caller_address();
                assert(self.erc721._is_approved_or_owner(caller, token_id), ERC721Component::Errors::UNAUTHORIZED);
                self.erc721._burn(token_id);
            }
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "Pausable",
        name: "ERC721CFunctionsPausable",//...............not
        content: `#[abi(embed_v0)]
        impl ERC721Impl of interface::IERC721<ContractState> {
            fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
                self.erc721.balance_of(account)
            }
    
            fn owner_of(self: @ContractState, token_id: u256) -> ContractAddress {
                self.erc721.owner_of(token_id)
            }
    
            fn safe_transfer_from(
                ref self: ContractState,
                from: ContractAddress,
                to: ContractAddress,
                token_id: u256,
                data: Span<felt252>,
            ) {
                self.pausable.assert_not_paused();
                self.erc721.safe_transfer_from(from, to, token_id, data);
            }
    
            fn transfer_from(
                ref self: ContractState,
                from: ContractAddress,
                to: ContractAddress,
                token_id: u256,
            ) {
                self.pausable.assert_not_paused();
                self.erc721.transfer_from(from, to, token_id);
            }
    
            fn approve(ref self: ContractState, to: ContractAddress, token_id: u256) {
                self.pausable.assert_not_paused();
                self.erc721.approve(to, token_id);
            }
    
            fn set_approval_for_all(ref self: ContractState, operator: ContractAddress, approved: bool) {
                self.pausable.assert_not_paused();
                self.erc721.set_approval_for_all(operator, approved);
            }
    
            fn get_approved(self: @ContractState, token_id: u256) -> ContractAddress {
                self.erc721.get_approved(token_id)
            }
    
            fn is_approved_for_all(self: @ContractState, owner: ContractAddress, operator: ContractAddress) -> bool {
                self.erc721.is_approved_for_all(owner, operator)
            }
        }
    
        #[abi(embed_v0)]
        impl ERC721CamelOnlyImpl of interface::IERC721CamelOnly<ContractState> {
            fn balanceOf(self: @ContractState, account: ContractAddress) -> u256 {
                self.balance_of(account)
            }
    
            fn ownerOf(self: @ContractState, tokenId: u256) -> ContractAddress {
                self.owner_of(tokenId)
            }
    
            fn safeTransferFrom(
                ref self: ContractState,
                from: ContractAddress,
                to: ContractAddress,
                tokenId: u256,
                data: Span<felt252>,
            ) {
                self.pausable.assert_not_paused();
                self.safe_transfer_from(from, to, tokenId, data);
            }
    
            fn transferFrom(
                ref self: ContractState,
                from: ContractAddress,
                to: ContractAddress,
                tokenId: u256,
            ) {
                self.pausable.assert_not_paused();
                self.transfer_from(from, to, tokenId);
            }
    
            fn setApprovalForAll(ref self: ContractState, operator: ContractAddress, approved: bool) {
                self.pausable.assert_not_paused();
                self.set_approval_for_all(operator, approved);
            }
    
            fn getApproved(self: @ContractState, tokenId: u256) -> ContractAddress {
                self.get_approved(tokenId)
            }
    
            fn isApprovedForAll(self: @ContractState, owner: ContractAddress, operator: ContractAddress) -> bool {
                self.is_approved_for_all(owner, operator)
            }
        }`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "Pausable2",
        name: "ERC721CFunctionsPausable",//...............func
        content: `#[abi(per_item)]
        impl ExternalImpl of ExternalTrait {
            #[external(v0)]
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
        wizard_id: 1,
        contractType_id: 1, 
        section: "Functions",  
        tag: "Mintable",
        name: "ERC721CFunctionsMintable",//..........func
        content: `#[abi(per_item)]
        impl ExternalImpl of ExternalTrait {
            #[external(v0)]
            fn safe_mint(
                ref self: ContractState,
                recipient: ContractAddress,
                token_id: u256,
                data: Span<felt252>,
                token_uri: felt252,
            ) {
                self.ownable.assert_only_owner();
                self.erc721._safe_mint(recipient, token_id, data);
                self.erc721._set_token_uri(token_id, token_uri);
            }
    
            #[external(v0)]
            fn safeMint(
                ref self: ContractState,
                recipient: ContractAddress,
                tokenId: u256,
                data: Span<felt252>,
                tokenURI: felt252,
            ) {
                self.safe_mint(recipient, tokenId, data, tokenURI);
            }
        }`
    },
    
]