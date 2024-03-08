import{atom} from "recoil";

// Define a type for your atom values
type AtomValue = string | number | boolean;

// Function to generate atoms with default values
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const ERC1155Name = createAtom<string>('ERC1155Name', 'My Token');
export const ERC1155BaseURI = createAtom<string>('ERC1155BaseURI', 'https://...');
// Features
export const ERC1155Mintable = createAtom<boolean>('ERC1155Mintable', false);
export const ERC1155Burnable = createAtom<boolean>('ERC1155Burnable', false);
export const ERC1155SupplyTracking = createAtom<boolean>('ERC1155SupplyTracking', false);
export const ERC1155Pauseable = createAtom<boolean>('ERC1155Pauseable', false);
export const ERC1155UpdateableURI = createAtom<boolean>('ERC1155UpdateableURI', false);
// Access Control
export const ERC1155AccessControl = createAtom<boolean>('ERC1155AccessControl', false);
export const ERC1155AccessControlOwnable = createAtom<boolean>('ERC1155AccessControlOwnable', false);
export const ERC1155AccessControlRoles = createAtom<boolean>('ERC1155AccessControlRoles', false);
export const ERC1155AccessControlManaged = createAtom<boolean>('ERC1155AccessControlManaged', false);
// UPgradeability
export const ERC1155Upgradeability = createAtom<boolean>('ERC1155Upgradeability', false);
export const ERC1155UpgradeabilityTransparent = createAtom<boolean>('ERC1155UpgradeabilityTransparent', false);
export const ERC1155UpgradeabilityUUPS = createAtom<boolean>('ERC1155UpgradeabilityUUPS', false);
// Info
export const ERC1155SecurityContact = createAtom<string>('ERC1155SecurityContact', '');
export const ERC1155License = createAtom<string>('ERC1155License', 'MIT');
