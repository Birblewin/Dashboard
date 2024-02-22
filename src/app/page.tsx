
"use client"
import Image from "next/image";
import Link from "next/link";

// A FUNCTION THAT GENERATES THE HOME PAGE
export default function Home() {
  return (
    <div className="pt-[100px]">
      <div>Birble</div>
      <Link href={"/legalpolicy"}>Legal Policy</Link>
    </div>
  );};