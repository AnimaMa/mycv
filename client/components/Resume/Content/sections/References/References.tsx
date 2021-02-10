import React from "react"
import { Carousel } from "react-responsive-carousel"
import { SectionHeading } from "../../../components/SectionHeading"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { GoQuote } from "react-icons/go"
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
        <Carousel
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
          infiniteLoop={true}
        >
          {reference.map((reference) => (
            <div className="bg-shadow  md:h-44 h-auto py-5 px-5 rounded" key={reference.id}>
              <div className="flex justify-between">
                <h3>
                  {reference.name}{" "}
                  <span className="text-xs">
                    {reference.position}, {reference.company}
                  </span>
                </h3>
                <GoQuote className="text-primary text-2xl" />
              </div>
              <div className="my-2">
                <p className="text-left">{reference.reference}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
