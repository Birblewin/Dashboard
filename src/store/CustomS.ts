import{atom} from "recoil";

// Define a type for your atom values
type AtomValue = string | number | boolean;

// Function to generate atoms with default values
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const CustomSName = createAtom<string>('CustomSName', 'MyContract ');
export const CustomSSecurityContact = createAtom<string>('CustomSSecurityContact', '');
export const CustomSLicense = createAtom<string>('CustomSLicense', 'MIT');
export const CustomSUpgradeable = createAtom<boolean>('CustomSUpgradeable', false);
export const CustomSPauseable = createAtom<boolean>('CustomSPauseable', false);
export const CustomSAccessControl = createAtom<boolean>('CustomSAccessControl', false);
export const CustomSUpgradeability = createAtom<boolean>('CustomSUpgradeability', false);
export const CustomSUpgradeabilityTransparent = createAtom<boolean>('CustomSUpgradeabilityTransparent', false);
export const CustomSUpgradeabilityUUPS = createAtom<boolean>('CustomSUpgradeabilityUUPS', false);
export const CustomSAccessControlRoles = createAtom<boolean>('CustomSAccessControlRoles', false);
export const CustomSAccessControlOwnable = createAtom<boolean>('CustomSAccessControlOwnable', false);
export const CustomSAccessControlManaged = createAtom<boolean>('CustomSAccessControlManaged', false);
