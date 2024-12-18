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
      name:"karthik",
      role:"Associate Head of the Department"
    },
    {
      name: "Vibhor",
      role: "Deputy Head of Operational Excellence @Arcolab",
    },
  ];
  return (
    <footer className=" border-t-2 border-black flex flex-col gap-5">
        <span className="text-3xl font-semibold p-5">Team Members</span>
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
