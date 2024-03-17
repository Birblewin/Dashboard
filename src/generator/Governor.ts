// IMPORTING NECESSARY FILES
    // IMPORTING CODE SNIPPETS
import { defaultSnippets, upgradeableSnippets } from "@/code/Governor"
    // IMPORTING TYPES
import { GovernorFormDataType, GovernorCodeSnippetDataType } from "@/types/types"
    // IMPORTING GUARDS
import { arrayHasGovernorSnippetCode } from "@/types/guards"
    // IMPORTING LIB FUNCTIONS
import checkIfNumber from "@/lib/checkIfNumber"

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

    // GETTING NUMERIC VALUES FOR VOTINGDELAY AND VOTING PERIOD
    const [delayNumberPart, daysPart] = votingDelay.split(" ")
    const votingDelayValue: number = delayNumberPart ? parseFloat(delayNumberPart) : 0
    const votingDelayCounts: string = daysPart ? daysPart : "day"

    const [periodNumberPart, weeksPart] = votingPeriod.split(" ")
    const votingPeriodValue: number = periodNumberPart ? parseFloat(periodNumberPart) : 0
    const votingPeriodCounts: string = weeksPart ? weeksPart : "week"

    // GETTING NUMERICAL VALUE FOR PROPOSAL THRESHOLD
    const proposalThresholdValue: number = checkIfNumber(proposalThreshold) ? parseInt(proposalThreshold) : 0

    // DECLARING THE SOURCE CODE BASED ON THE UPGRADEABILITY VALUE
    const codeSource: GovernorCodeSnippetDataType[] | undefined = upgradeabilityValue ? clarifyData(upgradeableSnippets) : clarifyData(defaultSnippets)

    if(!codeSource){
        return "Check console for more info"
    }

    // FETCHING OPTIONAL SECTIONS
        // QUORUM
    const quorumSnippets = getCodeSnippets(codeSource, {section: "quorum"}) as GovernorCodeSnippetDataType[]

    // GETTING DEFAULT COMMENTS, AND WORK ON THE LICENSE IMPORT TO RETURN UPDATED COMMENTS
    const comments = getCodeSnippets(codeSource, {tag: "comments", section: "default"}) as GovernorCodeSnippetDataType[]
    const defaultComments = comments.filter(comment => comment.name !== "GovernorDefaultLicenseComment")

        // LICENSE COMMENT
    const licenseComment = comments.find(comment => comment.name === "GovernorDefaultLicenseComment")
        ?.content.replace("{Info License=MIT}", license ? license : "MIT")

    const updatedComments: string = [licenseComment as string, ...defaultComments.map(comment => comment.content)].join("\n")

    // GETTING DEFAULT VERSIONS
    const defaultVersion = getCodeSnippets(codeSource, {tag: "version", section: "default"}, true).join("\n")

    // FORMING AN IMPORTS STRING
        // GETTING DEFAULT IMPORTS
    const defaultImports = getCodeSnippets(codeSource, {tag: "imports", section: "default"}, true).join("\n")
        // GETTING QUORUM IMPORTS
    const defaultQuorumImport = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultFunctionImport")?.content
        // IMPORTS STRING
    const imports = `${defaultImports}${quorumType === "percentage" ? "\n" : ""}${quorumType === "percentage" ? defaultQuorumImport : ""}`

    // FORMING A CONTRACT HEAD
        // GETTING DEFAULT CONTRACT HEAD
    const defaultContractHead = getCodeSnippets(codeSource, {section: "default", tag: "contract head"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? `${name[0].toUpperCase()}${name.slice(1)}` : "MyGovernor")
        // GETTINH QUORUM HEAD
    const quorumContractHead = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultContractHead")?.content
        // CONTRACT HEAD
    const contractHead: string = `${defaultContractHead} ${quorumType === "percentage" ? ", " + quorumContractHead : ""}`

    // FORMING A CONSTRUCTOR 
        // GETTING CONSTRUCTOR HEAD WITHOUT UPGRADEABILITY
    const defaultConstructorHead = getCodeSnippets(codeSource, {section: "default", tag: "constructor head"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? name : "MyGovernor")
        
        // GETTING CONSTRUCTOR AS IS IF UPGRADEABILITY
    const defaultConstructor = getCodeSnippets(codeSource, {section: "default", tag: "constructor"}, true).join("\n")
        // GETTING QUORUM CONSTRUCTOR FUNCTION
    const quorumConstructorFunction = quorumSnippets
        .find(item => item.name === "GovernorQuorumDefaultConstructorHead")
        ?.content.replace("{inputValue=4}", `${quorumValue && parseFloat(quorumValue) <= 100 ? quorumValue : 4}`)

        // FORMING CONSTRUCTOR
    const constructor: string = upgradeabilityValue 
        ? 
    defaultConstructor 
        : 
    `${defaultConstructorHead}{${quorumType === "percentage" ? "\n\t\t" : ""}${quorumType === "percentage" ? quorumConstructorFunction : ""}${quorumType === "percentage" ? "\n\t" : ""}}`

    // FORMING AN INITIALIZER
        // GETTING DEFAULT INITIALIZER
    const defaultInitializer = getCodeSnippets(codeSource, {section: "default", tag: "initializer"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? name : "MyGovernor")
        // GETTING QUORUM INITIALIZER FUNCTION
    const quorumInitializerFunction = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultInitializer")?.content
        // INITIALIZER STRING
    const initializer: string = `${defaultInitializer}${quorumType ? "\n\t\t" : ""}${quorumType === "percentage" ? quorumInitializerFunction : ""}${quorumType === "percentage" ? "\n\t" : ""}}`

    // FORMING A CONTRACT BODY
        // GETTING DEFAULT FUNCTIONS
    const defaultContractBody = getCodeSnippets(codeSource, {section: "default", tag: ["contract body"] }) as GovernorCodeSnippetDataType[]
        // GETTING OPTIONAL FUNCTIONS
    const defaultProposalThreshold = getCodeSnippets(
        codeSource, 
        {section: "optional", tag: ["proposal threshold", "contract body"]}, 
        true
    ).join("\n").replace("{input=0}", `${proposalThresholdValue}`)
        
        // GETTING VOTING DELAY AND VOTING PERIOD FUNCTIONS
    const votingDelayFunction = defaultContractBody
        .find(action => action.name === "GovernorDefaultVotingDelay")
        ?.content.replace("{votingDelay={1 day} * 7200}", `${votingDelayValue ? votingDelayValue : 0 * 7200}`)
        .replace("{votingDelay=1} day", `${votingDelayValue ? votingDelayValue : 0} ${votingDelayCounts}`)

    const votingPeriodFunction = defaultContractBody
        .find(action => action.name === "GovernorDefaultVotingPeriod")
        
        ?.content.replace(
            "{votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}", 
            `${blockValue ? ((votingPeriodValue ? votingPeriodValue : 0 * 604800)/parseFloat(blockValue)).toFixed(2) : 0}`
        )

        .replace("{votingPeriod = 1} week", `${votingPeriodValue ? votingPeriodValue : 0} ${votingPeriodCounts ? votingPeriodCounts : "week"}`)

        // GETTING QUORUM FUNCTIONS
    const numericalQuorumFunction = quorumSnippets
        .find(item => item.name === "GovernorQuorumOptionalFunction")
        ?.content.replace("{inputValue=4}", `${quorumValue ? quorumValue : 4}`)
        .replace("e{tokenDecimals=18}", `${votes === "ERC721Votes" || !tokenDecimals ? "" : "e" + tokenDecimals}`)
    const percentageQuorumFunction = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultFunction")?.content
        
        // CONTRACT BODY
    const contractBody = `${votingDelayFunction}\n
    ${votingPeriodFunction}\n
    ${defaultProposalThreshold}\n
    ${quorumType === "number" ? numericalQuorumFunction : percentageQuorumFunction}`

    // FORMING A CONTRACT
    const contract: string = `${contractHead}{
    ${constructor}${upgradeabilityValue ? "\n" : ""}
    ${upgradeabilityValue ? initializer + "\n" : ""}
    ${contractBody}     
}`
    
    return [
        updatedComments, "",
        defaultVersion, "",
        imports, "",
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
