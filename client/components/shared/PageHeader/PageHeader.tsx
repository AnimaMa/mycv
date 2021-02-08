import React from "react"

export interface PageHeaderProps {
  className?: string
}

const PageHeaderInner = (props: PageHeaderProps) => {
  return (
    <div className={props.className}>
      <h1></h1>
    </div>
  )
}

export const PageHeader = PageHeaderInner

//   min-height: 200px;
//   background-color: lightblue;
// `
