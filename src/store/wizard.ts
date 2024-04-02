// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import { atom } from "recoil";
    // IMPORTING TYPES
import { WizardTabType } from "@/types/types";

// CREATING AN ATOM TO HOLD THE CURRENT WIZARD STATE
const wizardTab = atom<WizardTabType>({
    key: "wizardTab",
    default: "Other"
})

export default wizardTab