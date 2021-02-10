import React from "react"
import { SectionHeading } from "../../../components/SectionHeading"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { Course } from "./components/Course"

export interface CoursesProps {
  className?: string
}

export const Courses = (props: CoursesProps) => {
  const { course } = useResume()
  return (
    <div className={props.className}>
      <SectionHeading withIcon={true} heading="Kurzy" iconUrl="/img/icon_certificate.svg" iconAlt="certificate icon" />

      <div className="flex flex-wrap md:pl-14 ">
        {course?.map((course) => (
          <Course {...course} />
        ))}
      </div>
    </div>
  )
}
