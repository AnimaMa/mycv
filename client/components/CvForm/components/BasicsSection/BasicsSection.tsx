import React from "react"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { Address } from "./components/Address"
import { Info } from "./components/Info"
import { Networks } from "./components/Networks"
import { Summary } from "./components/Summary"

export interface BasicsSectionProps {
  className?: string
}

const BasicsSectionInner = (props: BasicsSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Základné informácie </FormSectionTitle>

      <Info />
      <Summary />
      <Address />
      <Networks />
    </FormSection>
  )
}

export const BasicsSection = BasicsSectionInner
