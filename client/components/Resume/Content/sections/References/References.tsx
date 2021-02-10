import React from "react"
import { Carousel } from "react-responsive-carousel"
import { SectionHeading } from "../../../components/SectionHeading"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { GoQuote } from "react-icons/go"
import { SingleReference } from "./components/SingleReference"
// import "./references.css"

export interface ReferencesProps {
  className?: string
}

export const References = (props: ReferencesProps) => {
  const { reference } = useResume()
  return (
    <div className={props.className}>
      <SectionHeading withIcon={true} heading="Referencie" iconUrl="/img/icon_rating.svg" iconAlt="rating icon" />

      <div>
        {/* <Carousel
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
          infiniteLoop={true}
        >
          {reference.map((reference) => (
            <SingleReference {...reference} />
          ))}
        </Carousel> */}
      </div>
      <div className="references space-y-8">
        {reference.map((reference) => (
          <SingleReference {...reference} />
        ))}
      </div>
    </div>
  )
}
