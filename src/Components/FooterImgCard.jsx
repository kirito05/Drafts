"use client";
import React, { useState } from "react";
import Image from "next/image";
import demoImg from "../../public/download.png";

function FooterImgCard({ memberName, role }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="border-2 border-black w-[30em] h-[50em]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[30em]">
        <Image
          src={demoImg}
          alt="member photo"
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute bottom-4 text-3xl font-light ${
            memberName.length > 8 ? "w-fit" : ""
          }`}
        >
          {memberName}
        </span>
      </div>
      <div className="flex flex-col border-t-2 border-slate-400 pt-4">
        {<span className={`text-2xl font-semibold opacity-0 ${isHovered?"opacity-100 translate-y-[-0.5em] delay-150 shadow-lg bg-transparent text-center":""}`}>{role}</span>}
        <span className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          quo error, quos architecto odio possimus praesentium qui corporis
          iusto aut, quod, accusantium ab impedit ducimus. Tenetur aliquam iste
          facilis maiores!
        </span>
      </div>
    </div>
  );
}

export default FooterImgCard;
