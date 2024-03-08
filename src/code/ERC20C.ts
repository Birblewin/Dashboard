import {  ERC20CLicense, ERC20CName} from "@/store/ERC20C";
import { getRecoil } from "recoil-nexus";

const name = ERC20CName;
const license = ERC20CLicense;




export const ERC20CCode =[
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
]
