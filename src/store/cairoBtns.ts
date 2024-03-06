import { atom } from "recoil";

type AtomValue = string | number | boolean;

const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

export const ERC721 = createAtom<boolean>('ERC721', false);
export const ERC20 = createAtom<boolean>('ERC20', false);
export const Custom = createAtom<boolean>('Custom', false);



