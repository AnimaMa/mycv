import React from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { SectionWrap } from "../../components/SectionWrap"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface InterestProps {
  className?: string
}

const chunk = (arr, len) => {
  var chunks = [],
    i = 0,
    n = arr.length

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)))
  }

  return chunks
}

export const Interest = (props: InterestProps) => {
  const { interest } = useResume()
  const columns = interest.length
  return (
    <div className={props.className} id="interests">
      <SectionHeading
        withIcon={true}
        heading="Záujmy / Záľuby"
        iconUrl="/img/icon_interests.svg"
        iconAlt="interests icon"
      />
      <div id="interest">
        <SectionWrap className="flex flex-row flex-wrap ">
          {interest &&
            interest.map((interest, index) => (
              <span
                key={interest.id}
                className="text-secondary font-thin rounded border-blue-300 border-solid border-2 p-1 px-2  mr-3 my-2 "
              >
                {interest.name}
              </span>
            ))}
        </SectionWrap>
      </div>
    </div>
  )
}
