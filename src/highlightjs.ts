import hljs from 'highlight.js/lib/core';

// @ts-ignore
import hljsDefineSolidity from 'highlightjs-solidity';
import './app/atom-one-dark.css';

hljsDefineSolidity(hljs);
export default hljs;