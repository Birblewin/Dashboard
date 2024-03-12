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
    {
        snippetID: 1,
        contractID: 8,
        wizardID: 2,
        name: "GovernorDefaultLicenseComment",
        section: "default",
        tag: "comments",
        content: `SPDX-License-Identifier: ${Info License}`
    }
]