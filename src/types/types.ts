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
    tag?: string | string[],
    name: string,
    section: string
    content: string
}

// A TYPE FOR THE GOVERNOR CODE SNIPPET
export type GovernorCodeSnippetDataType = SnippetCodeDataType & {
    wizardID: 2;
    contractID: 8
}

// A TYPE FOR THE GOVERNOR FORMDATA
export type GovernorFormDataType = {
    name: string, // INPUT
    votingDelay: "1 day" | `${number} days`, // INPUT
    votingPeriod: "1 week" | `${number} weeks`, // INPUT
    blockValue: `${number}` | "", // INPUT
    proposalThreshold: `${number}` | "", // INPUT
    
    quorumType:  "percentage" | "number", // RADIO
    quorumValue: `${number}` | "", // INPUT
    
    tokenDecimals: `${number}` | "", // INPUT
    updatableSettings: boolean, // CHECKBOX
    storage: boolean, // CHECKBOX
    votes: "ERC20Votes" | "ERC721Votes", // RADIO
    
    timelockValue: boolean, // CHECKBOX
    timelockType: "TimelockController" | "Compound" | "", // RADIO
    
    upgradeabilityValue: boolean, // CHECKBOX
    upgradeabilityType: "Transparent" | "UUPS" | "", // RADIO

    securityContact: string, // INPUT
    license: string // INPUT
}

// A TYPE FOR THE GOVERNONR ERRORS
export type GovernorErrorsType = Pick<Record<keyof GovernorFormDataType, string>, "proposalThreshold" | "quorumValue" | "votingDelay" | "votingPeriod">

// A TYPE FOR THE ERC20SOLIDITY ERRORS
export type ERC20SolidityErrorsType = { premint: string }