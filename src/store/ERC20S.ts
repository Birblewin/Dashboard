import{atom} from "recoil";

// Define a type for your atom values
type AtomValue = string | number | boolean;

// Function to generate atoms with default values
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const ERC20SName = createAtom<string>('ERC20SName', 'My Token');
export const ERC20SSecurityContact = createAtom<string>('ERC20SSecurityContact', '');
export const ERC20SLicense = createAtom<string>('ERC20SLicense', 'MIT');
export const ERC20SSymbol = createAtom<string>('ERC20SSymbol', 'MTK');
export const ERC20SPremint = createAtom<number>('ERC20SPremint', 0);
export const ERC20SMintable = createAtom<boolean>('ERC20SMintable', false);
export const ERC20SVotes = createAtom<boolean>('ERC20SVotes', false);
export const ERC20SPauseable = createAtom<boolean>('ERC20SPauseable', false);
export const ERC20SPermit = createAtom<boolean>('ERC20SPermit', true);
export const ERC20SAccessControl = createAtom<boolean>('ERC20SAccessControl', false);
export const ERC20SBurnable = createAtom<boolean>('ERC20SBurnable', false);
export const ERC20SUpgradeability = createAtom<boolean>('ERC20SUpgradeability', false);
export const ERC20SFlashMinting = createAtom<boolean>('ERC20SFlashMinting', false);
export const ERC20SUpgradeabilityTransparent = createAtom<boolean>('ERC20SUpgradeabilityTransparent', false);
export const ERC20SUpgradeabilityUUPS = createAtom<boolean>('ERC20SUpgradeabilityUUPS', false);
export const ERC20SAccessControlRoles = createAtom<boolean>('ERC20SAccessControlRoles', false);
export const ERC20SAccessControlOwnable = createAtom<boolean>('ERC20SAccessControlOwnable', false);
export const ERC20SAccessControlManaged = createAtom<boolean>('ERC20SAccessControlManaged', false);
