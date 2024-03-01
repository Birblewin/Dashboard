"use client";
import HelpIcon from '@mui/icons-material/Help';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import Image from "next/image"

const Tool: React.FC<{
  link?: string;
  tooltipText: string;
  linktext?: string;
}> = ({ tooltipText, link, linktext }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <HelpIcon className='p-1 text-[#c9cdd3] hover:text-[#818998]' />

        </TooltipTrigger>
        <TooltipContent className="w-56 bg-[#fffaeb]">
          <p className='text-black'>{tooltipText}</p>
          {link && (
            <a className='text-blue-800 underline text-[15px]' href={link} target="_blank" rel="noreferrer">
              {linktext}
            </a>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Tool;