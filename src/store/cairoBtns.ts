import { atom } from "recoil";

type AtomValue = string | number | boolean;

const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

export const ERC721 = createAtom<boolean>('ERC721B', false);
export const ERC20 = createAtom<boolean>('ERC20B', false);
export const Custom = createAtom<boolean>('CustomB', false);



