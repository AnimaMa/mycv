import React from "react"
import { IoMdGlobe } from "react-icons/io"
import { MdPlace } from "react-icons/md"
import { Resumes } from "../../../../../../lib/models/resume"

export interface CourseProps extends Resumes.Course {
  className?: string
}

export const Course = (props: CourseProps) => {
  const { id, name, place, website } = props
  return (
    <div className="flex justify-between flex-col mr-5 " key={id}>
      <p className="text-secondary font-bold uppercase my-2">{name}</p>

      {place && (
        <div className="my-3">
          <p className="pl-2 flex pr-3">
            <MdPlace className="text-primary" />
            <span className="ml-3">{place}</span>
          </p>
        </div>
      )}

      {website && (
        <div className="my-3">
          <p className="pl-2 flex">
            <IoMdGlobe className="text-primary" />
            <a href={website} className="hover:text-opacity-50 ml-3">
              {website}
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
