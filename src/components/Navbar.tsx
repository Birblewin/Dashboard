"use client"

// IMPORTING NECESSARY COMPONENTS
import Link from "next/link"

// A FUNCTION TO GENERATE A HEADER COMPONENT
export default function Navbar(){
    return (
        <nav>
            <Link href={"/dashboard"}></Link>
        </nav>
    )
}