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

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {course?.map((course, index) => (
          <Course {...course} key={index} />
        ))}
        {course?.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  )
}
