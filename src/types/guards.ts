// IMPORTING NECESSARY FILES
import { WizardDataType, ContractDataType, GovernorCodeSnippetDataType } from "./types";

// A TYPE GUARD FOR THE WIZARD DATA
export function objIsWizard(object: unknown): object is WizardDataType{
    return (typeof object === "object" && object !== null &&
        "wizardName" in object && (object.wizardName === "Cairo" || object.wizardName === "Solidity") &&
        "wizardID" in object && (object.wizardID === 1 || object.wizardID === 2)
    )
}

// A TYPE GUARD FOR THE WIZARD DATA
export function objIsContract(object: unknown): object is ContractDataType{
    return (typeof object === "object" && object !== null &&
        "contractName" in object && typeof object.contractName === "string" &&
        "contractID" in object && typeof object.contractID === "number"
    )
}

// A TYPE GUARD FOR THE SNIPPET CODE DATA
export function objIsSnippetCode(object: unknown): object is GovernorCodeSnippetDataType{
    return (typeof object === "object" && object !== null &&
        "snippetID" in object && typeof object.snippetID === "number" &&
        "wizardID" in object && object.wizardID === 2 &&
        "contractID" in object && object.contractID === 8 &&
        "name" in object && typeof object.name === "string" &&
        "section" in object && typeof object.section === "string" &&
        "content" in object && typeof object.content === "string"
    )
}