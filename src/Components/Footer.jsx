"use client";
import React, { useState } from "react";

import FooterImgCard from "./FooterImgCard";

function Footer() {
  const details = [
    {
      name: "Shankar",
      role: "Head Of Operational Excellence @Acrolab",
    },
    {
      name: "Vibhor",
      role: "Deputy Head of Operational Excellence @Arcolab",
    },
  ];
  return (
    <footer className="h-[100vh] border-t-2 border-black pt-10 flex flex-col gap-[15em] ">
        <span className="text-3xl font-thin ml-10">Team Members</span>
        <div className="grid grid-cols-4 ml-10">
        {details.map((member, index) => {
        return (
          <FooterImgCard
            key={index}
            memberName={member.name}
            role={member.role}
          />
        );
      })}

        </div>
      
    </footer>
  );
}

export default Footer;
