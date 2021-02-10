import React from "react"
import { Education } from "./sections/Education"
import { Summary } from "./sections/Summary"
import { WorkExperiences } from "./sections/WorkExperiences"
import styles from "./content.module.css"
import { References } from "./sections/References/References"

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
      </div>
    </div>
  )
}
