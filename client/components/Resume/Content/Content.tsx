import React from "react"
import { useResume } from "../ResumeProvider/ResumeProvider"
import { Courses } from "./sections/Courses/Courses"
import { Education } from "./sections/Education"
import { Interest } from "./sections/Interest"
import { Languages } from "./sections/Languages/Languages"
import { References } from "./sections/References/References"
import { Skills } from "./sections/Skills"
import { Summary } from "./sections/Summary"
import { WorkExperiences } from "./sections/WorkExperiences"

export const Content = () => {
  const { interest, reference, course, language, skill } = useResume()
  return (
    <div className="container mx-auto  p-10 sm:w-3/5">
      <div>
        <Summary />
        <WorkExperiences />
        <Education />
        {reference.length ? <References /> : ""}
        {course.length ? <Courses /> : ""}
        {language.length ? <Languages /> : ""}
        {skill.length ? <Skills /> : ""}
        {interest.length ? <Interest /> : ""}
      </div>
    </div>
  )
}
