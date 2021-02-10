import React from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface CoursesProps {
  className?: string
}

export const Courses = (props: CoursesProps) => {
  const { course } = useResume()
  return (
    <div className={props.className}>
      <SectionHeading withIcon={true} heading="Kurzy" iconUrl="/img/icon_certificate.svg" iconAlt="certificate icon" />

      <div className="flex flex-wrap md:pl-12">
        {course &&
          course.map((c) => (
            <div className="mr-2" key={c.id}>
              <p className="text-secondary font-bold uppercase my-2">{c.name}</p>
              {c.place ? (
                <div className="  mb-1">
                  <p>Miesto kurzu:</p>
                  <p className="pl-2">{c.place}</p>
                </div>
              ) : (
                ""
              )}

              {c.website ? (
                <div className=" mb-1">
                  <p>Web kurzu:</p>
                  <p className="pl-2">
                    <a href={c.website} className="hover:text-opacity-50">
                      {c.website}
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
              {/* {c.certificate} */}
            </div>
          ))}
      </div>
    </div>
  )
}
