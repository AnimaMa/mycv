import React from "react"
import { Address } from "./components/Address"
import { ContactInfo } from "./components/ContactInfo"
import { NameDisplay } from "./components/NameDisplay"
import { Networks } from "./components/Networks"
import { PhotoDisplay } from "./components/PhotoDisplay"

export interface BasicsSectionProps {
  className?: string
}

const BasicsSectionInner = (props: BasicsSectionProps) => {
  return (
    <div className={props.className}>
      <PhotoDisplay />
      <NameDisplay />
      <Networks />
      <ContactInfo />
      <Address />
    </div>
  )
}

export const BasicsSection = BasicsSectionInner
