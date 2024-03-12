// IMPORTING NECESSARY TYPES

// A GENERIC TO GENERATE A WIZARD OBJECT BASED ON KEY-VALUE PAIRS
export type WizardObjectGenerator<objectType extends object> = {
    [key in keyof objectType]: {
        wizardName: key,
        wizardID: objectType[key]
    }
}[keyof objectType]

// A GENERIC TO GENERATE A CONTRACT OBJECT BASED ON KEY-VALUE PAIRS
export type ContractObjectGenerator<objectType extends object> = {
    [key in keyof objectType]: {
        contractName: key,
        contractID: objectType[key]
    }
}[keyof objectType]