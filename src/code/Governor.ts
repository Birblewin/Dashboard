// IMPORTING NECESSARY FILES
    // IMPORTING TYPES
import { WizardDataType, ContractDataType, GovernorCodeSnippetDataType } from "@/types/types";

// EXPORTING RELATED WIZARD TYPES
export const wizards: WizardDataType[] = [
    {wizardID: 1, wizardName: "Cairo"},
    {wizardID: 2, wizardName: "Solidity"},
]

// EXPORTING RELATED CONTRACT TYPES
export const contracts: ContractDataType[] = [
    {contractName: "Custom_Cairo", contractID: 7},
    {contractName: "Custom_Solidity", contractID: 6},
    {contractName: "ERC1155", contractID: 1},
    {contractName: "ERC20_Cairo", contractID: 5},
    {contractName: "ERC20_Solidity", contractID: 4},
    {contractName: "ERC721_Cairo", contractID: 3},
    {contractName: "ERC721_Solidity", contractID: 2},
    {contractName: "Governor", contractID: 8}
]

// EXPORTING RELATED SNIPPET TYPES
    // contractID: 8,
    // wizardID: 2,
    // name: Contract -> Section -> RealName+Tag
export const defaultSnippets: GovernorCodeSnippetDataType[] = [
    // DEFAULT COMMENTS
    {
        snippetID: 1,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultLicenseComment",
        section: "default",
        tag: "comments",
        content: `// SPDX-License-Identifier: {Info License=MIT}`
    },

    {
        snippetID: 2,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultCompatibleComment",
        section: "default",
        tag: "comments",
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },

    // DEFAULT VERSION
    {
        snippetID: 3,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultPragmaVersion",
        section: "default",
        tag: "version",
        content: `pragma solidity ^0.8.20;`
    },

    // DEFAULT IMPORTS
    {
        snippetID: 4,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultGovernorImport",
        section: "default",
        tag: "imports",
        content: `import "@openzeppelin/contracts/governance/Governor.sol";`
    },

    {
        snippetID: 5,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultGovernorCounterImport",
        section: "default",
        tag: "imports",
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";`
    },

    {
        snippetID: 6,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultGovernorVotesImport",
        section: "default",
        tag: "imports",
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";`
    },

    // DEFAULT CONTRACT HEAD
    {
        snippetID: 7,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultContractHead",
        section: "default",
        tag: "contract head",
        content: `contract {name=Governor} is Governor, GovernorCountingSimple, GovernorVotes`
    },

    // DEFAULT CONSTRUCTOR
    {
        snippetID: 8,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultConstructorHead",
        section: "default",
        tag: "constructor head",
        content: `constructor(IVotes _token) Governor({name=Governor}) GovernorVotes(_token)`
    },
    
    // DEFAULT CONTRACT BODY
    {
        snippetID: 9,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingDelay",
        section: "default",
        tag: ["voting delay", "contract body"],
        content: `function votingDelay() public pure override returns (uint256) {\n\treturn {votingDelay={1 day} * 7200}; // {votingDelay=1} day\n}`
    },

    {
        snippetID: 10,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingPeriod",
        section: "default",
        tag: ["voting period", "contract body"],
        content: `function votingPeriod() public pure override returns (uint256) {\n\treturn {votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}; // {votingPeriod = 1} week\n}`
    },

    // OPTIONAL CONTRACT BODY
    {
        snippetID: 11,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultProposalThreshold",
        section: "optional",
        tag: ["proposal threshold", "contract body"],
        content: `function proposalThreshold() public pure override returns (uint256) {\n\treturn {input=0};\n}`
    },

    // QUORUM FUNCTIONS
        // OPTIONAL -> NUMBER
    {
        snippetID: 12,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumOptionalFunction",
        section: "quorum",
        tag: ["optional", "contract body"],
        content: `function quorum(uint256 blockNumber) public pure override returns (uint256) {\n\treturn {inputValue=4}e{tokenDecimals=18};\n}`
    },

        // DEFAULT -> %
    {
        snippetID: 13,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunctionImport",
        section: "quorum",
        tag: ["default", "imports"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";`
    },

    {
        snippetID: 14,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultContractHead",
        section: "quorum",
        tag: ["default", "contract head"],
        content: `GovernorVotesQuorumFraction`
    },

    {
        snippetID: 15,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultConstructorHead",
        section: "quorum",
        tag: ["default", "constructor head"],
        content: `GovernorVotesQuorumFraction({inputValue=4});`
    },

    {
        snippetID: 16,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunction",
        section: "quorum",
        tag: ["default", "contract body"],
        content: `function quorum(uint256 blockNumber) public view override(Governor, GovernorVotesQuorumFraction) returns (uint256) {\n\treturn super.quorum(blockNumber);\n}`
    },

    // UPDATABLE SETTINGS
    {
        snippetID: 17,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsImport",
        section: "updatable settings",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";`
    },

    {
        snippetID: 18,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsContractHead",
        section: "updatable settings",
        tag: ["optional", "contract head"],
        content: `GovernorSettings`
    },

    {
        snippetID: 19,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsConstructorHead",
        section: "updatable settings",
        tag: ["optional", "constructor head"],
        content: `GovernorSettings({votingDelay={inputValue=1 day}*7200}/* {inputValue=1} day */, {votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}}/* {inputValue = 1} week */, {proposalThreshold=0});`
    },

    {
        snippetID: 20,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingDelay",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting delay"],
        content: `function votingDelay() public view override(Governor, GovernorSettings) returns (uint256) {\n\treturn super.votingDelay();\n}`
    },

    {
        snippetID: 21,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingPeriod",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting period"],
        content: `function votingPeriod() public view override(Governor, GovernorSettings) returns (uint256) {\n\treturn super.votingPeriod();\n}`
    },

    {
        snippetID: 22,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsProposalThreshold",
        section: "updatable settings",
        tag: ["optional", "contract body", "proposal threshold"],
        content: `function proposalThreshold() public view override(Governor, GovernorSettings) returns (uint256) {\n\treturn super.proposalThreshold();\n}`
    },

    // STORAGE
    {
        snippetID: 23,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageImport",
        section: "storage",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorStorage.sol";`
    },

    {
        snippetID: 24,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageContractHead",
        section: "storage",
        tag: ["optional", "contract head"],
        content: `GovernorStorage`
    },

    {
        snippetID: 25,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageFunction",
        section: "storage",
        tag: ["optional", "contract body"],
        content: `function _propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, address proposer) internal override(Governor, GovernorStorage) returns (uint256) {\n\treturn super._propose(targets, values, calldatas, description, proposer);\n}`
    },

    // TIMELOCK
    {
        snippetID: 26,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockController"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";`
    },

    {
        snippetID: 27,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockCompound"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorTimelockCompound.sol";`
    },

    {
        snippetID: 28,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockController"],
        content: `GovernorTimelockControl`
    },

    {
        snippetID: 29,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockCompound"],
        content: `GovernorTimelockCompound`
    },

    {
        snippetID: 30,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerConstructor",
        section: "timelock",
        tag: ["optional", "constructor", "timelockController"],
        content: `constructor(IVotes _token, TimelockController _timelock) Governor({name=Governor}) GovernorVotes(_token) GovernorTimelockControl(_timelock){}`
    },

    {
        snippetID: 31,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundConstructor",
        section: "timelock",
        tag: ["optional", "constructor", "timelockCompound"],
        content: `constructor(IVotes _token, ICompoundTimelock _timelock) Governor({name=Governor}) GovernorVotes(_token) GovernorTimelockCompound(_timelock){}`
    },

    {
        snippetID: 32,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function state(uint256 proposalId) public view override(Governor, GovernorTimelockControl) returns (ProposalState) {\n\treturn super.state(proposalId);\n}`
    },

    {
        snippetID: 33,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function state(uint256 proposalId) public view override(Governor, GovernorTimelockCompound) returns (ProposalState) {\n\treturn super.state(proposalId);\n}`
    },

    {
        snippetID: 34,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function proposalNeedsQueuing(uint256 proposalId) public view override(Governor, GovernorTimelockControl) returns (bool) {\n\treturn super.proposalNeedsQueuing(proposalId);\n}`
    },

    {
        snippetID: 35,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function proposalNeedsQueuing(uint256 proposalId) public view override(Governor, GovernorTimelockCompound) returns (bool) {\n\treturn super.proposalNeedsQueuing(proposalId);\n}`
    },

    {
        snippetID: 36,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(Governor, GovernorTimelockControl) returns (uint48) {\n\treturn super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 37,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(Governor, GovernorTimelockCompound) returns (uint48) {\n\treturn super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 38,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(Governor, GovernorTimelockControl){\n\tsuper._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 39,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(Governor, GovernorTimelockCompound){\n\tsuper._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 40,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(Governor, GovernorTimelockControl) returns (uint256){\n\treturn super._cancel(targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 41,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(Governor, GovernorTimelockCompound) returns (uint256){\n\treturn super._cancel(targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 42,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executor() internal view override(Governor, GovernorTimelockControl) returns (address) {\n\treturn super._executor();\n}`
    },

    {
        snippetID: 43,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executor() internal view override(Governor, GovernorTimelockCompound) returns (address) {\n\treturn super._executor();\n}`
    },

    // OPTIONAL COMMENTS
    {
        snippetID: 44,
        contractID: 8,
        wizardID: 2,
        name: "GovernorOptionalContactComment",
        section: "optional",
        tag: "comments",
        content: `/// @custom:security-contact {inputValue}`
    }
]

export const upgradeableSnippets: GovernorCodeSnippetDataType[] = [
    // DEFAULT COMMENTS
    {
        snippetID: 1,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultLicenseComment",
        section: "default",
        tag: "comments",
        content: `// SPDX-License-Identifier: {Info License=MIT}`
    },

    {
        snippetID: 2,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultCompatibleComment",
        section: "default",
        tag: "comments",
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },

    // DEFAULT VERSION
    {
        snippetID: 3,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultPragmaVersion",
        section: "default",
        tag: "version",
        content: `pragma solidity ^0.8.20;`
    },

    // DEFAULT IMPORTS
    {
        snippetID: 4,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultGovernorImport",
        section: "default",
        tag: "imports",
        content: `import "@openzeppelin/contracts-upgradeable/governance/GovernorUpgradeable.sol";`
    },

    {
        snippetID: 5,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultGovernorCounterImport",
        section: "default",
        tag: "imports",
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorCountingSimpleUpgradeable.sol";`
    },

    {
        snippetID: 6,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultGovernorVotesImport",
        section: "default",
        tag: "imports",
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesUpgradeable.sol";`
    },

    // DEFAULT CONTRACT HEAD
    {
        snippetID: 7,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultContractHead",
        section: "default",
        tag: "contract head",
        content: `contract {name=Governor} is Initializable, GovernorUpgradeable, GovernorCountingSimpleUpgradeable, GovernorVotesUpgradeable`
    },

    // DEFAULT CONSTRUCTOR
    {
        snippetID: 8,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultConstructor",
        section: "default",
        tag: "constructor",
        content: `/// @custom:oz-upgrades-unsafe-allow constructor\n\tconstructor() {\n\t\t _disableInitializers();\n\t}`
    },

    // DEFAULT INITIALIZER
    {
        snippetID: 9,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultInitializer",
        section: "default",
        tag: "initializer",
        content: `function initialize(IVotes _token) initializer public {\n\t\t__Governor_init({name=Governor});\n\t\t__GovernorCountingSimple_init();\n\t\t__GovernorVotes_init(_token);\n\t}`
    },

    // DEFAULT CONTRACT BODY
    {
        snippetID: 10,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingDelay",
        section: "default",
        tag: ["voting delay", "contract body"],
        content: `function votingDelay() public pure override returns (uint256) {\n\treturn {votingDelay={1 day} * 7200}; // {votingDelay=1} day\n}`
    },

    {
        snippetID: 11,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingPeriod",
        section: "default",
        tag: ["voting period", "contract body"],
        content: `function votingPeriod() public pure override returns (uint256) {\n\treturn {votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}; // {votingPeriod = 1} week\n}`
    },

    // OPTIONAL CONTRACT BODY
    {
        snippetID: 12,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultProposalThreshold",
        section: "optional",
        tag: ["proposal threshold", "contract body"],
        content: `function proposalThreshold() public pure override returns (uint256) {\n\treturn {input=0};\n}`
    },

    // QUORUM FUNCTIONS
        // OPTIONAL -> NUMBER
    {
        snippetID: 13,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumOptionalFunction",
        section: "quorum",
        tag: ["optional", "contract body"],
        content: `function quorum(uint256 blockNumber) public pure override returns (uint256) {\n\treturn {inputValue=4}e{tokenDecimals=18};\n}`
    },

        // DEFAULT -> %
    {
        snippetID: 14,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunctionImport",
        section: "quorum",
        tag: ["default", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol”;`
    },

    {
        snippetID: 15,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultContractHead",
        section: "quorum",
        tag: ["default", "contract head"],
        content: `GovernorVotesQuorumFractionUpgradeable`
    },

    {
        snippetID: 16,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultInitializer",
        section: "quorum",
        tag: ["default", "initializer"],
        content: `__GovernorVotesQuorumFraction_init({inputValue=4});`
    },

    {
        snippetID: 17,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunction",
        section: "quorum",
        tag: ["default", "contract body"],
        content: `function quorum(uint256 blockNumber) public view override(GovernorUpgradeable, GovernorVotesQuorumFractionUpgradeable) returns (uint256) {\n\treturn super.quorum(blockNumber);\n}`
    },

    // UPDATABLE SETTINGS
    {
        snippetID: 18,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsImport",
        section: "updatable settings",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorSettingsUpgradeable.sol";`
    },

    {
        snippetID: 19,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsContractHead",
        section: "updatable settings",
        tag: ["optional", "contract head"],
        content: `GovernorSettingsUpgradeable`
    },

    {
        snippetID: 20,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsInitializer",
        section: "updatable settings",
        tag: ["optional", "initializer"],
        content: `__GovernorSettings_init({votingDelay={inputValue=1 day}*7200} /* {inputValue=1} day */, {votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}}/* {inputValue=1} week */, {proposalThreshold=0});`
    },

    {
        snippetID: 21,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingDelay",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting delay"],
        content: `function votingDelay() public view override(GovernorUpgradeable, GovernorSettingsUpgradeable) returns (uint256) {\n\treturn super.votingDelay();\n}`
    },

    {
        snippetID: 22,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingPeriod",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting period"],
        content: `function votingPeriod() public view override(GovernorUpgradeable, GovernorSettingsUpgradeable) returns (uint256) {\n\treturn super.votingPeriod();\n}`
    },

    {
        snippetID: 23,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsProposalThreshold",
        section: "updatable settings",
        tag: ["optional", "contract body", "proposal threshold"],
        content: `function proposalThreshold() public view override(GovernorUpgradeable, GovernorSettingsUpgradeable) returns (uint256) {\n\treturn super.proposalThreshold();\n}`
    },

    // STORAGE
    {
        snippetID: 24,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageImport",
        section: "storage",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorStorageUpgradeable.sol";`
    },

    {
        snippetID: 25,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageContractHead",
        section: "storage",
        tag: ["optional", "contract head"],
        content: `GovernorStorageUpgradeable`
    },

    {
        snippetID: 26,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageFunction",
        section: "storage",
        tag: ["optional", "contract body"],
        content: `function _propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, address proposer) internal override(GovernorUpgradeable, GovernorStorageUpgradeable) returns (uint256) {\n\treturn super._propose(targets, values, calldatas, description, proposer);\n}`
    },

    // TIMELOCK
    {
        snippetID: 27,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockController"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockControlUpgradeable.sol";`
    },

    {
        snippetID: 28,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockCompound"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockCompoundUpgradeable.sol";`
    },

    {
        snippetID: 29,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockController"],
        content: `GovernorTimelockControlUpgradeable`
    },

    {
        snippetID: 30,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockCompound"],
        content: `GovernorTimelockCompoundUpgradeable`
    },

    {
        snippetID: 31,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerInitializer",
        section: "timelock",
        tag: ["optional", "initializer", "timelockController"],
        content: `function initialize(IVotes _token, TimelockControllerUpgradeable_timelock) initializer public {\n\t__Governor_init({name=Governor});\n\t__GovernorCountingSimple_init();\n\t__GovernorVotes_init(_token);\n\t__GovernorTimelockControl_init(_timelock);\n}`
    },

    {
        snippetID: 32,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundInitializer",
        section: "timelock",
        tag: ["optional", "initializer", "timelockCompound"],
        content: `function initialize(IVotes _token, ICompoundTimelock_timelock) initializer public {\n\t__Governor_init({name=Governor});\n\t__GovernorCountingSimple_init();\n\t__GovernorVotes_init(_token);\n\t__GovernorTimelockCompound_init(_timelock);\n}`
    },

    {
        snippetID: 33,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function state(uint256 proposalId) public view override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (ProposalState) {\n\treturn super.state(proposalId);\n}`
    },

    {
        snippetID: 34,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function state(uint256 proposalId) public view override(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable) returns (ProposalState) {\n\treturn super.state(proposalId);\n}`
    },

    {
        snippetID: 35,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function proposalNeedsQueuing(uint256 proposalId) public view override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (bool) {\n\treturn super.proposalNeedsQueuing(proposalId);\n}`
    },

    {
        snippetID: 36,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function proposalNeedsQueuing(uint256 proposalId) public view override(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable) returns (bool) {\n\treturn super.proposalNeedsQueuing(proposalId);\n}`
    },

    {
        snippetID: 37,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint48) {\n\treturn super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 38,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable) returns (uint48) {\n\treturn super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 39,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable){\n\tsuper._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 40,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable){\n\tsuper._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 41,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint256){\n\treturn super._cancel(targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 42,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCompoundCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal override(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable) returns (uint256){\n\treturn super._cancel(targets, values, calldatas, descriptionHash);\n}`
    },

    {
        snippetID: 43,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executor() internal view override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (address) {\n\treturn super._executor();\n}`
    },

    {
        snippetID: 44,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockControllerExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executor() internal view override(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable) returns (address) {\n\treturn super._executor();\n}`
    },

    // TRANSPARENT
    {
        snippetID: 45,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTransparentImport",
        section: "transparent",
        tag: ["default", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";`
    },

    // UUID
    {
        snippetID: 46,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUIDOwnableImport",
        section: "UUID",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";`
    },

    {
        snippetID: 47,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUIDUpgradeableImport",
        section: "UUID",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";`
    },

    {
        snippetID: 48,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUIDContractHead",
        section: "UUID",
        tag: ["optional", "contract head"],
        content: `OwnableUpgradeable, UUPSUpgradeable`
    },

    {
        snippetID: 49,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUIDInitializer",
        section: "UUID",
        tag: ["optional", "initializer"],
        content: `function initialize(IVotes _token, address initialOwner) initializer public {\n\t__Governor_init({name=Governor});\n\t__GovernorCountingSimple_init();\n\t__GovernorVotes_init(_token);\n\t__Ownable_init(initialOwner);\n\t__UUPSUpgradeable_init();\n}`
    },

    {
        snippetID: 50,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUIDContractBody",
        section: "UUID",
        tag: ["optional", "contract body"],
        content: `function _authorizeUpgrade(address newImplementation) internal onlyOwner override {}`
    },

    // OPTIONAL COMMENTS
    {
        snippetID: 51,
        contractID: 8,
        wizardID: 2,
        name: "GovernorOptionalContactComment",
        section: "optional",
        tag: "comments",
        content: `/// @custom:security-contact {inputValue}`
    }
]