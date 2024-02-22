"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const initialCode = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MyToken is ERC20, ERC20Permit {
    constructor() ERC20("MyToken", "MTK") ERC20Permit("MyToken") {}
}

}
`;
const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(initialCode);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="w-full h-full">
      {/* <textarea
        value={code}
        onChange={handleChange}
        placeholder="Enter your code here..."
        spellCheck="false"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        className="w-1/3 h-fit border-1 border-gray-300 p-2"
      ></textarea> */}
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        className="w-full h-full font-bold"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
