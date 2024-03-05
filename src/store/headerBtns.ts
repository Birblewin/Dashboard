import { atom } from "recoil";

type AtomValue = string | number | boolean;

  
const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
key: key,
default: defaultValue,
});

// Define atoms using the createAtom function
export const wizard = createAtom<boolean>('wizard', true);
export const cairo = createAtom<boolean>('cairo', false);