import Card from "@material-ui/core/Card";
import React, { ReactNode } from "react";
import styled from "styled-components";

export interface FormSectionProps {
  className?: string;
  children: ReactNode;
}

const FormSectionInner = (props: FormSectionProps) => {
  return (
    <section className={props.className}>
      <Card className="card">{props.children}</Card>
    </section>
  );
};

export const FormSection = styled(FormSectionInner)`
  margin: 25px 0;

  .card {
    padding: 25px 50px;
  }
`;
