import{atom} from "recoil";

// Define a type for your atom values
type AtomValue = string | number | boolean;

// Function to generate atoms with default values
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const CustomCName = createAtom<string>('CustomCName', 'MyContract');
export const CustomCLicense = createAtom<string>('CustomCLicense', 'MIT');
export const CustomCUpgradeable = createAtom<boolean>('CustomCUpgradeable', false);
export const CustomCPauseable = createAtom<boolean>('CustomCPauseable', false);
export const CustomCAccessControl = createAtom<boolean>('CustomCAccessControl', false);
export const CustomCUpgradeability = createAtom<boolean>('CustomCUpgradeability', false);
export const CustomCUpgradeabilityTransparent = createAtom<boolean>('CustomCUpgradeabilityTransparent', false);
export const CustomCUpgradeabilityUUPS = createAtom<boolean>('CustomCUpgradeabilityUUPS', false);
export const CustomCAccessControlRoles = createAtom<boolean>('CustomCAccessControlRoles', false);
export const CustomCAccessControlOwnable = createAtom<boolean>('CustomCAccessControlOwnable', false);
