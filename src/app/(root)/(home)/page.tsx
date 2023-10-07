import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import Technologies from "@/components/Technologies";
import Whatsapp from "@/components/Whatsapp";
import { StarsCanvas } from "@/components/canvas";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      {/* <BlobComponent /> */}
      <div className="relative z-0 w-full">
        <ShowCase />
        <StarsCanvas />
      </div>

      <AboutUs />

      <Feedback />

      <div className="relative z-0 w-full">
        <Contact />
        <StarsCanvas />
      </div>

      <Whatsapp />
    </>
  );
};

export default Page;
