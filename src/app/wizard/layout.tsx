"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Navbar from "@/components/Navbar";
import React from "react";
import { RecoilRoot } from "recoil";
import { SparklesCore } from "@/components/SparklesGenerator";

// EXPORTING A FUNCTION THAT RETURNS THE LAYOUT OF THE WIZARD ROUTES
export default function WizardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-[#050012] min-h-screen transition-all duration-500 ease-in-out relative">
      {/* SPARKLES BACKGROUND */}
      <div className="w-full inset-0 min-h-screen absolute">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      
      <div className="relative z-10">
        <RecoilRoot>
          <Navbar />
          {children}
        </RecoilRoot>
      </div>
    </main>
  );
}
