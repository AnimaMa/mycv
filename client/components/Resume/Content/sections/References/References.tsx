import React from "react"
import { SectionHeading } from "../../../components/SectionHeading"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { SingleReference } from "./components/SingleReference"

export interface ReferencesProps {
  className?: string
}

export const References = (props: ReferencesProps) => {
  const { reference } = useResume()
  return (
    <div className={props.className} id="references">
      <SectionHeading withIcon={true} heading="Referencie" iconUrl="/img/icon_rating.svg" iconAlt="rating icon" />
      <div className="references space-y-8">
        {reference.map((reference, index) => (
          <SingleReference {...reference} key={index} />
        ))}
      </div>
    </div>
  )
}
