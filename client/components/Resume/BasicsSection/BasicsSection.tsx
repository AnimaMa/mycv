import React from "react"
import { NameDisplay } from "./components/NameDisplay"

export interface BasicsSectionProps {
  className?: string
}

const BasicsSectionInner = (props: BasicsSectionProps) => {
  return (
    <div className={props.className}>
      <NameDisplay />
    </div>
  )
}

export const BasicsSection = BasicsSectionInner
