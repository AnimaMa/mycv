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
      <SectionHeading heading="Referencie" />

      <div>
        <Carousel autoPlay showArrows={false} showThumbs={false} dynamicHeight={false} transitionTime={100}>
          {reference.map((reff) => (
            <div className="bg-shadow h-89 py-5 px-5" key={reff.id}>
              <div className="flex justify-between">
                <h3>
                  {reff.name}{" "}
                  <span className="text-xs">
                    {reff.position}, {reff.company}
                  </span>
                </h3>
                <GoQuote className="text-primary text-2xl" />
              </div>
              <div className="my-2">
                <p className="text-left">{reff.reference}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
