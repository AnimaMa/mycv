import React, { ReactNode } from "react"
import Image from "next/image"

export interface SectionHeadingProps {
  className?: string
  withIcon?: boolean
  iconUrl?: string
  iconAlt?: string
  heading: string
}

export const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <div className={` ${props.withIcon ? "flex items-center" : ""} mt-12 mb-5`}>
      {props.withIcon && (
        <span className="mr-6">
          <Image src={props.iconUrl} alt={props.iconAlt} width={40} height={45} />
        </span>
      )}
      <h2 className=" text-primary text-3xl text-bold ">{props.heading} </h2>
    </div>
  )
}
