import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionWrap } from "../../components/SectionWrap";
import { useResume } from "../../ResumeProvider/ResumeProvider";

export interface SkillsProps {
  className?: string;
}

export const Skills = (props: SkillsProps) => {
  const { skill } = useResume();
  return (
    <div className={props.className} id="skills">
      <SectionHeading
        withIcon={true}
        heading="Zručnosti / Silné stránky"
        iconUrl="/img/icon_skill.svg"
        iconAlt="skill icon"
      />
      <SectionWrap>
        {skill &&
          skill.map((s) => (
            <div className="flex mb-6 flex-col" key={s.id}>
              <p className="text-secondary  mr-2 font-light mb-2">{s.name}</p>
              <p className="text-primary mr-2 font-light mb-1">
                Level: <span className="text-dark">{s.level}</span>
              </p>
              <p className="text-primary font-light">
                Využité technológie / praktiky: <span className="text-dark">{s.technologies}</span>
              </p>
            </div>
          ))}
      </SectionWrap>
    </div>
  );
};
