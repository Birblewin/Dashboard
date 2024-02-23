// IMPORTING NECESSARY FILES
    // IMPORTING COMPONENTS
import WizardHeader from "@/components/WizardHeader"
    // IMPORT MODULES
import React from "react"

// EXPORTING A FUNCTION THAT RETURNS THE LAYOUT OF THE WIZRD ROUTES
export default function WizardLayout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="bg-[#050012] min-h-screen transition-all duration-500 ease-in-out">
          <WizardHeader />
          {children}
        </main>
    )
}
