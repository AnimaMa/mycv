import React from "react";
import styled from "styled-components";

export interface PageHeaderProps {
  className?: string;
}

const PageHeaderInner = (props: PageHeaderProps) => {
  return (
    <div className={props.className}>
      <h1></h1>
    </div>
  );
};

export const PageHeader = styled(PageHeaderInner)`
  min-height: 200px;
  background-color: lightblue;
`;
