import React from "react"
import { SectionHeading } from "../../../components/SectionHeading"
import { SectionWrap } from "../../../components/SectionWrap"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { Course } from "./components/Course"

export interface CoursesProps {
  className?: string
}

export const Courses = (props: CoursesProps) => {
  const { course } = useResume()
  return (
    <div className={props.className} id="courses">
      <SectionHeading withIcon={true} heading="Kurzy" iconUrl="/img/icon_certificate.svg" iconAlt="certificate icon" />

      <div className="flex flex-wrap space-x-8">
        {course?.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  )
}
