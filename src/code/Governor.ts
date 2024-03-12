// IMPORTING NECESSARY FILES
    // IMPORTING TYPES
import { WizardDataType, ContractDataType, GovernorCodeSnippetDataType } from "@/types/types";

// EXPORTING RELATED WIZARD TYPES
export const wizards: WizardDataType[] = [
    {wizardID: 1, wizardName: "Cairo"},
    {wizardID: 2, wizardName: "Solidity"}
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
export const snippets: GovernorCodeSnippetDataType[] = [
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

    // DEFAULT CONSTRUCTOR
    {
        snippetID: 7,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultContractHead",
        section: "default",
        tag: "contract head",
        content: `contract {name=Governor} is Governor, GovernorCountingSimple, GovernorVotes`
    },

    {
        snippetID: 7,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultConstructorBody",
        section: "default",
        tag: ["constructor", "body"],
        content: `constructor(IVotes _token)\n\tGovernor({name=Governor})\n\tGovernorVotes(_token)`
    },
    
    // DEFAULT CONTRACT BODY
    {
        snippetID: 8,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingDelay",
        section: "default",
        tag: ["voting delay", "contract body"],
        content: `function votingDelay() public pure override returns (uint256) {\n\treturn {votingDelay={1 day} * 7200}; // {votingDelay=1} day\n}`
    },

    {
        snippetID: 9,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultVotingPeriod",
        section: "default",
        tag: ["voting period", "contract body"],
        content: `function votingPeriod() public pure override returns (uint256) {\n\treturn {votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}; // {votingPeriod = 1} week\n}`
    },

    // OPTIONAL CONTRACT BODY
    {
        snippetID: 10,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultProposalThreshold",
        section: "optional",
        tag: ["proposal threshold", "contract body"],
        content: `function proposalThreshold() public pure override returns (uint256) {\n\treturn {input=0};\n}`
    },

    // QUORUM FUNCTIONS
    {
        snippetID: 11,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunctionImport",
        section: "quorum",
        tag: ["default", "imports"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";`
    },

    {
        snippetID: 12,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultContractHead",
        section: "quorum",
        tag: ["default", "contract head"],
        content: `GovernorVotesQuorumFraction`
    },

    {
        snippetID: 13,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultConstructorBody",
        section: "quorum",
        tag: ["default", "constructor", "body"],
        content: `GovernorVotesQuorumFraction({inputValue=4});`
    },

    {
        snippetID: 14,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumDefaultFunction",
        section: "quorum",
        tag: ["default", "contract body"],
        content: `function quorum(uint256 blockNumber) public view override(Governor, GovernorVotesQuorumFraction returns (uint256) {\n\treturn super.quorum(blockNumber);\n}`
    },

    {
        snippetID: 14,
        contractID: 8,
        wizardID: 2,
        name: "GovernorQuorumOptionalFunction",
        section: "quorum",
        tag: ["optional", "contract body"],
        content: `function quorum(uint256 blockNumber) public pure override returns (uint256) {\n\treturn {inputValue=4}e{tokenDecimals=18};}\n}`
    },

    // UPDATABLE SETTINGS
    {
        snippetID: 15,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsImport",
        section: "updatable settings",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";`
    },

    {
        snippetID: 16,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsContractHead",
        section: "updatable settings",
        tag: ["optional", "contract head"],
        content: `GovernorSettings`
    },

    {
        snippetID: 17,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsConstructorBody",
        section: "updatable settings",
        tag: ["optional", "constructor", "body"],
        content: `GovernorSettings({votingDelay={inputValue=1 day}*7200}/* {inputValue=1} day */, {votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}}/* {inputValue = 1} week */, {proposalThreshold=0});`
    },

    {
        snippetID: 18,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingDelay",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting delay"],
        content: `function votingDelay() public view override(Governor, GovernorSettings) returns (uint256) {\n\treturn super.votingDelay();\n}`
    },

    {
        snippetID: 19,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsVotingPeriod",
        section: "updatable settings",
        tag: ["optional", "contract body", "voting period"],
        content: `function votingPeriod() public view override(Governor, GovernorSettings) returns (uint256) {\n\treturn super.votingPeriod();\n}`
    },

    {
        snippetID: 20,
        contractID: 8,
        wizardID: 2,
        name: "GovernorUpdatableSettingsProposalThreshold",
        section: "updatable settings",
        tag: ["optional", "contract body", "proposal threshold"],
        content: `function proposalThreshold() public view override(Governor, GovernorSettings) returns (uint256) {\n\treturn super.proposalThreshold();\n}`
    },

    // STORAGE
    {
        snippetID: 21,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageImport",
        section: "storage",
        tag: ["optional", "imports"],
        content: `import "@openzeppelin/contracts/governance/extensions/GovernorStorage.sol";`
    },

    {
        snippetID: 22,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageContractHead",
        section: "storage",
        tag: ["optional", "contract head"],
        content: `GovernorStorage`
    },

    {
        snippetID: 23,
        contractID: 8,
        wizardID: 2,
        name: "GovernorStorageFunction",
        section: "storage",
        tag: ["optional", "contract body"],
        content: `function _propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, address proposer) internal override(Governor, GovernorStorage) returns (uint256) {\n\treturn super._propose(targets, values, calldatas, description, proposer);\n}`
    },
]