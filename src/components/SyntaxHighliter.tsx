"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FormattedERC20SCode } from "@/formats/ERC20S";

const burnable = `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";`;


const initialCode = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
${burnable}

contract MyToken is ERC20, ERC20Permit {
    constructor() ERC20("MyToken", "MTK") ERC20Permit("MyToken") {}
}

}
`;
const CodeEditor: React.FC = () => {
  // const [code, setCode] = useState<string>(initialCode);

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setCode(e.target.value);
  // };

  return (
    <div className="w-full h-full">
      
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        className="w-full h-full font-bold"
      >
        {FormattedERC20SCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
