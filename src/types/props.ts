// IMPORTING NECESSARY TYPES
import {ReactNode} from "react"

// A PROP FOR THE TOOL COMPONENT
export type ToolProps = {
  link?: string;
  tooltipText: string;
  linktext?: string;
  imageComponent?: ReactNode
}

// A PROP FOR THE POPOVER COMPONENT
export type PopoverProps = {
    imageComponent: ReactNode;
    children: ReactNode
}