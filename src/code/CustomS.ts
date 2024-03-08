import { CustomSSecurityContact, CustomSLicense, CustomSName} from "@/store/CustomS";
import { getRecoil } from "recoil-nexus";

const name = CustomSName;
const license = CustomSLicense;
const contact = CustomSSecurityContact;



const CustomsCode =[
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "license",  
        tag: "Default",
        name: "ERC20DefaultLicense", 
        content:`// SPDX-License-Identifier: ${license}`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "compatibility",  
        tag: "Default",
        name: "ERC20Compatibility", 
        content: `// Compatible with OpenZeppelin Contracts ^5.0.0`
    },
    { 
        snippet_id: 1, 
        wizard_id: 1,
        contractType_id: 1, 
        section: "codeVersion",  
        tag: "Default",
        name: "ERC20codeVersion", 
        content: `pragma solidity ^0.8.20;
        `
    }
];

export default CustomsCode;
