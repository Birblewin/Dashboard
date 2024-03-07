"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
  // IMPORTING PROPS
import { CopyButtonProps } from '@/types/props';

function CopyBtn({handleClick}: CopyButtonProps) {
  return (
    <div>
      <button 
        className="font-bold text-black border p-2 rounded hover:bg-gray-200 flex justify-between items-center w-4/5 mx-auto lg:w-36 gap-4 lg:justify-around"
        onClick={() => handleClick()}
      >
        <ContentCopyIcon width={12} height={12} />
        Copy
      </button>
    </div>
  );
}

export default CopyBtn