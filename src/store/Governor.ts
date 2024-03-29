// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import { atom } from "recoil";
    // IMPORTING TYPES
import { GovernorFormDataType, GovernorErrorsType } from "@/types/types";

// GENERATING AN ATOM TO HOLD THE GOVERNOR FORM STATE
export const governorFormData = atom<GovernorFormDataType>({
    key: "governorFormData",
    
    default: {
        name: "MyGovernor", // NO PLACEHOLDER
        votingDelay: "1 day",// NO PLACEHOLDER
        votingPeriod: "1 week",// NO PLACEHOLDER
        blockValue: "12",//PLACEHOLDER=12
        proposalThreshold: "",//PLACEHOLDER=0
        
        quorumType: "percentage",
        quorumValue: "4",//PLACEHOLDER=4
        
        tokenDecimals: "18",//PLACEHOLDER=18
        updatableSettings: true,
        storage: false,
        votes: "ERC20Votes",

        timelockValue: true,
        timelockType: "TimelockController",

        upgradeabilityValue: false,
        upgradeabilityType: "",

        securityContact: "",//PLACEHOLDER=security@example.com
        license: "MIT"//PLACEHOLDER=MIT
    }
})

// GENERATING AN ATOM TO HOLD THE GOVERNOR ERROR STATE
export const governorErrors = atom<GovernorErrorsType>({
    key: "governorErrors",

    default: {
        proposalThreshold: "",
        quorumValue: "",
        votingDelay: "",
        votingPeriod: ""
    }
})