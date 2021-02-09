import React, { ReactNode } from "react"

export interface SectionHeadingProps {
  className?: string
  children: ReactNode
}

export const SectionHeading = (props: SectionHeadingProps) => {
  return <h2 className="text-primary text-3xl text-bold mt-7 mb-5">{props.children}</h2>
}
