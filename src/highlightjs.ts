import hljs from "highlight.js";

// @ts-ignore
import hljsDefineSolidity from 'highlightjs-solidity';
// @ts-ignore
import hljsDefineCairo from "highlightjs-cairo"

hljsDefineSolidity(hljs);
hljsDefineCairo(hljs)
export default hljs;