import { atom } from "recoil";

    // Define a type for your atom values
    type AtomValue = string | number | boolean;

    // Function to generate atoms with default values
    const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
    key: key,
    default: defaultValue,
    });

    // Define atoms using the createAtom function
   export const ERC721SName = createAtom<string>('ERC721SName', 'My Token');
   export const ERC721SSecurityContact = createAtom<string>('ERC721SSecurityContact', '');
   export const ERC721SLicense = createAtom<string>('ERC721SLicense', 'MIT');
   export const ERC721SSymbol = createAtom<string>('ERC721SSymbol', 'MTK');
   export const ERC721SBaseURI = createAtom<string>('ERC721SBaseURI', '');
   export const ERC721SMintable = createAtom<boolean>('ERC721SMintable', false);
   export const ERC721SAutoIncrementIds = createAtom<boolean>('ERC721SAutoIncrementIds', false);
   export const ERC721SVotes = createAtom<boolean>('ERC721SVotes', false);
   export const ERC721SPauseable = createAtom<boolean>('ERC721SPauseable', false);
   export const ERC721SAccessControl = createAtom<boolean>('ERC721SAccessControl', false);
   export const ERC721SBurnable = createAtom<boolean>('ERC721SBurnable', false);
   export const ERC721SUpgradeability = createAtom<boolean>('ERC721SUpgradeability', false);
   export const ERC721SEnumerable = createAtom<boolean>('ERC721SEnumerable', false);
   export const ERC721SURIStorage = createAtom<boolean>('ERC721SURIStorage', false);
   export const ERC721SUpgradeabilityTransparent = createAtom<boolean>('ERC721SUpgradeabilityTransparent', false);
   export const ERC721SUpgradeabilityUUPS = createAtom<boolean>('ERC721SUpgradeabilityUUPS', false);
   export const ERC721SAccessControlRoles = createAtom<boolean>('ERC721SAccessControlRoles', false);
   export const ERC721SAccessControlOwnable = createAtom<boolean>('ERC721SAccessControlOwnable', false);
   export const ERC721SAccessControlManaged = createAtom<boolean>('ERC721SAccessControlManaged', false);
