import React from "react"
import { NameDisplay } from "./components/NameDisplay"
import { PhotoDisplay } from "./components/PhotoDisplay"

export interface BasicsSectionProps {
  className?: string
}

const BasicsSectionInner = (props: BasicsSectionProps) => {
  return (
    <div className={props.className}>
      <PhotoDisplay />
      <NameDisplay />
    </div>
  )
}

export const BasicsSection = BasicsSectionInner
