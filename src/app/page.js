import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl">Case Studies</div>
      <div className="flex">
        <Link href="/Formulation">Formulation</Link>
        <Link href="/ECG">ECG</Link>
        <Link href="/Inlumin">Inlumin</Link>
      </div>
    </div>
  );
}
