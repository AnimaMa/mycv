import React from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface SkillsProps {
  className?: string
}

export const Skills = (props: SkillsProps) => {
  const { skill } = useResume()
  return (
    <div className={props.className}>
      <SectionHeading
        withIcon={true}
        heading="Zručnosti / Silné stránky"
        iconUrl="/img/icon_skill.svg"
        iconAlt="skill icon"
      />
      <div>
        {skill &&
          skill.map((s) => (
            <div className="flex mb-3 flex-col">
              <p className="text-secondary font-bold mr-2  ">{s.name}</p>
              <p className="text-primary mr-2 ">
                {" "}
                Level: <span className="text-dark">{s.level}</span>
              </p>
              <p className="text-primary">
                Využité technológie / praktiky: <span className="text-dark">{s.technologies}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}
