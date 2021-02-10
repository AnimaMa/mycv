import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"

export interface NameDisplayProps {
  className?: string
}

const NameDisplayInner = (props: NameDisplayProps) => {
  const { basics } = useResume()
  return <p className="my-3 font-bold text-2xl text-dark mx-auto">{`${basics.firstName} ${basics.lastName}`}</p>
}

export const NameDisplay = NameDisplayInner
