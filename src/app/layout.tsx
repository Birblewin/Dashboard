"use client"

import { Inter } from "next/font/google";
import "./globals.css";


// IMPORTING COMPONENTS
import Navbar from "@/components/Navbar"
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <RecoilRoot>
          <RecoilNexus/>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
