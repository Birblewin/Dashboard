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
  children: ReactNode;
  isOpen?: boolean
}

// A PROP FOR THE BUTTON COMPONENT
export type ButtonProps = { handleClick?: (...args: any) => void }
// A PROP FOR THE COPYBUTTON COMPONENT
type CopyButtonProps = Required<ButtonProps>

export type {
  CopyButtonProps as CopyButtonProps, 
  CopyButtonProps as DefenderButtonProps,
  CopyButtonProps as RenderButtonProps,
}