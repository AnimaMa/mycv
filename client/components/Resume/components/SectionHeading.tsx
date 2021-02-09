import React, { ReactNode } from "react"

export interface SectionHeadingProps {
  className?: string
  children: ReactNode
}

export const SectionHeading = (props: SectionHeadingProps) => {
  return <h2 className="text-primary text-3xl text-bold ">{props.children}</h2>
}
