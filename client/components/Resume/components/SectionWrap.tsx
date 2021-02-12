import React, { ReactNode } from "react"

export interface SectionWrapProps {
  className?: string
  children: ReactNode
}

export const SectionWrap = (props: SectionWrapProps) => {
  return <div className={`${props.className} md:pl-16 px-2`}>{props.children}</div>
}
