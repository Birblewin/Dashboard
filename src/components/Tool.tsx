"use client";

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
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
          {imageComponent}
        </TooltipTrigger>
        
        <TooltipContent>
          <p>{tooltipText}</p>
          
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              {linktext}
            </a>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};