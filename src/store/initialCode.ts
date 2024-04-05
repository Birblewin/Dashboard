
import { atom } from "recoil";

    // Define a type for your atom values
    type AtomValue = string | number | boolean;

    // Function to generate atoms with default values
    const createAtom = <T extends AtomValue>(key: string, defaultValue: T) => atom({
    key: key,
    default: defaultValue,
    });

    // Define atoms using the createAtom function
   export const InitialCodeAtom = createAtom<string>('InitialCodeAtom', '');