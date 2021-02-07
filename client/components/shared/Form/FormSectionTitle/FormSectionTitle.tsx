import React, { ReactNode } from "react"
import styled from "styled-components"
import { theme } from "../../Theme/Theme"

export interface FormSectionTitleProps {
  className?: string
  children: ReactNode
}

const FormSectionTitleInner = (props: FormSectionTitleProps) => {
  return <p className={props.className}>{props.children}</p>
}

export const FormSectionTitle = styled(FormSectionTitleInner)`
  color: ${theme.color.primary};
  font-size: 30px;
  margin: 10px 0;
  line-height: 38px;
`
