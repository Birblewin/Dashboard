import { ERC20SPremint, ERC20SMintable, ERC20SVotes, ERC20SPauseable, ERC20SAccessControl, ERC20SBurnable, ERC20SUpgradeability, ERC20SFlashMinting, ERC20SUpgradeabilityTransparent, ERC20SUpgradeabilityUUPS, ERC20SAccessControlRoles, ERC20SAccessControlOwnable, ERC20SAccessControlManaged } from "../store/ERC20S";
import {ERC20SCode} from '../code/ERC20S';

const License = ERC20SCode.filter(code => code.section === "license" ).map(filteredCode => filteredCode.content);
const Compatibility = ERC20SCode.filter(code => code.section === "compatibility").map(filteredCode => filteredCode.content);
const CodeVersion = ERC20SCode.filter(code => code.section === "codeVersion").map(filteredCode => filteredCode.content);
const StartUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "DefaultStart").map(filteredCode => filteredCode.content);
const BurnableUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
const PausableUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const FlashMintingUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
const PermitUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Permit").map(filteredCode => filteredCode.content);
const VotesUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Votes").map(filteredCode => filteredCode.content);
const OwnableUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
const RolesUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Roles").map(filteredCode => filteredCode.content);
const ManagedUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Managed").map(filteredCode => filteredCode.content);
const EndUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "DefaultEnd").map(filteredCode => filteredCode.content);
const UUPSUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "UUPS").map(filteredCode => filteredCode.content);
const Import = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Default").map(filteredCode => filteredCode.content);
const BurnableImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
const PausableImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const FlashMintingImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
const PermitImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Permit").map(filteredCode => filteredCode.content);
const VotesImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Votes").map(filteredCode => filteredCode.content);
const OwnableImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
const RolesImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Roles").map(filteredCode => filteredCode.content);
const ManagedImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Managed").map(filteredCode => filteredCode.content);
const SecurityContact = ERC20SCode.filter(code => code.section === "SecurityContact").map(filteredCode => filteredCode.content);
const ContractHeader = ERC20SCode.filter(code => code.section === "ContractHeader").map(filteredCode => filteredCode.content);
const ContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Default").map(filteredCode => filteredCode.content);
const OwnableContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
const RolesContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Roles").map(filteredCode => filteredCode.content);
const ManagedContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Managed").map(filteredCode => filteredCode.content);
const BurnableContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
const PausableContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const VotesContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Votes").map(filteredCode => filteredCode.content);
const PermitContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Permit").map(filteredCode => filteredCode.content);
const FlashMintContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
const UpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Default").map(filteredCode => filteredCode.content);
const OwnableUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
const RolesUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Roles").map(filteredCode => filteredCode.content);
const ManagedUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Managed").map(filteredCode => filteredCode.content);
const BurnableUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
const PermitUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Permit").map(filteredCode => filteredCode.content);
const VotesUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Votes").map(filteredCode => filteredCode.content);
const PausableUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const FlashMintUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
const RolesByte = ERC20SCode.filter(code => code.section === "RolesByte").map(filteredCode => filteredCode.content);
const PermitConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Permit").map(filteredCode => filteredCode.content);
const OwnableConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
const RolesConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Roles").map(filteredCode => filteredCode.content);
const ManagedConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Managed").map(filteredCode => filteredCode.content);
const UpgradeableConstructor = ERC20SCode.filter(code => code.section === "upgradeableConstructor").map(filteredCode => filteredCode.content);
const MintableSection2 = ERC20SCode.filter(code => code.section === "Section2" && code.tag === "Mintable").map(filteredCode => filteredCode.content);
const PausableSection2 = ERC20SCode.filter(code => code.section === "Section2" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const UUPSSection2 = ERC20SCode.filter(code => code.section === "Section2" && code.tag === "UUPS").map(filteredCode => filteredCode.content);
const PausableSection3 = ERC20SCode.filter(code => code.section === "Section3" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const VotesSection3 = ERC20SCode.filter(code => code.section === "Section3" && code.tag === "Votes").map(filteredCode => filteredCode.content);
const Section1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Default").map(filteredCode => filteredCode.content);
const OwnableSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
const RolesSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Roles").map(filteredCode => filteredCode.content);
const ManagedSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Managed").map(filteredCode => filteredCode.content);
const BurnableSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
const PausableSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
const PermitSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Permit").map(filteredCode => filteredCode.content);
const VotesSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Votes").map(filteredCode => filteredCode.content);
const FlashMintingSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);

const upgradeableImports = `
    ${StartUpgradeableImport}
    ${ERC20SBurnable ? BurnableUpgradeableImport : ""}
    ${ERC20SBurnable ? PausableUpgradeableImport : ""}
    ${ERC20SFlashMinting ? FlashMintingUpgradeableImport : ""}
    ${ERC20SPremint ? PermitUpgradeableImport : ""}
    ${ERC20SVotes ? VotesUpgradeableImport : ""}
    ${ERC20SAccessControlOwnable ? OwnableUpgradeableImport : ""}
    ${ERC20SAccessControlRoles ? RolesUpgradeableImport : ""}
    ${ERC20SAccessControlManaged ? ManagedUpgradeableImport : ""}
    ${EndUpgradeableImport}
    ${ERC20SUpgradeabilityUUPS ? UUPSUpgradeableImport : ""}
`
const Imports = `
    ${Import}
    ${ERC20SBurnable ? BurnableImport : ""}
    ${ERC20SBurnable ? PausableImport : ""}
    ${ERC20SFlashMinting ? FlashMintingImport : ""}
    ${ERC20SPremint ? PermitImport : ""}
    ${ERC20SVotes ? VotesImport : ""}
    ${ERC20SAccessControlOwnable ? OwnableImport : ""}
    ${ERC20SAccessControlRoles ? RolesImport : ""}
    ${ERC20SAccessControlManaged ? ManagedImport : ""}
    
`


export const FormattedERC20SCode = `
    ${License}
    ${Compatibility}
    ${CodeVersion}
    ${!ERC20SUpgradeability ? Imports : ""}
    ${ERC20SUpgradeability ? upgradeableImports : ""}



`
   