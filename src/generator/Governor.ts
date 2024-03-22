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
        // UPDATABLE SETTINGS
    const updatableSettingsSnippets = getCodeSnippets(codeSource, {section: "updatable settings"}) as GovernorCodeSnippetDataType[]
        // STORAGE
    const storageSnippets = getCodeSnippets(codeSource, {section: "storage"}) as GovernorCodeSnippetDataType[]
        // TIMELOCK
    const timelockSnippets = getCodeSnippets(codeSource, {section: "timelock"}) as GovernorCodeSnippetDataType[]
        // UUPS
    const UUPSSnippets = getCodeSnippets(codeSource, {section: "UUPS"}) as GovernorCodeSnippetDataType[]
    
    const verifiedTimelockSnippets = timelockSnippets.filter(
        item => (item.tag as string[]).includes(timelockType === "Compound" ? "timelockCompound" : "timelockController")
    )

    // GETTING DEFAULT COMMENTS, AND WORK ON THE LICENSE IMPORT TO RETURN UPDATED COMMENTS
    const comments = getCodeSnippets(codeSource, {tag: "comments", section: "default"}) as GovernorCodeSnippetDataType[]
    const defaultComments = comments.filter(comment => comment.name !== "GovernorDefaultLicenseComment")

        // LICENSE COMMENT
    const licenseComment = comments.find(comment => comment.name === "GovernorDefaultLicenseComment")
        ?.content.replace("{Info License=MIT}", license ? license : "MIT")

    const updatedDefaultComments: string = [licenseComment as string, ...defaultComments.map(comment => comment.content)].join("\n")

    // GETTING OPTIONAL COMMENTS
    const optionalComment = getCodeSnippets(codeSource, {section: "optional", tag: "comments"}, true)
        .join("\n")
        .replace("{inputValue}", securityContact)

    // GETTING DEFAULT VERSIONS
    const defaultVersion = getCodeSnippets(codeSource, {tag: "version", section: "default"}, true).join("\n")

    // FORMING AN IMPORTS STRING
        // GETTING DEFAULT IMPORTS
    const defaultImports = getCodeSnippets(codeSource, {tag: "imports", section: "default"}, true).join("\n")
        // GETTING QUORUM IMPORTS
    const defaultQuorumImport = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultFunctionImport")?.content
        // GETTING UPDATABLESETTINGS IMPORTS
    const updatableSettingsImport = updatableSettingsSnippets.find(item => item.name === "GovernorUpdatableSettingsImport")?.content
        // GETTING STORAGE IMPORTS
    const storageImport = storageSnippets.find(item => item.name === "GovernorStorageImport")?.content
        // GETTING TIMELOCK IMPORTS
    const timelockImport = verifiedTimelockSnippets.find(item => item.name === "GovernorTimelockImport")?.content
        // GETTING TRANSPARENT IMPORT
    const transparentImport = getCodeSnippets(codeSource, {section: "transparent"}, true).join("\n")
        
        // GETTING UUPS IMPORTS
    const UUPSImports = UUPSSnippets
        .filter(item => (item.tag as string[]).includes("imports"))
        .map(item => item.content)
        .join("\n")
    
        // IMPORTS STRING
    const imports = `${defaultImports}${quorumType === "percentage" ? "\n" + defaultQuorumImport: ""}${updatableSettings ? "\n" + updatableSettingsImport : ""}${storage ? "\n" + storageImport : ""}${timelockValue ? "\n" + timelockImport : ""}${upgradeabilityValue ? "\n" + transparentImport : ""}${upgradeabilityType === "UUPS" ? "\n" + UUPSImports : ""}`

    // FORMING A CONTRACT HEAD
        // GETTING DEFAULT CONTRACT HEAD
    const defaultContractHead = getCodeSnippets(codeSource, {section: "default", tag: "contract head"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? `${name[0].toUpperCase()}${name.slice(1)}` : "MyGovernor")
        
        // GETTING QUORUM HEAD
    const quorumContractHead = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultContractHead")?.content
        // GETTING UPDATABLE SETTINGS HEAD
    const updatableSettingsContractHead = updatableSettingsSnippets.find(item => item.name === "GovernorUpdatableSettingsContractHead")?.content
        // GETTING STORAGE HEAD
    const storageContractHead = storageSnippets.find(item => item.name === "GovernorStorageContractHead")?.content
        // GETTING TIMELOCK HEAD
    const timelockContractHead = verifiedTimelockSnippets.find(item => item.name === "GovernorTimelockContractHead")?.content
        // GETTING UUPS HEAD
    const UUPSContractHead = UUPSSnippets.find(item => item.name === "GovernorUUPSContractHead")?.content
        
        // CONTRACT HEAD
    const contractHead: string = `${defaultContractHead} ${quorumType === "percentage" ? ", " + quorumContractHead : ""}${updatableSettings ? ", " + updatableSettingsContractHead : ""}${storage ? ", " + storageContractHead : ""}${timelockValue ? ", " + timelockContractHead : ""}${upgradeabilityType === "UUPS" ? ", " + UUPSContractHead: ""}`

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
        ?.content.replace("{inputValue=4}", `${quorumValue && parseFloat(quorumValue) <= 100 ? quorumValue.replace('.', '') : 4}`)

        // GETTING UPDATABLE SETTINGS FUNCTION
    const updatableSettingsFunction = updatableSettingsSnippets
        .find(item => item.name === "GovernorUpdatableSettingsConstructorHead")
        ?.content.replace("{votingDelay={inputValue=1 day}*7200}", `${votingDelayValue ? votingDelayValue : 0 * 7200}`)
        .replace("{inputValue=1} day", `${votingDelayValue ? votingDelayValue : 0} ${votingDelayCounts}`)

        .replace(
            "{votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}}", 
            `${((votingPeriodValue ? votingPeriodValue : 0 * 604800)/parseFloat(blockValue ? blockValue : "12")).toFixed(2)}`
        )

        .replace("{inputValue = 1} week", `${votingPeriodValue ? votingPeriodValue : 0} ${votingPeriodCounts ? votingPeriodCounts : "week"}`)
        .replace("{proposalThreshold=0}", `${proposalThresholdValue}${votes === "ERC721Votes" ? "" : "e" + (tokenDecimals ? tokenDecimals : "18")}`)

        // GETTING TIMELOCK CONSTRUNCTOR
    const timelockConstructorHead = verifiedTimelockSnippets
        .find(item => item.name === "GovernorTimelockConstructor")
        ?.content.replace("{name=Governor}", name ? name : "MyGovernor")

        // FORMING CONSTRUCTOR
    const constructor: string = upgradeabilityValue 
        ? 
    defaultConstructor 
        : 
    `${timelockValue ? timelockConstructorHead : defaultConstructorHead}${quorumType === "percentage" ? "\n\t\t" + quorumConstructorFunction : ""}${updatableSettings ? "\n\t\t" + updatableSettingsFunction : ""}
    {}`

    // FORMING AN INITIALIZER
        // GETTING DEFAULT INITIALIZER
    const defaultInitializer = getCodeSnippets(codeSource, {section: "default", tag: "initializer"}, true)
        .join("\n")
        .replace("{name=Governor}", name ? name : "MyGovernor")
    
        // GETTING QUORUM INITIALIZER FUNCTION
    const quorumInitializerFunction = quorumSnippets
        .find(item => item.name === "GovernorQuorumDefaultInitializer")
        ?.content.replace("{inputValue=4}", `${quorumValue && parseFloat(quorumValue) <= 100 ? quorumValue.replace('.', '') : 4}`)

        // GETTING UPDATABLE SETTINGS INITIALIZER FUNCTION
    const updatableSettingsInitializerFunction = updatableSettingsSnippets
        .find(item => item.name === "GovernorUpdatableSettingsInitializer")
        ?.content.replace("{votingDelay={inputValue=1 day}*7200}", `${votingDelayValue ? votingDelayValue : 0 * 7200}`)
        .replace("{inputValue=1} day", `${votingDelayValue ? votingDelayValue : 0} ${votingDelayCounts}`)

        .replace(
            "{votingPeriod={inputValue=1 week}(converted in seconds)/{blockValue=12 seconds}}", 
            `${((votingPeriodValue ? votingPeriodValue : 0 * 604800)/parseFloat(blockValue ? blockValue : "12")).toFixed(2)}`
        )

        .replace("{inputValue=1} week", `${votingPeriodValue ? votingPeriodValue : 0} ${votingPeriodCounts ? votingPeriodCounts : "week"}`)
        .replace("{proposalThreshold=0}", `${proposalThresholdValue}${votes === "ERC721Votes" ? "" : "e" + (tokenDecimals ? tokenDecimals : "18")}`)

        // GETTING TIMELOCK INITIALIZER
    const timelockInitializer = verifiedTimelockSnippets
        .find(item => item.name === "GovernorTimelockInitializer")
        ?.content.replace("{name=Governor}", name ? name : "MyGovernor")

        // GETTING UUPS INITIALIZER'
    const UUPSInitializer = UUPSSnippets
        .find(item => item.name === "GovernorUUPSInitializer")
        ?.content.replace("{name=Governor}", name ? name : "MyGovernor")
        
        .replace("(IVotes _token, address initialOwner)", `(IVotes _token, ${
            !timelockValue ? "" :
            timelockType === "TimelockController" ? "TimelockControllerUpgradeable_timelock" : "ICompoundTimelock_timelock"
        } ,address initialOwner)`)

        .concat(`${
            !timelockValue ? "" :
            timelockType === "TimelockController" ? "\n\t\t__GovernorTimelockControl_init(_timelock);" : "\n\t\t__GovernorTimelockCompound_init(_timelock);"
        }`)

        // INITIALIZER STRING
    const initializer: string = `${
        upgradeabilityType === "UUPS" ? UUPSInitializer :
        timelockValue ? timelockInitializer : defaultInitializer
    }${quorumType === "percentage" ? "\n\t\t" + quorumInitializerFunction : ""}${updatableSettings ? "\n\t\t" + updatableSettingsInitializerFunction : ""}
    }`

    // FORMING A CONTRACT BODY
        // GETTING DEFAULT FUNCTIONS
    const defaultContractBody = getCodeSnippets(codeSource, {section: "default", tag: ["contract body"] }) as GovernorCodeSnippetDataType[]
    
        // GETTING OPTIONAL FUNCTIONS
    const defaultProposalThreshold = getCodeSnippets(
        codeSource, 
        {section: "optional", tag: ["proposal threshold", "contract body"]}, 
        true
    ).join("\n").replace("{input=0}", `${proposalThresholdValue}${votes === "ERC721Votes" ? "" : "e" + (tokenDecimals ? tokenDecimals : "18")}`)
        
        // GETTING VOTING DELAY AND VOTING PERIOD FUNCTIONS
    const votingDelayFunction = defaultContractBody
        .find(action => action.name === "GovernorDefaultVotingDelay")
        ?.content.replace("{votingDelay={1 day} * 7200}", `${votingDelayValue ? votingDelayValue : 0 * 7200}`)
        .replace("{votingDelay=1} day", `${votingDelayValue ? votingDelayValue : 0} ${votingDelayCounts}`)

    const votingPeriodFunction = defaultContractBody
        .find(action => action.name === "GovernorDefaultVotingPeriod")
        
        ?.content.replace(
            "{votingPeriod={input=1 week(convert to seconds)}/{blockValue=12 seconds}", 
            `${((votingPeriodValue ? votingPeriodValue : 0 * 604800)/parseFloat(blockValue ? blockValue : "12")).toFixed(2)}`
        )

        .replace("{votingPeriod = 1} week", `${votingPeriodValue ? votingPeriodValue : 0} ${votingPeriodCounts ? votingPeriodCounts : "week"}`)

        // GETTING QUORUM FUNCTIONS
    const numericalQuorumFunction = quorumSnippets
        .find(item => item.name === "GovernorQuorumOptionalFunction")
        ?.content.replace("{inputValue=4}", `${quorumValue ? quorumValue : 4}`)
        .replace("e{tokenDecimals=18}", `${votes === "ERC721Votes" ? "" : "e" + (tokenDecimals ? tokenDecimals : "18")}`)
    
    const percentageQuorumFunction = quorumSnippets.find(item => item.name === "GovernorQuorumDefaultFunction")?.content
    const quorumDenominatorFunction = quorumSnippets.find(item => item.name === "GovernorQuorumDenominatorFunction")?.content

        // GETTING UPDATABLE SETTINGS FUNCTIONS
    const updatableVotingDelayFunction = updatableSettingsSnippets.find(item => item.name === "GovernorUpdatableSettingsVotingDelay")?.content
    const updatableVotingPeriodFunction = updatableSettingsSnippets.find(item => item.name === "GovernorUpdatableSettingsVotingPeriod")?.content
    const updatableProposalThresholdFunction = updatableSettingsSnippets.find(item => item.name === "GovernorUpdatableSettingsProposalThreshold")?.content

        // GETTING STORAGE FUNCTION
    const storageFunction = storageSnippets.find(item => item.name === "GovernorStorageFunction")?.content
    
        // GETTING TIMELOCK FUNCTIONS
    const timelockFunctions = verifiedTimelockSnippets
        .filter(item => (item.tag as string[]).includes("contract body"))
        .map(item => item.content)
        .join("\n\n\t")

        // GETTING UUPS FUNCTIONS
    const UUPSFunction = UUPSSnippets.find(item => item.name === "GovernorUUPSContractBody")?.content

        // CONTRACT BODY
    const contractBody = `${updatableSettings ? updatableVotingDelayFunction : votingDelayFunction}\n
    ${updatableSettings ?  updatableVotingPeriodFunction : votingPeriodFunction}${
        updatableSettings ? "\n\n\t" + updatableProposalThresholdFunction : 
        checkIfNumber(proposalThreshold) && proposalThreshold !== "0" ? "\n\n\t" + defaultProposalThreshold : ""
    }${quorumType === "percentage" ? "\n\n\t" + quorumDenominatorFunction : ""}
    ${quorumType === "number" ? "\n\t" + numericalQuorumFunction : "\n\t" + percentageQuorumFunction}${storage ? "\n\n\t" + storageFunction : ""}${timelockValue ? "\n\n\t" + timelockFunctions : ""}${upgradeabilityType === "UUPS" ? "\n\n\t" + UUPSFunction : ""}`

    // FORMING A CONTRACT
    const contract: string = `${contractHead}{
    ${constructor}
    ${upgradeabilityValue ? "\n\t" + initializer + "\n" : ""}
    ${contractBody}     
}`
    
    return [
        updatedDefaultComments,
        defaultVersion, "",
        imports,
        securityContact ? "\n" + optionalComment : "",
        contract
    ].join("\n")
}