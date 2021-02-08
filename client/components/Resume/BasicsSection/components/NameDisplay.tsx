import React from "react"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface NameDisplayProps {
  className?: string
}

const NameDisplayInner = (props: NameDisplayProps) => {
  const resume = useResume()
  return <div className={props.className}>meno: {resume.basics.firstName}</div>
}

export const NameDisplay = NameDisplayInner
