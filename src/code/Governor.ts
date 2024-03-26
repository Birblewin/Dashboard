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
        content: `constructor(IVotes _token)\n\t\t\t\tGovernor({name=Governor})\n\t\t\t\tGovernorVotes(_token)`
    },
    
    // DEFAULT CONTRACT BODY
    {
        snippetID: 9,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingDelay",
        section: "default",
        tag: ["voting delay", "contract body"],
        content: `function votingDelay() public pure override returns (uint256) {\n\t\treturn {votingDelay={1 day} * 7200}; \t// {votingDelay=1} day\n\t}`
    },

    {
        snippetID: 10,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingPeriod",
        section: "default",
        tag: ["voting period", "contract body"],
        content: `function votingPeriod() public pure override returns (uint256) {\n\t\treturn {votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}; \t// {votingPeriod = 1} week\n\t}`
    },

    // OPTIONAL CONTRACT BODY
    {
        snippetID: 11,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultProposalThreshold",
        section: "optional",
        tag: ["proposal threshold", "contract body"],
        content: `function proposalThreshold() public pure override returns (uint256) {\n\t\treturn {input=0};\n\t}`
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
        content: `function quorum(uint256 blockNumber) public pure override returns (uint256) {\n\t\treturn {inputValue=4}e{tokenDecimals=18};\n\t}\n\n\t// The following functions are overrides required by Solidity.`
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
        content: `GovernorVotesQuorumFraction({inputValue=4})`
    },

    {
        snippetID: 16,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunction",
        section: "quorum",
        tag: ["default", "contract body"],
        content: `// The following functions are overrides required by Solidity.\n\n\tfunction quorum(uint256 blockNumber)\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorVotesQuorumFraction)\n\t\t\t\treturns (uint256)\n\t\t{\n\t   return super.quorum(blockNumber);\n\t}`
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
        content: `GovernorSettings({votingDelay={inputValue=1 day}*7200}  /* {inputValue=1} day */,  {votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}} /* {inputValue = 1} week */,  {proposalThreshold=0})`
    },

    {
        snippetID: 20,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingDelay",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting delay"],
        content: `function votingDelay()\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorSettings)\n\t\t\t\treturns (uint256)\n\t\t{\n\t   return super.votingDelay();\n\t}`
    },

    {
        snippetID: 21,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingPeriod",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting period"],
        content: `function votingPeriod()\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorSettings)\n\t\t\t\treturns (uint256)\n\t\t{\n\t   return super.votingPeriod();\n\t}`
    },

    {
        snippetID: 22,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsProposalThreshold",
        section: "updatable settings",
        tag: ["optional", "contract body", "proposal threshold"],
        content: `function proposalThreshold()\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorSettings)\n\t\t\t\treturns (uint256)\n\t\t{\n\t   return super.proposalThreshold();\n\t}`
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
        content: `function _propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, address proposer)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorStorage)\n\t\t\t\treturns (uint256)\n\t\t{\n\t   return super._propose(targets, values, calldatas, description, proposer);\n\t}`
    },

    // TIMELOCK
    {
        snippetID: 26,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockController"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";`
    },

    {
        snippetID: 27,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockCompound"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorTimelockCompound.sol";`
    },

    {
        snippetID: 28,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockController"],
        content: `GovernorTimelockControl`
    },

    {
        snippetID: 29,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockCompound"],
        content: `GovernorTimelockCompound`
    },

    {
        snippetID: 30,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockConstructor",
        section: "timelock",
        tag: ["optional", "constructor", "timelockController"],
        content: `constructor(IVotes _token, TimelockController _timelock)\n\t\t\t\tGovernor({name=Governor})\n\t\t\t\tGovernorVotes(_token)\n\t\t\t\tGovernorTimelockControl(_timelock)`
    },

    {
        snippetID: 31,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockConstructor",
        section: "timelock",
        tag: ["optional", "constructor", "timelockCompound"],
        content: `constructor(IVotes _token, ICompoundTimelock _timelock)\n\t\t\t\tGovernor({name=Governor})\n\t\t\t\tGovernorVotes(_token)\n\t\t\t\tGovernorTimelockCompound(_timelock)`
    },

    {
        snippetID: 32,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function state(uint256 proposalId)\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorTimelockControl)\n\t\t\t\treturns (ProposalState)\n\t\t{\n\t   return super.state(proposalId);\n\t}`
    },

    {
        snippetID: 33,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function state(uint256 proposalId)\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorTimelockCompound)\n\t\t\t\treturns (ProposalState)\n\t\t{\n\t   return super.state(proposalId);\n\t}`
    },

    {
        snippetID: 34,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function proposalNeedsQueuing(uint256 proposalId)\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorTimelockControl)\n\t\t\t\treturns (bool)\n\t\t{\n\t   return super.proposalNeedsQueuing(proposalId);\n\t}`
    },

    {
        snippetID: 35,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function proposalNeedsQueuing(uint256 proposalId)\n\t\t\t\tpublic\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorTimelockCompound)\n\t\t\t\treturns (bool)\n\t\t{\n\t   return super.proposalNeedsQueuing(proposalId);\n\t}`
    },

    {
        snippetID: 36,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorTimelockControl)\n\t\t\t\treturns (uint48)\n\t\t{\n\t   return super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 37,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorTimelockCompound)\n\t\t\t\treturns (uint48)\n\t\t{\n\t   return super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 38,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorTimelockControl)\n\t\t{\n\t  super._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 39,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorTimelockCompound)\n\t\t{\n\t  super._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 40,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorTimelockControl)\n\t\t\t\treturns (uint256)\n\t\t{\n\t   return super._cancel(targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 41,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\t\t\tinternal\n\t\t\t\toverride(Governor, GovernorTimelockCompound)\n\t\t\t\treturns (uint256)\n\t{\n\t   return super._cancel(targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 42,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executor()\n\t\t\t\tinternal\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorTimelockControl)\n\t\t\t\treturns (address)\n\t\t{\n\t   return super._executor();\n\t}`
    },

    {
        snippetID: 43,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _executor()\n\t\t\t\tinternal\n\t\t\t\tview\n\t\t\t\toverride(Governor, GovernorTimelockCompound)\n\t\t\t\treturns (address)\n\t\t{\n\t   return super._executor();\n\t}`
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
        content: `function initialize(IVotes _token) initializer public {\n\t\t__Governor_init({name=Governor});\n\t\t__GovernorCountingSimple_init();\n\t\t__GovernorVotes_init(_token);`
    },

    // DEFAULT CONTRACT BODY
    {
        snippetID: 10,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingDelay",
        section: "default",
        tag: ["voting delay", "contract body"],
        content: `function votingDelay() public pure override returns (uint256) {\n\t\treturn {votingDelay={1 day} * 7200}; \t// {votingDelay=1} day\n\t}`
    },

    {
        snippetID: 11,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingPeriod",
        section: "default",
        tag: ["voting period", "contract body"],
        content: `function votingPeriod() public pure override returns (uint256) {\n\t\treturn {votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}; \t// {votingPeriod = 1} week\n\t}`
    },

    // OPTIONAL CONTRACT BODY
    {
        snippetID: 12,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultProposalThreshold",
        section: "optional",
        tag: ["proposal threshold", "contract body"],
        content: `function proposalThreshold() public pure override returns (uint256) {\n\t\treturn {input=0};\n\t}`
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
        content: `function quorum(uint256 blockNumber) public pure override returns (uint256) {\n\t\treturn {inputValue=4}e{tokenDecimals=18};\n\t}\n\n\t// The following functions are overrides required by Solidity.`
    },

        // DEFAULT -> %
    {
        snippetID: 14,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunctionImport",
        section: "quorum",
        tag: ["default", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol";`
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
        content: `// The following functions are overrides required by Solidity.\n\n\tfunction quorum(uint256 blockNumber)\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorVotesQuorumFractionUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super.quorum(blockNumber);\n\t}`
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
        content: `__GovernorSettings_init({votingDelay={inputValue=1 day}*7200} \t/* {inputValue=1} day */, \t{votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}} \t/* {inputValue=1} week */, \t{proposalThreshold=0});`
    },

    {
        snippetID: 21,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingDelay",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting delay"],
        content: `function votingDelay()\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorSettingsUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super.votingDelay();\n\t}`
    },

    {
        snippetID: 22,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingPeriod",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting period"],
        content: `function votingPeriod()\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorSettingsUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super.votingPeriod();\n\t}`
    },

    {
        snippetID: 23,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsProposalThreshold",
        section: "updatable settings",
        tag: ["optional", "contract body", "proposal threshold"],
        content: `function proposalThreshold()\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorSettingsUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super.proposalThreshold();\n\t}`
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
        content: `function _propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, address proposer)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorStorageUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super._propose(targets, values, calldatas, description, proposer);\n\t}`
    },

    // TIMELOCK
    {
        snippetID: 27,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockController"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockControlUpgradeable.sol";`
    },

    {
        snippetID: 28,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockImport",
        section: "timelock",
        tag: ["optional", "imports", "timelockCompound"],
        content: `import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockCompoundUpgradeable.sol";`
    },

    {
        snippetID: 29,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockController"],
        content: `GovernorTimelockControlUpgradeable`
    },

    {
        snippetID: 30,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockContractHead",
        section: "timelock",
        tag: ["optional", "contract head", "timelockCompound"],
        content: `GovernorTimelockCompoundUpgradeable`
    },

    {
        snippetID: 31,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockInitializer",
        section: "timelock",
        tag: ["optional", "initializer", "timelockController"],
        content: `function initialize(IVotes _token, TimelockControllerUpgradeable_timelock) initializer public {\n\t\t__Governor_init({name=Governor});\n\t\t__GovernorCountingSimple_init();\n\t\t__GovernorVotes_init(_token);\n\t\t__GovernorTimelockControl_init(_timelock);`
    },

    {
        snippetID: 32,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockInitializer",
        section: "timelock",
        tag: ["optional", "initializer", "timelockCompound"],
        content: `function initialize(IVotes _token, ICompoundTimelock_timelock) initializer public {\n\t\t__Governor_init({name=Governor});\n\t\t__GovernorCountingSimple_init();\n\t\t__GovernorVotes_init(_token);\n\t\t__GovernorTimelockCompound_init(_timelock);`
    },

    {
        snippetID: 33,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function state(uint256 proposalId)\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorTimelockControlUpgradeable)\n\t\treturns (ProposalState)\n\t{\n\t\treturn super.state(proposalId);\n\t}`
    },

    {
        snippetID: 34,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockStateFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function state(uint256 proposalId)\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable)\n\t\treturns (ProposalState)\n\t{\n\t\treturn super.state(proposalId);\n\t}`
    },

    {
        snippetID: 35,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function proposalNeedsQueuing(uint256 proposalId)\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorTimelockControlUpgradeable)\n\t\treturns (bool)\n\t{\n\t\treturn super.proposalNeedsQueuing(proposalId);\n\t}`
    },

    {
        snippetID: 36,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockProposalFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function proposalNeedsQueuing(uint256 proposalId)\n\t\tpublic\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable)\n\t\treturns (bool)\n\t{\n\t\treturn super.proposalNeedsQueuing(proposalId);\n\t}`
    },

    {
        snippetID: 37,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorTimelockControlUpgradeable)\n\t\treturns (uint48)\n\t{\n\t\treturn super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 38,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockQueueFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable)\n\t\treturns (uint48)\n\t{\n\t\treturn super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 39,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorTimelockControlUpgradeable)\n\t{\n\t\tsuper._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 40,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteOperationsFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable)\n\t{\n\t\tsuper._executeOperations(proposalId, targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 41,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorTimelockControlUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super._cancel(targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 42,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockCancelFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)\n\t\tinternal\n\t\toverride(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable)\n\t\treturns (uint256)\n\t{\n\t\treturn super._cancel(targets, values, calldatas, descriptionHash);\n\t}`
    },

    {
        snippetID: 43,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockController"],
        content: `function _executor()\n\t\tinternal\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorTimelockControlUpgradeable)\n\t\treturns (address)\n\t{\n\t\treturn super._executor();\n\t}`
    },

    {
        snippetID: 44,
        contractID: 8,
        wizardID: 2,
        name: "GovernorTimelockExecuteFunction",
        section: "timelock",
        tag: ["optional", "contract body", "timelockCompound"],
        content: `function _executor()\n\t\tinternal\n\t\tview\n\t\toverride(GovernorUpgradeable, GovernorTimelockCompoundUpgradeable)\n\t\treturns (address)\n\t{\n\t\treturn super._executor();\n\t}`
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

    // UUPS
    {
        snippetID: 46,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUPSOwnableImport",
        section: "UUPS",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";`
    },

    {
        snippetID: 47,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUPSUpgradeableImport",
        section: "UUPS",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";`
    },

    {
        snippetID: 48,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUPSContractHead",
        section: "UUPS",
        tag: ["optional", "contract head"],
        content: `OwnableUpgradeable, UUPSUpgradeable`
    },

    {
        snippetID: 49,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUPSInitializer",
        section: "UUPS",
        tag: ["optional", "initializer"],
        content: `function initialize(IVotes _token, address initialOwner) initializer public {\n\t\t__Governor_init({name=Governor});\n\t\t__GovernorCountingSimple_init();\n\t\t__GovernorVotes_init(_token);\n\t\t__Ownable_init(initialOwner);\n\t\t__UUPSUpgradeable_init();`
    },

    {
        snippetID: 50,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUUPSContractBody",
        section: "UUPS",
        tag: ["optional", "contract body"],
        content: `function _authorizeUpgrade(address newImplementation) internal onlyOwner override {\n\t}`
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