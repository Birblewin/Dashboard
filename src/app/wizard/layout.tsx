// IMPORTING NECESSARY FILES
    // IMPORTING COMPONENTS
"use client"
import WizardHeader from "@/components/WizardHeader"
    // IMPORT MODULES
import React from "react"
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

// EXPORTING A FUNCTION THAT RETURNS THE LAYOUT OF THE WIZRD ROUTES
export default function WizardLayout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="bg-[#f5f5f5] min-h-screen transition-all duration-500 ease-in-out">
        
          <WizardHeader />
          {children}
        
        </main>
    )
}
