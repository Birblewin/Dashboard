"use client";
import HelpIcon from '@mui/icons-material/Help';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import Image from "next/image";
  // IMPORTING TYPES
import {ToolProps} from "@/types/props"

// A FUNCTION THAT RETURNS A TOOL COMPONENT
export default function Tool({ 
  tooltipText, 
  link, 
  linktext,
  imageComponent=<Image src={"/svg.svg"} alt="svg" width={12} height={12} /> 
}: ToolProps){
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
