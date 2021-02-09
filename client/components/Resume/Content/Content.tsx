import React from "react"
import { Summary } from "./sections/Summary"
import { WorkExperiences } from "./sections/WorkExperiences"

export interface ContentProps {
  className?: string
}

export const Content = (props: ContentProps) => {
  return (
    <div className="conatiner mx-aut sm:w-3/4 p-10 ">
      <div className="  bg-scroll w-full">
        <Summary />
        <WorkExperiences />
      </div>
    </div>
  )
}
