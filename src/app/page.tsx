"use client"

// IMPORTING NECESSARY COMPONENTS
import Link from "next/link"

// EXPORTING A FUNCTION THAT RETURNS THE ROOT PAGE
export default function RootPage(){
    return(
      <main className="flex flex-col gap-2 bg-[#050012] min-h-screen transition-all duration-500 ease-in-out">
        <Link href={"/dashboard/legalpolicy"}>Legal Policy</Link>
        <Link href={"/dashboard/terms-of-service"}>Terms of service</Link>
        <Link href={"/wizard"}>Solidity wizard</Link>
        <Link href={"/wizard/cairo"}>Cairo wizard</Link>
      </main>
    )
}