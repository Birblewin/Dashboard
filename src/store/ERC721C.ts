import{atom} from "recoil";

type AtomValue = string | number | boolean;

// Function to generate atoms with default values
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const ERC721CName = createAtom<string>('ERC721CName', 'My Token');
export const ERC721CLicense = createAtom<string>('ERC721CLicense', 'MIT');
export const ERC721CSymbol = createAtom<string>('ERC721CSymbol', 'MTK');
export const ERC721CMintable = createAtom<boolean>('ERC721CMintable', false);
export const ERC721CPauseable = createAtom<boolean>('ERC721CPauseable', false);
export const ERC721CAccessControl = createAtom<boolean>('ERC721CAccessControl', false);
export const ERC721CBurnable = createAtom<boolean>('ERC721CBurnable', false);
export const ERC721CUpgradeable = createAtom<boolean>('ERC721CUpgradeable', false);
export const ERC721CAccessControlRoles = createAtom<boolean>('ERC721CAccessControlRoles', false);
export const ERC721CAccessControlOwnable = createAtom<boolean>('ERC721CAccessControlOwnable', false);