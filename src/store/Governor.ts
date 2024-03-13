// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import { atom } from "recoil";
    // IMPORTING TYPES
import { GovernorFormDataType } from "@/types/types";

// GENERATING AN ATOM TO HOLD THE GOVERNOR FORM STATE
const governorFormData = atom<GovernorFormDataType>({
    key: "governorFormData",
    
    default: {
        name: "",
        votingDelay: "1 day",
        votingPeriod: "1 week",
        blockValue: 0,
        proposalThreshold: 0,
        
        quorumType: "percentage",
        quorumValue: 0,
        
        tokenDecimals: 0,
        updatableSettings: false,
        storage: false,
        votes: "ERC20Votes",

        timelockValue: false,
        timelockType: "",

        upgradeabilityValue: false,
        upgradeabilityType: "",

        securityContact: "",
        license: ""
    }
})

export default governorFormData