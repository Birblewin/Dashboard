"use client"

// IMPORTING NECESSARY COMPONENTS
import Link from "next/link"

// EXPORTING A FUNCTION THAT RETURNS THE DASHBOARD ROOT PAGE
export default function DashboardRootPage(){
    return(
        <div className="flex flex-col gap-2">
            <Link href={"/dashboard/legalpolicy"}>Legal Policy</Link>
            <Link href={"/dashboard/terms-of-service"}>Terms of service</Link>
            <Link href={"/wizard"}>Solidity wizard</Link>
            <Link href={"/wizard/cairo"}>Cairo wizard</Link>
            <Link href={"/dashboard/roadmap"}>RoadMap</Link>
        </div>
    )
}