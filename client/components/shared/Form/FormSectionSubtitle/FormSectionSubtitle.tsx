import React, { ReactNode } from "react"

export interface FormSectionSubtitleProps {
  className?: string
  children: ReactNode
}

const FormSectionSubtitleInner = (props: FormSectionSubtitleProps) => {
  return <p className={`${props.className} text-secondary text-base mt-4`}>{props.children}</p>
}

export const FormSectionSubtitle = FormSectionSubtitleInner
//   color: ${(props) => props.theme.color.secondary};
//   font-size: 20px;
//   margin: 10px 0;
//   line-height: 28px;
// `
