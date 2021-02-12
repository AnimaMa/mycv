import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { useResume } from "../../ResumeProvider/ResumeProvider";

export interface SummaryProps {
  className?: string;
}

export const Summary = (props: SummaryProps) => {
  const resume = useResume();
  return (
    <div className={props.className}>
      <SectionHeading className="md:text-4xl font-regular" heading="O mne" />
      <p className="text-dark text-base leading-normal font-thin ">{resume.basics.summary}</p>
    </div>
  );
};
