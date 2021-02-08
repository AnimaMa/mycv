import Card from "@material-ui/core/Card"
import React, { ReactNode } from "react"

export interface FormSectionProps {
  className?: string
  children: ReactNode
}

const FormSectionInner = (props: FormSectionProps) => {
  return (
    <section className={"my-5"}>
      <Card className="p-14">{props.children}</Card>
    </section>
  )
}

export const FormSection = FormSectionInner

// export const FormSection = styled(FormSectionInner)`
//   margin: 25px 0;

//   .card {
//     padding: 25px 50px;
//   }
// `
