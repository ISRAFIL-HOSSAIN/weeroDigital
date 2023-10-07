"use client";
import React from "react";
import SectionTitle from "./Common/SectionTitle";
import Tab from "./Common/Tab";
import { technologies } from "@/constants";
import ProjectCard from "./Common/Card/ProjectCard";
import { SectionWrapper } from "@/hoc";

const buttons = [
  { id: "frontend", label: "FrontEnd" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "nocode", label: "NoCode" },
  { id: "db", label: "DB" },
];

interface Technology {
  id: number;
  name: string;
  icon: string;
}

interface TechnologiesData {
  frontend: Technology[];
  backend: Technology[];
  mobile: Technology[];
  nocode: Technology[];
  db: Technology[];
}

const TechnologyCategory: React.FC<{ id: string; data: Technology[] }> = ({
  id,
  data,
}) => (
  <div id={id} className="mt-10 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 justify-center items-center gap-7 lg:px-0 px-4">
    {data?.map((tech, techIndex) => (
      <ProjectCard
        key={techIndex}
        index={techIndex}
        height="160px"
        width="150px"
        {...tech}
      />
    ))}
  </div>
);

const Technologies: React.FC = () => (
  <>
    <div className="w-full h-full justify-center items-center flex flex-col z-0 overflow-hidden">
      <SectionTitle
        subtitle={""}
        title={"Our Technologies"}
        subtext={``}
        align={"center"}
      />

      <div className="mt-5 mx-auto justify-center items-center flex sm:flex-wrap w-full lg:px-0 px-5">
        <Tab buttons={buttons}>
          {buttons.map((button) => (
            <TechnologyCategory
              key={button.id}
              id={button.id}
              data={technologies[button.id as keyof TechnologiesData]}
            />
          ))}
        </Tab>
      </div>
    </div>
  </>
);

export default  SectionWrapper(Technologies,"#technologie")
