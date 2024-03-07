// IMPORTING NECESSARY FILES
    // IMPORTING COMPONENTS
import {
  Popover as Pop,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

    // IMPORTING TYPES
import {PopoverProps} from "@/types/props"

// A FUNCTION THAT RETURNS A POPOVER COMPONENT
export default function Popover({children, imageComponent, isOpen}: PopoverProps){
    return (
      <Pop open={isOpen}>
        <PopoverTrigger>{imageComponent}</PopoverTrigger>
        <PopoverContent>{children}</PopoverContent>
      </Pop>
    );
}