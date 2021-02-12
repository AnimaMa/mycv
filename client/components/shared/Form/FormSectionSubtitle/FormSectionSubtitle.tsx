import React, { ReactNode } from "react"

export interface FormSectionSubtitleProps {
  className?: string
  children: ReactNode
}

const FormSectionSubtitleInner = (props: FormSectionSubtitleProps) => {
  return <p className={`${props.className} text-secondary text-xl font-thin mt-4`}>{props.children}</p>
}

export const FormSectionSubtitle = FormSectionSubtitleInner