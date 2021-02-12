import React, { ReactNode } from "react"

export interface FormSectionTitleProps {
  className?: string
  children: ReactNode
}

const FormSectionTitleInner = (props: FormSectionTitleProps) => {
  return <p className={`${props.className} text-2xl  text-primary mb-10`}>{props.children}</p>
}

export const FormSectionTitle = FormSectionTitleInner
