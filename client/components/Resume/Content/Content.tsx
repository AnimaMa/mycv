import React from "react";
import { useResume } from "../ResumeProvider/ResumeProvider";
import { useSections } from "./hooks/useSections";
import { Summary } from "./sections/Summary";
import { filterEmptySections } from "../../utils/filterEmptySections";

export const Content = () => {
  const sections = useSections();
  return (
    <div className="container mx-auto  p-10 sm:w-3/5">
      <div>
        <Summary />
        {sections.filter(filterEmptySections).map((section) => (
          <div key={section.name}>{section.component}</div>
        ))}
      </div>
    </div>
  );
};
