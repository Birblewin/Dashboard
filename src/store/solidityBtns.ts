import { atom } from "recoil";

type AtomValue = string | number | boolean;

const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

export const ERC721 = createAtom<boolean>('ERC721SB', false);
export const ERC20 = createAtom<boolean>('ERC20SB', false);
export const ERC1155 = createAtom<boolean>('ERC1155SB', false);
export const Custom = createAtom<boolean>('CustomSB', false);
export const Governor = createAtom<boolean>('GovernorSB', false);
