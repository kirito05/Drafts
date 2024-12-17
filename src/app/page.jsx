import React from "react";
import Link from "next/link";
import Image from "next/image";
import bgImage from "../../public/download.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl">Case Studies</div>
      <div className="flex flex-row justify-between w-[80em] mt-10">
        <div className="border-2 border-black flex flex-col gap-10 items-center w-[25em] h-[35em] ">
          <div className="shadow-md w-full relative">
            <Image src={bgImage} alt="img1" className="w-full h-full object-cover"/>
            <Link href="/Formulation" className="absolute bottom-5 text-3xl">Formulation</Link>
            
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ut explicabo quis assumenda accusantium placeat repellat, sint ipsam
            ex ullam veniam. Neque quam iste eveniet. Veritatis dolore impedit a
            culpa?
          </div>
          <button className="w-fit h-fit p-5 shadow-md rounded-md hover:bg-green-400 hover:scale-105 hover:outline-1"><Link href="/Formulation">Read more</Link></button>
        </div>

        <div className="border-2 border-black flex flex-col gap-10 items-center w-[25em] h-[35em] ">
          <div className="shadow-md w-full relative">
            <Image src={bgImage} alt="img1" className="w-full h-full object-cover"/>
            <Link href="/ECG" className="absolute bottom-5 text-3xl">ESG</Link>
            
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ut explicabo quis assumenda accusantium placeat repellat, sint ipsam
            ex ullam veniam. Neque quam iste eveniet. Veritatis dolore impedit a
            culpa?
          </div>
          <button className="w-fit h-fit p-5 shadow-md rounded-md hover:bg-green-400 hover:scale-105 hover:outline-1"><Link href="/ECG">Read more</Link></button>
        </div>

        <div className="border-2 border-black flex flex-col gap-10 items-center w-[25em] h-[35em] ">
          <div className="shadow-md w-full relative">
            <Image src={bgImage} alt="img1" className="w-full h-full object-cover"/>
            <Link href="/Inlumin" className="absolute bottom-5 text-3xl">Inlumin</Link>
            
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ut explicabo quis assumenda accusantium placeat repellat, sint ipsam
            ex ullam veniam. Neque quam iste eveniet. Veritatis dolore impedit a
            culpa?
          </div>
          <button className="w-fit h-fit p-5 shadow-md rounded-md hover:bg-green-400 hover:scale-105 hover:outline-1"><Link href="/Inlumin">Read more</Link></button>
        </div>
      </div>
    </div>
  );
}
