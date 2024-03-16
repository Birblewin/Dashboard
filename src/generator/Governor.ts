// IMPORTING NECESSARY FILES
    // IMPORTING CODE SNIPPETS
import { defaultSnippets, upgradeableSnippets } from "@/code/Governor"
    // IMPORTING TYPES
import { GovernorFormDataType, GovernorCodeSnippetDataType } from "@/types/types"
    // IMPORTING GUARDS
import { arrayHasGovernorSnippetCode } from "@/types/guards" 

// A FUNCTION TO VERIFY IF AN ARRAY CONTAINS GOVERNOR SNIPPET CODES
function clarifyData(data: unknown): GovernorCodeSnippetDataType[] | undefined{
    try{
        if(arrayHasGovernorSnippetCode(data)){
            return data
        }else{
            throw new Error("The data provided is of an invalid format")
        }
    }catch(error: unknown){
        console.error((error as Error).message)
    }
}

// A FUNCTION TO FILTER THROUGH AN ARRAY OF GOVERNOR CODE SNIPPETS
function getCodeSnippets(
    governorSnippets: GovernorCodeSnippetDataType[], 
    searchObject: Pick<GovernorCodeSnippetDataType, "section" | "tag">,
    getContents?: true
): GovernorCodeSnippetDataType[] | string[]{
    // FITER THE SNIPPETS BY SECTION AND TAG, IF AVAILABLE
    const rightCodeSnippets: GovernorCodeSnippetDataType[] = governorSnippets.filter(snippet => {
        // IF SECTIONS DONT MATCH, SKIP THE CURRENT OBJECT
        if(snippet.section !== searchObject.section){
            return null
        // IF TAGS ARE PRESENT, RETURN THOSE WITH SAME TAG AND SECTION
        }else if(snippet.tag && searchObject.tag){
            // CHECK IF SECTIONS MATCH, IS SO PROCEED IF NOT AKIP CURRENT OBJECT
            if(snippet.section !== searchObject.section){
                return null
            }

            // IF TAG IS A STRING, CHECK IF BOTH STRINGS ARE SIMILAR
            if(typeof snippet.tag === "string"){
                if(snippet.tag === searchObject.tag) return snippet
                return null
            // IF TAG IS AN ARRAY, CHECK IF EACH STRING IN THE PASSED ARRAY IS PRESENT IN THE CURRENT OBJECT'S ARRAY
            }else{
                for(const tag of (searchObject.tag as string[])){
                   if(snippet.tag.includes(tag)){
                        continue
                   }else{
                        return null
                   } 
                }

                return snippet
            }
        // IF NO TAG IS PRESENT, RETURN THOSE WITH SIMILAR SECTIONS
        }else{
            return snippet
        }
    })

    // IF GET CONTENT IS PRESENT, RETURN EACH CONTENT BIT OF THE RIGHTCODE SNIPPETS ARRAY, IF NOT RETURN THE SNIPPETS
    if(getContents){
        return rightCodeSnippets.map(snippet => snippet.content)
    }else{
        return rightCodeSnippets
    }
}

// EXPORTING A FUNCTION THAT GENERATES THE REQUIRED GOVERNORCODE
export default function governorCodeGenerator(governorFormData: GovernorFormDataType): string{
    // DESTRUCTURING THE FORM DATA OBJECT
    const {
        blockValue, 
        license, 
        name, 
        proposalThreshold, 
        quorumType,
        quorumValue,
        securityContact,
        storage,
        timelockType,
        timelockValue,
        tokenDecimals,
        updatableSettings,
        upgradeabilityType,
        upgradeabilityValue,
        votes,
        votingDelay,
        votingPeriod
    } = governorFormData

    // DECLARING THE SOURCE CODE BASED ON THE UPGRADEABILITY VALUE
    const codeSource: GovernorCodeSnippetDataType[] | undefined = upgradeabilityValue ? clarifyData(upgradeableSnippets) : clarifyData(defaultSnippets)

    if(!codeSource){
        return "Check console for more info"
    }

    // GETTING DEFAULT COMMENTS, AND WORK ON THE LICENSE IMPORT TO RETURN UPDATED COMMENTS
    const comments = getCodeSnippets(codeSource, {tag: "comments", section: "default"}) as GovernorCodeSnippetDataType[]
    const defaultComments = comments.filter(comment => comment.name !== "GovernorDefaultLicenseComment")

        // LICENSE COMMENT
    const licenseComment = comments.find(comment => comment.name === "GovernorDefaultLicenseComment")
        ?.content.replace("{Info License=MIT}", license ? license : "MIT")

    const updatedComments: string = [licenseComment as string, ...defaultComments.map(comment => comment.content)].join("\n")

    // GETTING DEFAULT VERSIONS
    const defaultVersion = getCodeSnippets(codeSource, {tag: "version", section: "default"}, true).join("\n")

    // FORMING AN IMPORTS ARRAY
        // GETTING DEFAULT IMPORTS
    const defaultImports = getCodeSnippets(codeSource, {tag: "imports", section: "default"}, true).join("\n")

    // FORMING A CONTRACT HEAD
        // GETTING DEFAULT CONTRACT HEAD
    const defaultContractHead = getCodeSnippets(codeSource, {section: "default", tag: "contract head"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? `${name[0].toUpperCase()}${name.slice(1)}` : "MyGovernor")

    // FORMING A CONSTRUCTOR 
        // GETTING CONSTRUCTOR HEAD WITHOUT UPGRADEABILITY
    const defaultConstructorHead = getCodeSnippets(codeSource, {section: "default", tag: "constructor head"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? name : "MyGovernor")
        
        // GETTING CONSTRUCTOR AS IS IF UPGRADEABILITY
    const defaultConstructor = getCodeSnippets(codeSource, {section: "default", tag: "constructor"}, true).join("\n")

        // FORMING CONSTRUCTOR
    const constructor: string = upgradeabilityValue 
        ? 
    defaultConstructor 
        : 
    `${defaultConstructorHead}{\n\t}`

    // FORMING AN INITIALIZER
        // GETTING DEFAULT INITIALIZER
    const defaultInitializer = getCodeSnippets(codeSource, {section: "default", tag: "initializer"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? name : "MyGovernor")

    // FORMING A CONTRACT
    const contract: string = `${defaultContractHead}{
    ${constructor}\n
    ${upgradeabilityValue ? defaultInitializer + "\n" : ""}        
}`
    
    return [
        updatedComments, "",
        defaultVersion, "",
        defaultImports, "",
        contract
    ].join("\n")
}

// export const GovernorInitialCode = `
// // SPDX-License-Identifier: MIT
// // Compatible with OpenZeppelin Contracts ^5.0.0
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/governance/Governor.sol";
// import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
// import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
// import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
// import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
// import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";

// contract MyGovernor is Governor, GovernorSettings, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {
//     constructor(IVotes _token, TimelockController _timelock)
//         Governor("MyGovernor")
//         GovernorSettings(7200 /* 1 day */, 50400 /* 1 week */, 0)
//         GovernorVotes(_token)
//         GovernorVotesQuorumFraction(4)
//         GovernorTimelockControl(_timelock)
//     {}

//     // The following functions are overrides required by Solidity.

//     function votingDelay()
//         public
//         view
//         override(Governor, GovernorSettings)
//         returns (uint256)
//     {
//         return super.votingDelay();
//     }

//     function votingPeriod()
//         public
//         view
//         override(Governor, GovernorSettings)
//         returns (uint256)
//     {
//         return super.votingPeriod();
//     }

//     function quorum(uint256 blockNumber)
//         public
//         view
//         override(Governor, GovernorVotesQuorumFraction)
//         returns (uint256)
//     {
//         return super.quorum(blockNumber);
//     }

//     function state(uint256 proposalId)
//         public
//         view
//         override(Governor, GovernorTimelockControl)
//         returns (ProposalState)
//     {
//         return super.state(proposalId);
//     }

//     function proposalNeedsQueuing(uint256 proposalId)
//         public
//         view
//         override(Governor, GovernorTimelockControl)
//         returns (bool)
//     {
//         return super.proposalNeedsQueuing(proposalId);
//     }

//     function proposalThreshold()
//         public
//         view
//         override(Governor, GovernorSettings)
//         returns (uint256)
//     {
//         return super.proposalThreshold();
//     }

//     function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
//         internal
//         override(Governor, GovernorTimelockControl)
//         returns (uint48)
//     {
//         return super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);
//     }

//     function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
//         internal
//         override(Governor, GovernorTimelockControl)
//     {
//         super._executeOperations(proposalId, targets, values, calldatas, descriptionHash);
//     }

//     function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
//         internal
//         override(Governor, GovernorTimelockControl)
//         returns (uint256)
//     {
//         return super._cancel(targets, values, calldatas, descriptionHash);
//     }

//     function _executor()
//         internal
//         view
//         override(Governor, GovernorTimelockControl)
//         returns (address)
//     {
//         return super._executor();
//     }
// }
// `
