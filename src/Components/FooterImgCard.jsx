"use client";
import React, { useState } from "react";
import Image from "next/image";
import demoImg from "../../public/download.png";

function FooterImgCard({ memberName, role }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center gap-10"
    >
        <Image
          src={demoImg}
          alt="member photo"
          className="h-[30vh] w-[20em] lg:w-[20em] lg:h-[30vh] md:h-[15vh] md:w-[15em] sm:h-[15vh] sm:w-[15em]"
          style={{borderRadius:"20em"}}
        />
      <div className="text-2xl">
        {memberName}

      </div>
    </div>
  );
}

export default FooterImgCard;
