import{atom} from "recoil";

// Define a type for your atom values
type AtomValue = string | number | boolean;

// Function to generate atoms with default values
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const ERC20CName = createAtom<string>('ERC20CName', 'My Token');

export const ERC20CLicense = createAtom<string>('ERC20CLicense', 'MIT');
export const ERC20CSymbol = createAtom<string>('ERC20CSymbol', 'MTK');
export const ERC20CPremint = createAtom<string>('ERC20CPremint', '');
export const ERC20CMintable = createAtom<boolean>('ERC20CMintable', false);

export const ERC20CPauseable = createAtom<boolean>('ERC20CPauseable', false);
export const ERC20CAccessControl = createAtom<boolean>('ERC20CAccessControl', false);
export const ERC20CBurnable = createAtom<boolean>('ERC20CBurnable', false);

export const ERC20CUpgradeable = createAtom<boolean>('ERC20CUpgradeable', false);

export const ERC20CAccessControlRoles = createAtom<boolean>('ERC20CAccessControlRoles', false);
export const ERC20CAccessControlOwnable = createAtom<boolean>('ERC20CAccessControlOwnable', false);

