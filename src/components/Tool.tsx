"use client";

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
          <Image src={"/svg.svg"} alt="svg" width={12} height={12} />
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

export default Tool;
