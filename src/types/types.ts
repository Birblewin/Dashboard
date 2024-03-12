// IMPORTING NECESSARY GENERICS
import { WizardObjectGenerator, ContractObjectGenerator } from "./generics";

// A TYPE FOR THE ISOPEN OBJECT
export type IsOpenType = {
    linksPopup: boolean;
    editorPopup: boolean;

    actionButtonsPopup: {
        smallScreens: boolean;
        largeScreens: boolean
    }
}

// A TYPE FOR THE WIZARD DATA
export type WizardDataType = WizardObjectGenerator<{
    Cairo : 1,
    Solidity: 2
}>

// A TYPE FOR THE CONTRACT DATA
export type ContractDataType = ContractObjectGenerator<{
    "ERC1155" : 1,
    "ERC721_Solidity" : 2,
    "ERC721_Cairo" : 3,
    "ERC20_Solidity" : 4,
    "ERC20_Cairo" : 5,
    "Custom_Solidity" : 6,
    "Custom_Cairo" : 7,
    "Governor" : 8
}>

// A TYPE FOR THE SNIPPET CODE DATA
export type SnippetCodeDataType = {
    snippetID: number,
    tag?: string,
    name: string,
    section: string
    content: string
}

// A TYPE FOR THE GOVERNOR CODE SNIPPET
export type GovernorCodeSnippetDataType = Required<SnippetCodeDataType & {
    wizardID: 2;
    contractID: 8
}>