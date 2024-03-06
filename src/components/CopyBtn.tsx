"use client"

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function CopyBtn() {
  return (
    <div>
      <button className="font-bold text-black border p-2 rounded hover:bg-gray-200 flex justify-between items-center w-4/5 mx-auto lg:w-36 gap-4 lg:justify-around">
        <ContentCopyIcon width={12} height={12} />
        Copy
      </button>
    </div>
  );
}

export default CopyBtn