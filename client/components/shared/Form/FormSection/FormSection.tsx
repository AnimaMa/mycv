import Card from "@material-ui/core/Card"
import React, { ReactNode } from "react"

export interface FormSectionProps {
  className?: string
  children: ReactNode
}

const FormSectionInner = (props: FormSectionProps) => {
  return (
    <section className="my-5">
      <Card className="md:p-10 sm:p-4 p-4">{props.children}</Card>
    </section>
  )
}

export const FormSection = FormSectionInner
