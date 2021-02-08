import React, { ReactNode } from "react"

export interface FormSectionTitleProps {
  className?: string
  children: ReactNode
}

const FormSectionTitleInner = (props: FormSectionTitleProps) => {
  return <p className={props.className}>{props.children}</p>
}

export const FormSectionTitle = FormSectionTitleInner

//   color: ${theme.color.primary};
//   font-size: 30px;
//   margin: 10px 0;
//   line-height: 38px;
// `
