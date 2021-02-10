import React from "react"
import { Courses } from "./sections/Courses"
import { Education } from "./sections/Education"
import { Interest } from "./sections/Interest"
import { Languages } from "./sections/Languages"
import { References } from "./sections/References/References"
import { Skills } from "./sections/Skills"
import { Summary } from "./sections/Summary"
import { WorkExperiences } from "./sections/WorkExperiences"

export interface ContentProps {
  className?: string
}

export const Content = (props: ContentProps) => {
  return (
    <div className="conatiner mx-auto sm:w-3/4 p-10 s ">
      {/* <div className={`overflow-y-scroll ${styles.innerWrap}`}> */}
      <div>
        <Summary />
        <WorkExperiences />
        <Education />
        <References />
        <Courses />
        <Languages />
        <Skills />
        <Interest />
      </div>
    </div>
  )
}
