import React from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface InterestProps {
  className?: string
}

export const Interest = (props: InterestProps) => {
  const { interest } = useResume()
  return (
    <div className={props.className}>
      <SectionHeading
        withIcon={true}
        heading="Záujmy / Záľuby"
        iconUrl="/img/icon_interests.svg"
        iconAlt="interests icon"
      />

      <div id="interest">
        {interest &&
          interest.map((interest) => (
            <div className="flex mb-3  ">
              <p className="text-secondary  mr-2  ">{interest.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
