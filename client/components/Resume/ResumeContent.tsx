import Image from "next/image";
import React from "react";
import { filterEmptySections } from "../utils/filterEmptySections";
import { Aside } from "./Aside/Aside";
import { Content } from "./Content/Content";
import { useSections } from "./Content/hooks/useSections";

export const ResumeContent = () => {
  const sections = useSections();
  return (
    <div className="wrapper">
      <nav className="flex items-center justify-end">
        <div className="flex  justify-center ">
          <div className="flex items-end">
            <Image
              src="/img/vlnka.svg"
              alt="cloudresume logo"
              width={200}
              height={75}
              className=" object-cover w-full"
            />
          </div>

          <div className="sm:flex  min-w-300 bg-white items-center px-4 space-x-4 pr-8">
            {Object.values(sections)
              .filter(filterEmptySections)
              .map((section) => (
                <a
                  href={`#${section.link}`}
                  className="text-primary text-sm sm:flex hidden hover:text-secondary font-normal uppercase"
                >
                  {section.name}
                </a>
              ))}
          </div>
        </div>
      </nav>

      <div className="flex flex-col xl:flex-row bg-white h-full relative w-full mb-8">
        <Aside />
        <Content />
      </div>
    </div>
  );
};
