"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { whatsapp } from "@/components/Common/CdnAssets";
import { generateWhatsAppLink } from "@/utils/whatsapp";

type Props = {};

const Whatsapp = (props: Props) => {
  
  return (
    <Link
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
        <Image
          src={whatsapp}
          alt="whatsapp"
          className="w-16 h-16 object-contain rounded-full shadow-md hover:shadow-xl hover:w-20 hover:h-20 animate-bounce "
          width={100}
          height={100}
        />
      </div>
    </Link>
  );
};

export default Whatsapp;
