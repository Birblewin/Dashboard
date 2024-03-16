"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import copy from 'clipboard-copy';

  // IMPORTING PROPS
import { CopyButtonProps } from '@/types/props';

function CopyBtn({handleClick}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const text = "code"

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to copy text to clipboard', error);
    }
  };
  return (
    <div>
       <button className="font-bold text-black border p-2 rounded hover:bg-gray-200 flex gap-1" onClick={handleCopyClick}>
          {isCopied ? (
            <>
              <CheckIcon width={12} height={12} />
              Copied
            </>
          ) : (
            <>
              <ContentCopyIcon width={12} height={12} />
              Copy to clipboard
            </>
          )}
        </button>
    </div>
  );
}

export default CopyBtn;