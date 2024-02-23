"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import {useRouter} from "next/navigation"
  // IMPORTING MODULES
import React from "react"

// EXPORTING THE ROOTPAGE
export default function RootPage(){
  const router = useRouter()
  React.useEffect(() => {router.push("/dashboard")}, [router])
  return <p>Redirecting to home page...</p>
}