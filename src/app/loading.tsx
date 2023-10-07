import React from "react";
import { loader } from "./assets";
import Image from "next/image";

export default async function Loading() {
  
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
        <Image src={loader} width={500} height={500} alt="Loading" className="w-36 h-20"/>
    </div>
  );
};
